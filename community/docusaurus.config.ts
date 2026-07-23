import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Eldenstead | Docs',
  tagline: 'Player guides for the Eldenstead medieval fantasy roleplay server.',
  favicon: 'img/eldenstead-logo.png',

  future: {
    v4: true,
  },

  url: 'https://docs.eldenstead.com',
  baseUrl: '/community/',
  organizationName: 'Eldenstead',
  projectName: 'eldenstead-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'communitySidebar',
          position: 'left',
          label: 'Guides',
        },
        {type: 'custom-gitbookSearch', position: 'left'},
        {href: 'https://docs.eldenstead.com/operations/', label: 'Operations', position: 'left'},
        {href: 'https://eldenstead.com/forum', label: 'Forum', position: 'right'},
        {href: 'https://discord.eldenstead.com', label: 'Discord', position: 'right'},
        {href: 'https://eldenstead.com', label: 'Website', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started/joining'},
            {label: 'Rules', to: '/docs/rules/server-rules'},
            {label: 'Kingdoms', to: '/docs/kingdoms/overview'},
          ],
        },
        {
          title: 'Eldenstead',
          items: [
            {label: 'Website', href: 'https://eldenstead.com'},
            {label: 'Discord', href: 'https://discord.eldenstead.com'},
            {label: 'Forum', href: 'https://eldenstead.com/forum'},
          ],
        },
        {
          title: 'More',
          items: [{label: 'Operations Manual', href: 'https://docs.eldenstead.com/operations/'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eldenstead. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
