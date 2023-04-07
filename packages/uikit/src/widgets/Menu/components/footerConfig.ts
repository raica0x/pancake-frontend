import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About Mars Swap"),
    items: [
      {
        label: t("Contact"),
        href: "https://mars-frontend-web.vercel.app/",
        isHighlighted: true,
      },
      {
        label: t("Brand"),
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: t("Community"),
        href: "https://mars-frontend-web.vercel.app/",
      },
    ],
  },
  {
    label: t("Need Help?"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: t("Troubleshooting"),
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: t("Guides"),
        href: "https://mars-frontend-web.vercel.app/",
      },
    ],
  },
  {
    label: t("For Developers"),
    items: [
      {
        label: "Github",
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: t("Documentation"),
        href: "https://mars-frontend-web.vercel.app/",
      },
      {
        label: t("Audits"),
        href: "https://mars-frontend-web.vercel.app/",
      },
    ],
  },
];
