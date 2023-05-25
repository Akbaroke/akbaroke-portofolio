import { Project } from './project';

export const projects: Project[] = [
  {
    name: 'IndoQuran',
    category: 'Website',
    desc: 'Online quran with murotal audio features with 5 qori versions',
    link: {
      demo: 'https://www.indoquran.my.id/',
      repo: 'https://github.com/Akbaroke/indoquran.my.id',
    },
    tech: ['Nextjs', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Chichat',
    category: 'Website',
    desc: 'Realtime Personal Chatting multiple user',
    link: {
      demo: 'https://chichatt.vercel.app/',
      repo: 'https://github.com/Akbaroke/Chichat',
    },
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Firestore'],
  },
  {
    name: 'BCA Mobile Clone',
    category: 'Website',
    desc: 'Clone bca mobile with more or less the same features',
    link: {
      demo: 'https://fe-m-banking.vercel.app/',
      repo: 'https://github.com/Akbaroke/MERNSTACK-mBanking',
    },
    tech: ['React', 'JavaScript', 'CSS', 'Nodejs', 'Mysql'],
  },
  {
    name: 'Kas Kelas Ti.21.A3',
    category: 'Website',
    desc: 'provide weekly bills to each member and can print financial reports',
    link: {
      demo: null,
      repo: 'https://github.com/Akbaroke/kas-app',
    },
    tech: ['PHP', 'JavaScript', 'CSS', 'HTML', 'Mysql'],
  },
  {
    name: 'ChattyTalks',
    category: 'Website',
    desc: 'realtime group chat by bringing together the same id room so they can connect',
    link: {
      demo: null,
      repo: 'https://github.com/Akbaroke/CattyTalks',
    },
    tech: ['React', 'JavaScript', 'Socket', 'SCSS', 'Nodejs', 'Mysql'],
  },
  {
    name: 'Simple Ecommerce',
    category: 'Website',
    desc: 'Provide an interesting shopping experience',
    link: {
      demo: null,
      repo: 'https://github.com/Akbaroke/simple-Ecommerce',
    },
    tech: ['React', 'JavaScript', 'SCSS'],
  },
  {
    name: 'Cashier System',
    category: 'Website',
    desc: 'Displays the dashboard display of cashier transactions and warehouse stock',
    link: {
      demo: null,
      repo: 'https://github.com/Akbaroke/kasir-app',
    },
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    name: 'PT Metal Teknologi Indonesia',
    category: 'Website',
    desc: 'Landing page to introduce products and services to the company',
    link: {
      demo: 'https://pt-mti.com/',
      repo: null,
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Coarse Word Detection',
    category: 'Bot',
    desc: 'Can detect every harsh word in the chat',
    link: {
      demo: null,
      repo: 'https://github.com/Akbaroke/bot-wa-aktif',
    },
    tech: ['Nodejs', 'JavaScript'],
  },
];
