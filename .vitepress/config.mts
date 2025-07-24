import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '开始',
        items: [
          { text: '架构说明', link: '/file-readme' },
          { text: '思维导图', link: '/framework-architecture-mindmap' },
          { text: '快速入门', link: '/framework-usage' },
          { text: 'ItemView', link: '/itemview' },
          { text: 'UiView', link: '/uiview' },
          { text: '服务ecs', link: '/server-ecs' },
          { text: '服务实体', link: '/server-ecs-entity' },
          { text: 'table表格配置项', link: '/table' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
