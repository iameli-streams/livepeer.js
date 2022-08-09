export const TicketBrokerABI = [
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '_sender', type: 'address' }],
    name: 'isUnlockInProgress',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'unlockPeriod',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'uint256', name: '_unlockPeriod', type: 'uint256' },
    ],
    name: 'setUnlockPeriod',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_reserveHolder',
        type: 'address',
      },
      { internalType: 'address', name: '_claimant', type: 'address' },
    ],
    name: 'claimedReserve',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: '_depositAmount',
        type: 'uint256',
      },
      { internalType: 'uint256', name: '_reserveAmount', type: 'uint256' },
    ],
    name: 'fundDepositAndReserve',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'targetContractId',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    name: 'usedTickets',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: '_reserveHolder', type: 'address' },
    ],
    name: 'getReserveInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'fundsRemaining',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'claimedInCurrentRound',
            type: 'uint256',
          },
        ],
        internalType: 'struct MReserve.ReserveInfo',
        name: 'info',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'fundDeposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'fundReserve',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_reserveHolder',
        type: 'address',
      },
      { internalType: 'address', name: '_claimant', type: 'address' },
    ],
    name: 'claimableReserve',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ticketValidityPeriod',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: '_controller', type: 'address' }],
    name: 'setController',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'unlock',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'faceValue', type: 'uint256' },
          { internalType: 'uint256', name: 'winProb', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'senderNonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'recipientRandHash',
            type: 'bytes32',
          },
          { internalType: 'bytes', name: 'auxData', type: 'bytes' },
        ],
        internalType: 'struct MTicketBrokerCore.Ticket',
        name: '_ticket',
        type: 'tuple',
      },
    ],
    name: 'getTicketHash',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'cancelUnlock',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: '_ticketValidityPeriod',
        type: 'uint256',
      },
    ],
    name: 'setTicketValidityPeriod',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'faceValue', type: 'uint256' },
          { internalType: 'uint256', name: 'winProb', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'senderNonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'recipientRandHash',
            type: 'bytes32',
          },
          { internalType: 'bytes', name: 'auxData', type: 'bytes' },
        ],
        internalType: 'struct MTicketBrokerCore.Ticket[]',
        name: '_tickets',
        type: 'tuple[]',
      },
      { internalType: 'bytes[]', name: '_sigs', type: 'bytes[]' },
      {
        internalType: 'uint256[]',
        name: '_recipientRands',
        type: 'uint256[]',
      },
    ],
    name: 'batchRedeemWinningTickets',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '_sender', type: 'address' }],
    name: 'getSenderInfo',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'deposit', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'withdrawRound',
            type: 'uint256',
          },
        ],
        internalType: 'struct MixinTicketBrokerCore.Sender',
        name: 'sender',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'fundsRemaining',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'claimedInCurrentRound',
            type: 'uint256',
          },
        ],
        internalType: 'struct MReserve.ReserveInfo',
        name: 'reserve',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'faceValue', type: 'uint256' },
          { internalType: 'uint256', name: 'winProb', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'senderNonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'recipientRandHash',
            type: 'bytes32',
          },
          { internalType: 'bytes', name: 'auxData', type: 'bytes' },
        ],
        internalType: 'struct MTicketBrokerCore.Ticket',
        name: '_ticket',
        type: 'tuple',
      },
      { internalType: 'bytes', name: '_sig', type: 'bytes' },
      { internalType: 'uint256', name: '_recipientRand', type: 'uint256' },
    ],
    name: 'redeemWinningTicket',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'controller',
    outputs: [
      { internalType: 'contract IController', name: '', type: 'address' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_controller', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFunded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'faceValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'winProb',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'senderNonce',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'recipientRand',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'auxData',
        type: 'bytes',
      },
    ],
    name: 'WinningTicketRedeemed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WinningTicketTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startRound',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endRound',
        type: 'uint256',
      },
    ],
    name: 'Unlock',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'UnlockCancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deposit',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reserve',
        type: 'uint256',
      },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'reserveHolder',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'ReserveFunded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'reserveHolder',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'claimant',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'ReserveClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'controller',
        type: 'address',
      },
    ],
    name: 'SetController',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'ParameterUpdate',
    type: 'event',
  },
] as const;
