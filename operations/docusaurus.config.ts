import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Eldenstead | Docs: Operations',
  tagline: 'Staff policies, runbooks, and operating standards for Eldenstead.',
  favicon: 'img/eldenstead-logo.png',
  noIndex: true,

  future: {
    v4: true,
  },

  url: 'https://docs.eldenstead.com',
  baseUrl: '/operations/',
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
      title: 'Operations',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'operationsSidebar',
          position: 'left',
          label: 'Manual',
        },
        {type: 'custom-gitbookSearch', position: 'left'},
        {href: 'https://docs.eldenstead.com/community/', label: 'Community Docs', position: 'left'},
        {href: 'https://discord.eldenstead.com', label: 'Discord', position: 'right'},
        {href: 'https://eldenstead.com/forum', label: 'Forum', position: 'right'},
      ],
    },
    announcementBar: {
      id: 'staff-operations-notice',
      content:
        'Staff operations manual. Publish only content approved for the intended access-controlled audience.',
      backgroundColor: '#4b1d24',
      textColor: '#ffffff',
      isCloseable: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Operations',
          items: [
            {label: 'SOP Handbook', to: '/docs/welcome'},
            {label: 'Governance', to: '/docs/Governance/GOV-001_Staff_Roles_Authority_and_Escalation'},
            {label: 'Server Operations', to: '/docs/Server_Operations/OPS-001_Start_Stop_Restart_and_Console_Safety'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Community Docs', href: 'https://docs.eldenstead.com/community/'},
            {label: 'Discord', href: 'https://discord.eldenstead.com'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eldenstead. Internal operations documentation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
