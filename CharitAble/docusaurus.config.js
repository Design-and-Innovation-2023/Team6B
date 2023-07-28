// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CharitAble',
  tagline: 'Giving Made Simple',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Design-and-Innovation-2023.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Team6B/CharitAble/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Design-and-Innovation-2023', // Usually your GitHub org/user name.
  projectName: 'Team6B', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/Design-and-Innovation-2023/Team6B',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/Design-and-Innovation-2023/Team6B',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-about',
        path: 'docs-about',
        routeBasePath: 'docs-about',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CharitAble',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'designProcessSidebar',
            position: 'left',
            label: 'Design Process',
          },
          {
            to: 'blog', 
            label: 'Daily Journal', 
            position: 'left'
          },
          {
            to: '/docs-about/team-members/',
            position: 'left',
            label: 'About Us',
          },
          {
            href: 'https://github.com/Design-and-Innovation-2023/Team6B',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Design Process',
                to: '/docs/intro',
              },
              {
                label: 'Daily Journal',
                to: '/blog',
              },
              {
                label: 'About Us',
                to: '/docs-about/team-members',
              },
            ],
          },
          {
            title: 'Stakeholders',
            items: [
              {
                label: 'Professor Jonathan Grizou',
                href: 'https://jgrizou.com/',
              },
              {
                label: 'Barclays',
                href: 'https://www.barclays.co.uk/',
              },
              {
                label: 'University of Glasgow',
                href: 'https://www.gla.ac.uk/',
              },
              {
                label: 'Singapore Institute of Technology',
                href: 'https://www.singaporetech.edu.sg/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Design-and-Innovation-2023/Team6B',
              },
            ],
          },
          {
            title: 'Attributions',
            items: [
              {
                label: 'View here',
                href: 'https://github.com/Design-and-Innovation-2023/Team6B',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CharitAble: Giving Made Simple. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
