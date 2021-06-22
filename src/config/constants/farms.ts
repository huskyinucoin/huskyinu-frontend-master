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
      97: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
      56: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
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
      97: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
      56: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
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
      97: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
      56: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
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
      97: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
      56: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
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
      97: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
      56: '0xefd492eac38c1475200080ab7acc02c6d9209a9d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

