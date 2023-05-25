export interface Skill {
  name: string;
  category: (typeof skillCategories)[number];
  icon: string;
  show?: boolean;
}

export const skillCategories = ['Language', 'Framework/Library', 'UI Framework/Component', 'DBMS', 'Tools'] as const;

export const skills: Skill[] = [
  {
    name: 'HTML',
    category: 'Language',
    icon: 'html.svg',
  },
  {
    name: 'CSS',
    category: 'Language',
    icon: 'css.svg',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: 'js.svg',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: 'ts.svg',
  },
  {
    name: 'PHP',
    category: 'Language',
    icon: 'php.svg',
  },
  {
    name: 'Python',
    category: 'Language',
    icon: 'python.svg',
  },
  {
    name: 'Java',
    category: 'Language',
    icon: 'java.svg',
  },
  {
    name: 'Dart',
    category: 'Language',
    icon: 'dart.svg',
  },
  {
    name: 'React',
    category: 'Framework/Library',
    icon: 'react.svg',
  },
  {
    name: 'Nextjs',
    category: 'Framework/Library',
    icon: 'next.svg',
  },
  {
    name: 'Nodejs',
    category: 'Framework/Library',
    icon: 'node.svg',
  },
  {
    name: 'Expressjs',
    category: 'Framework/Library',
    icon: 'express.svg',
  },
  {
    name: 'Codeigniter',
    category: 'Framework/Library',
    icon: 'ci.svg',
  },
  {
    name: 'Flutter',
    category: 'Framework/Library',
    icon: 'flutter.svg',
  },
  {
    name: 'React Native',
    category: 'Framework/Library',
    icon: 'react.svg',
  },
  {
    name: 'Java Swing',
    category: 'Framework/Library',
    icon: 'java.svg',
  },
  {
    name: 'tkinter',
    category: 'Framework/Library',
    icon: 'python.svg',
  },
  {
    name: 'Bootstrap',
    category: 'UI Framework/Component',
    icon: 'bootstrap.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'UI Framework/Component',
    icon: 'tailwind.svg',
  },
  {
    name: 'daisyUi',
    category: 'UI Framework/Component',
    icon: 'daisy.svg',
  },
  {
    name: 'Mantine',
    category: 'UI Framework/Component',
    icon: 'mantine.svg',
  },
  {
    name: 'Mysql',
    category: 'DBMS',
    icon: 'mysql.svg',
  },
  {
    name: 'Firestore',
    category: 'DBMS',
    icon: 'firestore.svg',
  },
  {
    name: 'Vs Code',
    category: 'Tools',
    icon: 'vscode.svg',
  },
  {
    name: 'Netbeans',
    category: 'Tools',
    icon: 'netbeans.svg',
  },
  {
    name: 'Postman',
    category: 'Tools',
    icon: 'postman.svg',
  },
  {
    name: 'XAMPP',
    category: 'Tools',
    icon: 'xampp.svg',
  },
  {
    name: 'Figma',
    category: 'Tools',
    icon: 'figma.svg',
  },
];
