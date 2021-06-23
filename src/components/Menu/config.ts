import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8685666709d7c3150f0414274243ab82f2733504',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x8685666709d7c3150f0414274243ab82f2733504',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Husky Pool',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Presale',
    icon: 'PoolIcon',
    href: 'https://huskyinu.finance/',
  },
   {
     label: 'Docs',
     icon: 'InfoIcon',
     href: 'https://huskyinu.docs.finance',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info/token/0x8685666709d7c3150f0414274243ab82f2733504',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/huskyinu",
		  },
      {
        label: "Twitter",
        href: "https://twitter.com/huskyinucoin",
      },
      {
        label: "Telegram",
        href: "https://t.me/HuskyINUGlobal",
      },
    ],
  },
]

export default config
