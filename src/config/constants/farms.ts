import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 4,
    lpSymbol: 'HUSKY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x584200eaa0F0d603301Af3aFc7f5CbBbA887756E',
    },
    tokenSymbol: 'HUSKY',
    tokenAddresses: {
      97: '',
      56: '0xb96C05eC0c4e9a57a4964EB9FB110b2a9326273f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'HUSKY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3156B469819F852F82E6DA679539Bab59D2B2Cf7',
    },
    tokenSymbol: 'HUSKY',
    tokenAddresses: {
      97: '',
      56: '0xb96C05eC0c4e9a57a4964EB9FB110b2a9326273f',
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
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    risk: 5,
    lpSymbol: 'HUSKY-EGG LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
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
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

