import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  communitySidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/joining', 'getting-started/roleplay-basics'],
    },
    {
      type: 'category',
      label: 'Rules',
      items: ['rules/server-rules'],
    },
    {
      type: 'category',
      label: 'Roleplay Systems',
      items: [
        'roleplay/character-cards',
        'roleplay/bloodlines',
        'roleplay/messenger-birds',
      ],
    },
    {
      type: 'category',
      label: 'Kingdoms',
      items: ['kingdoms/overview', 'kingdoms/claims', 'kingdoms/wars'],
    },
    {
      type: 'category',
      label: 'Economy',
      items: ['economy/overview', 'economy/skills'],
    },
    {
      type: 'category',
      label: 'Combat',
      items: ['combat/custom-weapons', 'combat/mounted-combat'],
    },
    {
      type: 'category',
      label: 'Lore',
      items: ['lore/npcs', 'lore/whispering-heart'],
    },
  ],
};

export default sidebars;
