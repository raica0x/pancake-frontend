import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Blog",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Community",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "CAKE",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://mars-frontend-web.vercel.app/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Need Help?",
    items: [
      {
        label: "Customer Support",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Troubleshooting",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Guides",
        href: "https://mars-frontend-web.vercel.app/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Documentation",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Bug Bounty",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Audits",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: "Careers",
        href: "https://mars-frontend-web.vercel.app/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://mars-frontend-web.vercel.app/",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://mars-frontend-web.vercel.app/",
      },

      {
        label: "Announcements",
        href: "https://mars-frontend-web.vercel.app/",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://mars-frontend-web.vercel.app/",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://mars-frontend-web.vercel.app/",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://mars-frontend-web.vercel.app/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://mars-frontend-web.vercel.app/",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://mars-frontend-web.vercel.app/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
