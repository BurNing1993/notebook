module.exports = {
  title: 'Notebook',
  description: 'Notebook,笔记',
  base: '/notebook/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    sidebar: 'auto',
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
  }
}