import { MediaControllerState, WebRTCSrc } from 'livepeer';
import { styling } from 'livepeer/media/browser/styling';
import {
  WebRTCVideoConfig,
  createNewWHEP,
} from 'livepeer/media/browser/webrtc';
import * as React from 'react';

import { VideoPlayerProps } from '.';

import { useMediaController } from '../../../../context';
import { useDebounce } from '../../../system';

const mediaControllerSelector = ({
  metadata,
  _element,
  setLive,
}: MediaControllerState<HTMLMediaElement, MediaStream>) => ({
  metadata,
  _element,
  setLive,
});

export type WebRTCVideoPlayerProps = Omit<
  VideoPlayerProps,
  'src' | 'hlsConfig'
> & {
  src: WebRTCSrc;
  fullscreen: boolean;
  webrtcConfig?: WebRTCVideoConfig;
};

export const WebRTCVideoPlayer = React.forwardRef<
  HTMLVideoElement,
  WebRTCVideoPlayerProps
>((props, ref) => {
  const {
    src,
    autoPlay,
    title,
    loop,
    muted,
    poster,
    objectFit,
    fullscreen,
    onPlaybackError,
    priority,
    webrtcConfig,
  } = props;

  const { metadata, _element, setLive } = useMediaController(
    mediaControllerSelector,
  );

  const onConnected = React.useCallback(async () => {
    onPlaybackError?.(null);
    setLive(true);
  }, [onPlaybackError, setLive]);

  React.useEffect(() => {
    if (metadata?.bframes) {
      onPlaybackError(
        new Error('Metadata indicates that WebRTC playback contains bframes.'),
      );
    }
  }, [metadata, onPlaybackError]);

  const [errorCount, setErrorCount] = React.useState(0);

  const debouncedErrorCount = useDebounce(errorCount, 1000 * errorCount);

  React.useEffect(() => {
    if (_element && src.src) {
      const onErrorComposed = (error: Error) => {
        setErrorCount((prev) => prev + 1);

        const cleanError = new Error(
          error?.message?.toString?.() ?? 'Error with WebRTC',
        );

        onPlaybackError?.(cleanError);
      };

      const { destroy } = createNewWHEP(
        src?.src,
        _element,
        {
          onConnected,
          onError: onErrorComposed,
        },
        webrtcConfig,
      );

      return () => {
        destroy?.();
      };
    }
  }, [
    webrtcConfig,
    _element,
    onConnected,
    src,
    onPlaybackError,
    debouncedErrorCount,
  ]);

  return (
    <video
      className={styling.media.video({
        size: fullscreen ? 'fullscreen' : objectFit,
      })}
      loop={loop}
      aria-label={title ?? 'Video player'}
      role="video"
      width="100%"
      height="100%"
      ref={ref}
      webkit-playsinline="true"
      playsInline
      autoPlay={autoPlay}
      muted={muted}
      poster={typeof poster === 'string' ? poster : undefined}
      preload={priority ? 'auto' : 'metadata'}
    />
  );
});
