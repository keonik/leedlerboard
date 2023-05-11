export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Leedlerboard",
  description: "Another leaderboard app, to get familiar with some new tech.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Leaderboards",
      href: "/leaderboards",
    }
  ],
  links: {
    // twitter: "https://twitter.com/shadcn",
    github: "https://github.com/keonik/leedlerboard",
    leaderboards: "/leaderboards", 
    // docs: "https://ui.shadcn.com",
  },
};
