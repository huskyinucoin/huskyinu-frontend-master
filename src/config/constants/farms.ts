import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 40,
    lpSymbol: 'HUSKY-BUSD LP',
    lpAddresses: {
      97: '0x9492975770086c7415bCf01a1A6EAD37CC178b5e',
      56: '0x9492975770086c7415bCf01a1A6EAD37CC178b5e',
    },
    tokenSymbol: 'HUSKY',
    tokenAddresses: {
      97: '0x8685666709d7c3150f0414274243ab82f2733504',
      56: '0x8685666709d7c3150f0414274243ab82f2733504',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HUSKY-BNB LP',
    lpAddresses: {
      97: '0xf0490ca3fcc5ace42f3261e705dd0b393bfbe116',
      56: '0xf0490ca3fcc5ace42f3261e705dd0b393bfbe116',
    },
    tokenSymbol: 'HUSKY',
    tokenAddresses: {
      97: '0x8685666709d7c3150f0414274243ab82f2733504',
      56: '0x8685666709d7c3150f0414274243ab82f2733504',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'HUSKY',
    tokenAddresses: {
      97: '0x8685666709d7c3150f0414274243ab82f2733504',
      56: '0x8685666709d7c3150f0414274243ab82f2733504',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    risk: 65,
    lpSymbol: 'HUSKY-EGG LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'HUSKY',
    tokenAddresses: {
      97: '0x8685666709d7c3150f0414274243ab82f2733504',
      56: '0x8685666709d7c3150f0414274243ab82f2733504',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 4,
    risk: 5,
    lpSymbol: 'HUSKY-SUSHI LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'HUSKY',
    tokenAddresses: {
      97: '0x8685666709d7c3150f0414274243ab82f2733504',
      56: '0x8685666709d7c3150f0414274243ab82f2733504',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

