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
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xb96C05eC0c4e9a57a4964EB9FB110b2a9326273f',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0xb96C05eC0c4e9a57a4964EB9FB110b2a9326273f',
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
        href: 'https://pancakeswap.info/token/0xb96C05eC0c4e9a57a4964EB9FB110b2a9326273f',
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
