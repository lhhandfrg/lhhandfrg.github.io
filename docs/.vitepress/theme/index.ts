// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NavPage from '../../resources/NavPage.vue'
import RecorDing from '../../Recording/RecorDing.vue'
import ElementPlus from 'element-plus'
// import axios from 'axios'
import 'element-plus/dist/index.css'
import './style.css'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('NavPage',NavPage).use(ElementPlus)
    // app.component('RecorDing',RecorDing).use(axios)
    app.component('RecorDing',RecorDing).use(ElementPlus)
    // ...
  },
} satisfies Theme
