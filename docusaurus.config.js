// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from 'prism-react-renderer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RNDVOUZ',
  tagline: 'Helping sustainable clothing, one swipe at a time.',
  // Set the production url of your site here
  url: 'https://rndvouz.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rndvouz', // Usually your GitHub org/user name.
  projectName: 'rndvouz.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch of the docs repo to publish.
  trailingSlash: false,
  favicon: '/img/image.png',

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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      // Replace with your project's social card
      navbar: {
        title: 'RNDVOUZ',
        //logo: {
        //  alt: 'RNDVOUZ Logo',
        //  src: 'img/logo.svg',
        //},
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rndvouz/rndvouz-mobile-app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: "Project Board",
            href: "https://github.com/orgs/rndvouz/projects/1"
          },
          {
            label: "Documentation Repo",
            href: "https://github.com/rndvouz/rndvouz.github.io/tree/main"
          },
          {
            label: "About Us",
            to: 'docs/about'
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RNDVOUZ`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
