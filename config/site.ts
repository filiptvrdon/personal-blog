export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Filip Tvrdoň",
  description: "Software Craftsman",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "CV",
      href: "/cv",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/filiptvrdon",
    linkedin: "https://www.linkedin.com/in/filip-tvrdon/",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
