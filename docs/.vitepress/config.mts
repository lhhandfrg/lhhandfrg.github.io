import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "刘哈哈的个人博客",
  // description: "A VitePress Site",
  head: [
    ['script',{src: '/js/welcome.js'}],
    ['link',{rel: 'stylesheet',href: '/css/nomouse.css'}],
    ['script',{ src: '/js/pointer.js'}],
    ['link',{rel:'icon',href: '/logo.png'}],
    ['script',{type: "text/javascript", src: '/js/clickjs/anime.min.js'}],
    ['script',{type: "text/javascript", src: '/js/clickjs/fireworks.js'}],
    [
      'script',
      {},
      `
      function runtime(){
        // 初始时间，日/月/年 时:分:秒
        X = new Date("5/8/2024 16:00:00");
        Y = new Date();
        T = (Y.getTime()-X.getTime());
        M = 24*60*60*1000;
        a = T/M;
        A = Math.floor(a);
        b = (a-A)*24;
        B = Math.floor(b);
        c = (b-B)*60;
        C = Math.floor((b-B)*60);
        D = Math.floor((c-C)*60);
        //信息写入到DIV中
        document.getElementById("runtime").innerHTML = "本站已运行: "+"<font style='color:#FFA500;font-weight:bold'>"+A+"</font>"+"天"+"<font style='color:#8A2BE2;font-weight:bold'>"+B+"</font>"+"小时<font style='color:#1DBF97;font-weight:bold'>"+C+"</font>分<font style='color:#007EC6;font-weight:bold'>"+D+"</font>秒"
    }
    setInterval(runtime, 1000);
      `
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '相册', link: 'Photo/index.md'},
      { text: '记录', link: '/Recording/index.md' },
      {text: '时间', link: '/Time/index.md'},
      {
        text: '网站相关',
        items: [
          { text: '关于本站', link: '/WebSite/index.md'},
          { text: '开发缘由', link: '/WebSite/develop-reason'},
          { text: '开发日记', link: '/WebSite/develop-days'},
          { text: '支持一下', link: '/WebSite/support'}
        ]
      },
      {
        text: '开发日志',
        link: '/WebSite/develop-days'
      },
      {
        text: '支持一下',
        link: '/WebSite/support'
      }
    ],

    // sidebar: [
    //   {
    //     text: '2024',
    //     items: [
    //       { text: '基于vitepress构建个人博客', link: '/2024/blog-github' },
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lhhandfrg' }
    ],
    editLink: {
      pattern: 'https://github.com/lhhandfrg/lhhandfrg.github.io',
      text: '在github编辑此页'
    },
    footer: {
      message: `本站收录内容源自互联网，不对其网站内容或交易负责。&ensp;|&ensp;如有内容侵犯权益，请联系站长删除相关内容！`,
      copyright: '<a href="https://space.bilibili.com/275305719" target="_blank">Copyright © 2024 bilibili.刘哈哈不会哈哈</a>&ensp;|&ensp;<span id="runtime"></span>'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    outlineTitle: "本页目录",
    // lastUpdated: true,
    // markdown: {
    //   lineNumbers: true,
    //   image: {
    //     // 默认禁用图片懒加载
    //     lazyLoading: true
    //   }
    // },
    search: {
      provider: 'local'
    },
  }
})
