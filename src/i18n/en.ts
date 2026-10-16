/** English UI copy. `ar.ts` must provide the same keys (enforced by TypeScript). */
const en = {
  meta: {
    title: 'Mohamed Mosaad — Flutter Developer & Video Editor',
    description:
      'Portfolio of Mohamed Mosaad, a Flutter developer and video editor studying Computer Science and Information Systems at Tanta University.',
  },
  nav: {
    skip: 'Skip to content',
    label: 'Main navigation',
    home: 'Home',
    about: 'About',
    flutter: 'Flutter',
    video: 'Video',
    skills: 'Skills',
    tools: 'Tools',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  lang: {
    switchTo: 'Switch to Arabic',
    // Label shows the language you will switch TO, written in that language.
    label: 'العربية',
  },
  hero: {
    eyebrow: 'Portfolio',
    role1: 'Flutter Developer',
    role2: '& Video Editor',
    lead: 'I build mobile apps with Flutter and cut video in DaVinci Resolve and After Effects. I care about clean code, clear interfaces and careful pacing.',
    ctaWork: 'See Flutter work',
    ctaVideo: 'Watch video work',
    ctaContact: 'Get in touch',
    scroll: 'Scroll',
  },
  about: {
    index: '01',
    title: 'About',
    p1: 'I am a Computer Science student at Tanta University who builds mobile apps with Flutter and edits video.',
    p2: 'On the development side I focus on structure: separating UI from logic, keeping state predictable and writing code that other people on a team can read. On the editing side I work on rhythm, clarity and finishing.',
    p3: 'Some of my Flutter projects are team projects. Each one is labelled below so it is clear which is which.',
    educationLabel: 'Education',
    degree: 'Faculty of Computer Science and Information Systems',
    school: 'Tanta University',
    locationLabel: 'Based in',
    location: 'Egypt',
    languagesLabel: 'Languages',
    languages: 'Arabic, English',
  },
  flutter: {
    index: '02',
    title: 'Flutter Development',
    intro:
      'Three Flutter applications. Descriptions only list what the repositories show, and team projects are marked as such.',
    viewRepo: 'View repository',
    stack: 'Stack',
    status: 'Status',
    teamProject: 'Team project',
    soloProject: 'Personal project',
    noScreens:
      'Screenshots will appear here once real ones are added to the project.',
    allRepos: 'All repositories on GitHub',
    screenshotAlt: 'Screenshot of',
  },
  video: {
    index: '03',
    title: 'Video Editing',
    intro:
      'A selection of edited work. Videos load only when you press play, so the page stays fast.',
    showreel: 'Showreel',
    play: 'Play',
    loading: 'Loading video',
    openDrive: 'Open the full video folder on Google Drive',
    emptyTitle: 'Video gallery is being prepared',
    emptyBody:
      'The full set of edited videos is available in my Google Drive folder. Selected pieces will be embedded here.',
    openOriginal: 'Open original',
    category: {
      showreel: 'Showreel',
      sports: 'Sports',
      social: 'Social',
      promo: 'Promo',
      other: 'Edit',
    },
  },
  skills: {
    index: '04',
    title: 'Skills',
    intro: 'The technologies and practices I use for Flutter development.',
    groups: {
      core: 'Core',
      architecture: 'Architecture & principles',
      state: 'State management',
      network: 'Networking & data',
      tooling: 'Tooling',
    },
  },
  tools: {
    index: '05',
    title: 'Editing Tools & Services',
    intro: 'The software I edit with, and what I can do with it.',
    toolsLabel: 'Software',
    servicesLabel: 'Services',
  },
  contact: {
    index: '06',
    title: 'Contact',
    lead: 'Have a Flutter project or a video that needs editing? Send me a message.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    whatsappMessage: 'Hello Mohamed, I found your portfolio and would like to talk.',
    opensNew: 'opens in a new tab',
  },
  footer: {
    rights: 'All rights reserved.',
    top: 'Back to top',
    built: 'Built with React, TypeScript and Vite.',
  },
};

export type Dictionary = typeof en;
export default en;
