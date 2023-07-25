import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'CharitAble',
  description: 'An Auto Donate Design',
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About Us',
        link: '/Introduction/Team-Members.md'
      },
      {
        text: 'Google',
        link: 'https://google.com'
      }
    ],
  }),

})





