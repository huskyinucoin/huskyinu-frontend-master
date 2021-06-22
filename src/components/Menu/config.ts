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
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xefd492eac38c1475200080ab7acc02c6d9209a9d',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0xefd492eac38c1475200080ab7acc02c6d9209a9d',
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
        href: 'https://pancakeswap.info/token/0xefd492eac38c1475200080ab7acc02c6d9209a9d',
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
