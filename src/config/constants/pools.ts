import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
     sousId: 0,
     tokenName: 'HUSKY',
     stakingTokenName: QuoteToken.HUSKY,
     stakingTokenAddress: '0x8685666709d7c3150f0414274243ab82f2733504',
     contractAddress: {
       97: '0x9d8816326De18cAf8FBbDBE2201Ce84d59edCc6b',
       56: '0x6969BA137e503ff3513C5EA541FdE6db9b677176',
     },
     poolCategory: PoolCategory.CORE,
     projectLink: 'https://huskyinu.netlify.app',
     harvest: true,
     tokenPerBlock: '2',
     sortOrder: 10,
     isFinished: false,
     tokenDecimals: 18,
   },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
