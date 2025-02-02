import { Language } from "../LangSelector/types";
import { TelegramIcon, TwitterIcon } from "../Svg";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://blog.pancakeswap.finance/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/osk_labs",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    // items: [
    //   {
    //     label: "English",
    //     href: "https://t.me/pgchain_org",
    //   },
    //   {
    //     label: "Bahasa Indonesia",
    //     href: "https://t.me/pgchain_orgIndonesia",
    //   },
    //   {
    //     label: "中文",
    //     href: "https://t.me/pgchain_org_CN",
    //   },
    //   {
    //     label: "Tiếng Việt",
    //     href: "https://t.me/pgchain_orgVN",
    //   },
    //   {
    //     label: "Italiano",
    //     href: "https://t.me/pgchain_org_Ita",
    //   },
    //   {
    //     label: "русский",
    //     href: "https://t.me/pgchain_org_ru",
    //   },
    //   {
    //     label: "Türkiye",
    //     href: "https://t.me/pgchain_orgturkiye",
    //   },
    //   {
    //     label: "Português",
    //     href: "https://t.me/pgchain_orgPortuguese",
    //   },
    //   {
    //     label: "Español",
    //     href: "https://t.me/pgchain_orgES",
    //   },
    //   {
    //     label: "日本語",
    //     href: "https://t.me/pgchain_orgJP",
    //   },
    //   {
    //     label: "Français",
    //     href: "https://t.me/pgchain_orgFR",
    //   },
    //   {
    //     label: "Deutsch",
    //     href: "https://t.me/pgchain_org_DE",
    //   },
    //   {
    //     label: "Filipino",
    //     href: "https://t.me/pgchain_org_PH",
    //   },
    //   {
    //     label: "ქართული ენა",
    //     href: "https://t.me/pgchain_orgGeorgia",
    //   },
    //   {
    //     label: "हिन्दी",
    //     href: "https://t.me/pgchain_org_INDIA",
    //   },
    //   {
    //     label: "Announcements",
    //     href: "https://t.me/pgchain_orgAnn",
    //   },
    // ],
    href: "https://t.me/pgchain_org",
  },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  // {
  //   label: "Instagram",
  //   icon: InstagramIcon,
  //   href: "https://instagram.com/pancakeswap_official",
  // },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   href: "https://github.com/pancakeswap/",
  // },
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "https://discord.gg/pancakeswap",
  // },
  // {
  //   label: "Youtube",
  //   icon: YoutubeIcon,
  //   href: "https://www.youtube.com/@pancakeswap_official",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
