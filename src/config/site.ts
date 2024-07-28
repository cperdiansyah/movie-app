export type SiteConfig = typeof siteConfig
export type RuntimeEnvConfig = typeof runtimeEnvConfig

export const runtimeEnvConfig = {
  node_env: process.env.NODE_ENV,
  googleAnalytics_id: process.env.NEXT_PUBLIC_GA_ID,
}

export const siteConfig = {
  username: 'cperdiansyah',
  name: 'Movie App using Next Js 14 - Exploration',
  description: '',
  manifest: 'manifest.json',
  storageThemeKey: 'ui-theme',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      active: true,
    },
    {
      title: 'Aticle',
      href: '/articles',
      active: true,
    },
    {
      title: 'Projects',
      href: '/projects',
      active: true,
    },
    {
      title: 'Links',
      href: '/links',
      active: true,
    },
  ],
}
