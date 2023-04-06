import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Mars Swap',
  defaultTitle: 'Mars Swap',
  description:
    'Leading Shibarium Swap has arrived',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: 'Mars Swap - Evolving the space at Shibarium',
    description:
      'We came, we saw, we conquered! No#1 DEX on Shibarium has arrived to evolve with the space.',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
