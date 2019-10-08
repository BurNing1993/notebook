module.exports = {
  title: 'Notebook',
  description: 'Notebook,笔记',
  base: '/notebook/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    sidebar: 'auto',
    lastUpdated: 'LastUpdated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'TypeScript', link: '/typescript/' },
      { text: 'Webpack', link: '/webpack/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Other', link: '/other/' },
      { text: 'Github', link: 'https://github.com/BurNing1993/notebook' },
    ]
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}