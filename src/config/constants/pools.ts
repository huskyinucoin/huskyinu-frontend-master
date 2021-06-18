import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
     sousId: 0,
     tokenName: 'HUSKY',
     stakingTokenName: QuoteToken.HUSKY,
     stakingTokenAddress: '0xb96C05eC0c4e9a57a4964EB9FB110b2a9326273f',
     contractAddress: {
       97: '0x9d8816326De18cAf8FBbDBE2201Ce84d59edCc6b',
       56: '0x729D48B8D628FbF752E399dc42203DB0a10BcdFe',
     },
     poolCategory: PoolCategory.CORE,
     projectLink: 'https://huskyinu.online',
     harvest: true,
     tokenPerBlock: '4',
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
