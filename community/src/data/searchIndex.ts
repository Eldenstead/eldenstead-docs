export type SearchEntry = {
  title: string;
  url: string;
  excerpt: string;
  text: string;
};

const searchIndex: SearchEntry[] = [
  {
    "title": "Custom Weapons",
    "url": "/docs/combat/custom-weapons",
    "excerpt": "Custom Weapons Eldenstead uses custom medieval weapons, armor, shields, crowns, smithing hooks, sharpening, and reforging. Weapon Families Weapon families may include spears, pikes, halberds, maces, axes, swords, daggers",
    "text": "Custom Weapons Eldenstead uses custom medieval weapons, armor, shields, crowns, smithing hooks, sharpening, and reforging. Weapon Families Weapon families may include spears, pikes, halberds, maces, axes, swords, daggers, polearms, shields, and other configured equipment. Install the server resource pack so custom models and textures display correctly."
  },
  {
    "title": "Mounted Combat",
    "url": "/docs/combat/mounted-combat",
    "excerpt": "Mounted Combat Mounted combat rewards horse momentum and recognized cavalry weapons. Key Rules Momentum builds while riding horses. Mounted strikes scale by speed and configured thresholds. Certain weapons, such as spear",
    "text": "Mounted Combat Mounted combat rewards horse momentum and recognized cavalry weapons. Key Rules Momentum builds while riding horses. Mounted strikes scale by speed and configured thresholds. Certain weapons, such as spears and lances, can trigger cavalry strikes. Friendly fire, town protection, cooldowns, knockback, and dismount effects may be configured by staff."
  },
  {
    "title": "Economy Overview",
    "url": "/docs/economy/overview",
    "excerpt": "Economy Overview Eldenstead economy systems connect player skills, kingdom treasuries, chest shops, paid actions, and regional resources. Economy Sources Skill payouts through focused skills Kingdom treasury deposits and",
    "text": "Economy Overview Eldenstead economy systems connect player skills, kingdom treasuries, chest shops, paid actions, and regional resources. Economy Sources Skill payouts through focused skills Kingdom treasury deposits and withdrawals Chest shops with kingdom taxes Regional resource collection and trading Staff approved war terms or event rewards"
  },
  {
    "title": "Skills",
    "url": "/docs/economy/skills",
    "excerpt": "Skills Skills track player progression and can pay money when configured through focus slots. Current Skill Areas Farming Excavation Mining Woodcutting Fishing Smithing Combat One handed weapons Two handed weapons Use /s",
    "text": "Skills Skills track player progression and can pay money when configured through focus slots. Current Skill Areas Farming Excavation Mining Woodcutting Fishing Smithing Combat One handed weapons Two handed weapons Use /skills to review your current levels, XP, focus slots, and daily earnings."
  },
  {
    "title": "Joining Eldenstead",
    "url": "/docs/getting-started/joining",
    "excerpt": "Joining Eldenstead This page should explain the player path from discovering Eldenstead to entering the server with a usable character concept. Before You Join Read the server rules. Review the roleplay basics. Join Disc",
    "text": "Joining Eldenstead This page should explain the player path from discovering Eldenstead to entering the server with a usable character concept. Before You Join Read the server rules. Review the roleplay basics. Join Discord for announcements and support. Create a forum account if applications, ban appeals, or character records use the forum. First Session Checklist Confirm the current Minecraft version and resource pack requirement. Create your character card. Learn the local chat and messenger bird commands. Ask staff where new characters should begin if the current season has a defined starting region."
  },
  {
    "title": "Roleplay Basics",
    "url": "/docs/getting-started/roleplay-basics",
    "excerpt": "Roleplay Basics Eldenstead roleplay is built around character identity, public actions, realm politics, and consequences that remain consistent over time. Expected Play Keep in character actions believable for the settin",
    "text": "Roleplay Basics Eldenstead roleplay is built around character identity, public actions, realm politics, and consequences that remain consistent over time. Expected Play Keep in character actions believable for the setting. Separate player knowledge from character knowledge. Use local chat, kingdom chat, and messenger birds according to context. Treat staff rulings as continuity decisions, not debate prompts during scenes. Character Continuity Your character card, bloodline, marriage state, kingdom membership, and public reputation may all affect how other players interact with you."
  },
  {
    "title": "Claims",
    "url": "/docs/kingdoms/claims",
    "excerpt": "Claims Claims define controlled territory for kingdoms and their members. Common Actions Claims may include protection rules, entry messages, plot ownership, district settings, gates, and map markers.",
    "text": "Claims Claims define controlled territory for kingdoms and their members. Common Actions Claims may include protection rules, entry messages, plot ownership, district settings, gates, and map markers."
  },
  {
    "title": "Kingdoms Overview",
    "url": "/docs/kingdoms/overview",
    "excerpt": "Kingdoms Overview Kingdoms are player run governments with land, ranks, treasuries, plots, relations, resource nodes, and war participation. Kingdom Systems Creation, invites, ownership, titles, and mottos Chunk claims a",
    "text": "Kingdoms Overview Kingdoms are player run governments with land, ranks, treasuries, plots, relations, resource nodes, and war participation. Kingdom Systems Creation, invites, ownership, titles, and mottos Chunk claims and capital claims Rank permissions and trusted plots Kingdom and empire chat channels Diplomacy, treaties, enemies, and alliances Resource nodes and regional bonuses Conquest wars managed by staff Kingdom leadership should document public laws, taxes, building standards, and diplomacy expectations on the forum."
  },
  {
    "title": "Wars",
    "url": "/docs/kingdoms/wars",
    "excerpt": "Wars Wars are staff administered conflicts between kingdoms or empires using selected objectives, timed phases, and final terms. Player Expectations Follow the announced war schedule. Respect grace periods, pauses, and o",
    "text": "Wars Wars are staff administered conflicts between kingdoms or empires using selected objectives, timed phases, and final terms. Player Expectations Follow the announced war schedule. Respect grace periods, pauses, and objective boundaries. Do not bypass claim, gate, Movecraft, or combat protections. Wait for staff recaps before treating territorial or treasury changes as final."
  },
  {
    "title": "NPCs",
    "url": "/docs/lore/npcs",
    "excerpt": "NPCs Eldenstead NPCs may provide dialogue, branching conversations, item gated choices, and guard patrols. Interacting With NPCs Right click configured Citizens NPCs to begin dialogue. Click chat choices when a conversat",
    "text": "NPCs Eldenstead NPCs may provide dialogue, branching conversations, item gated choices, and guard patrols. Interacting With NPCs Right click configured Citizens NPCs to begin dialogue. Click chat choices when a conversation presents options. Some choices may require regional resource items. Guard patrols may pause while players interact with them."
  },
  {
    "title": "The Whispering Heart",
    "url": "/docs/lore/whispering-heart",
    "excerpt": "The Whispering Heart The Whispering Heart is a lore ritual built around a bound lectern and temporary conversation circle. Ritual Behavior The active circle includes players already within range when opened. Participant ",
    "text": "The Whispering Heart The Whispering Heart is a lore ritual built around a bound lectern and temporary conversation circle. Ritual Behavior The active circle includes players already within range when opened. Participant chat stays inside the ritual session. Scripted lore responses may answer known secrets. Staff may send participant only omens during an active session. Sessions close when participants leave or the configured timeout is reached."
  },
  {
    "title": "Bloodlines",
    "url": "/docs/roleplay/bloodlines",
    "excerpt": "Bloodlines Bloodlines represent family or lineage groups for roleplay identity and inheritance. Core Concepts Bloodlines have leaders, elders, and members. Leaders can invite members, change ranks, set crests, and delete",
    "text": "Bloodlines Bloodlines represent family or lineage groups for roleplay identity and inheritance. Core Concepts Bloodlines have leaders, elders, and members. Leaders can invite members, change ranks, set crests, and delete the bloodline. Elders can invite members and set crests. Family protection blocks close family relationships that would break continuity rules. Useful Commands"
  },
  {
    "title": "Character Cards",
    "url": "/docs/roleplay/character-cards",
    "excerpt": "Character Cards Character cards define the identity other players and plugins use for roleplay systems. What a Card Contains Character name Description Age Gender Race Optional parent links Useful Commands Complete chara",
    "text": "Character Cards Character cards define the identity other players and plugins use for roleplay systems. What a Card Contains Character name Description Age Gender Race Optional parent links Useful Commands Complete character cards are required before using bloodline and marriage features."
  },
  {
    "title": "Messenger Birds",
    "url": "/docs/roleplay/messenger-birds",
    "excerpt": "Messenger Birds Messenger birds replace instant private messages with distance aware delivery. Player Flow Send a private message with /msg . Reply with /reply or /r . Delivery time depends on distance and world. Offline",
    "text": "Messenger Birds Messenger birds replace instant private messages with distance aware delivery. Player Flow Send a private message with /msg . Reply with /reply or /r . Delivery time depends on distance and world. Offline deliveries may be held until the target player rejoins. Use messenger birds for roleplay friendly private communication rather than instant out of character coordination."
  },
  {
    "title": "Server Rules",
    "url": "/docs/rules/server-rules",
    "excerpt": "Server Rules This page is the public rules index. Keep the wording short, enforceable, and aligned with the staff policy manual. Rule Categories Respect other players and staff. Do not exploit bugs, item duplication, eco",
    "text": "Server Rules This page is the public rules index. Keep the wording short, enforceable, and aligned with the staff policy manual. Rule Categories Respect other players and staff. Do not exploit bugs, item duplication, economy loopholes, or protection gaps. Keep roleplay within the server's allowed themes and consent rules. Do not use harassment, hate speech, or blocked language in character names, descriptions, signs, chat, or builds. Follow kingdom, war, and PvP rules for the current season. Enforcement Staff may issue reminders, warnings, temporary restrictions, mutes, kicks, bans, rollbacks, or other corrective actions depending on severity and history."
  },
  {
    "title": "Welcome",
    "url": "/docs/welcome",
    "excerpt": "Community Docs Eldenstead is a medieval fantasy roleplay survival server with kingdoms, empires, custom weapons, mounted combat, skill progression, economy systems, NPCs, rituals, and lore driven progression. Use these d",
    "text": "Community Docs Eldenstead is a medieval fantasy roleplay survival server with kingdoms, empires, custom weapons, mounted combat, skill progression, economy systems, NPCs, rituals, and lore driven progression. Use these docs to understand how the public server systems work before asking staff for help. Core Areas Start with joining steps and roleplay expectations. Create and maintain a character card. Learn how bloodlines, messenger birds, kingdoms, skills, and combat systems fit together. Use the forum and Discord for announcements, support, and community coordination. Official Links Website: https://eldenstead.com Discord: https://discord.eldenstead.com Forum: https://eldenstead.com/forum"
  }
];

export default searchIndex;
