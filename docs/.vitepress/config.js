export default {
  title: 'Vitepress Demo',
  search: true,
  themeConfig: {
    nav:nav(),

    sidebar: {
      '/guide/': sliderBarGuide(),
      '/config/': sliderBarConfig(),
    },

    socialLinks: [ 
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    algolia: {
      appId: '8J64VVRP8K', 
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright ? 2019-present Evan You'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }, 
  },
}


function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Config', link: '/config/', activeMatch: '/config/'}
  ]
}

function sliderBarGuide() {
  return [
    {
      text: 'Guide',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Guide-index-pages', link: '/guide/' },
        { text: 'Guide-index1-pages', link: '/guide/guideIndex' },
      ]
    },
  ]
}


function sliderBarConfig() {
  return [
     {
      text: 'Config',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Config-index-pages', link: '/config/' },
      ]
    },
  ]
}