import { SimpleGrid, Tabs, Text } from '@mantine/core';
import MotionPage from '../components/MotionPage';

export default function Skills() {
  return (
    <MotionPage className="py-7" type="bottom">
      <Text size={42} weight="bold">
        Skills
      </Text>
      <Tabs defaultValue="language" variant="pills" color="blue" mt="md">
        <Tabs.List grow>
          {skillCategories.map((category) => (
            <Tabs.Tab value={category.toLowerCase()} key={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {skillCategories.map((category) => (
          <Tabs.Panel value={category.toLowerCase()} key={category} pt="xs" mt="md">
            <SimpleGrid
              breakpoints={[
                { minWidth: 0, cols: 2 },
                { minWidth: 'sm', cols: 3 },
                { minWidth: 'md', cols: 3 },
                { minWidth: 'lg', cols: 4 },
              ]}
              spacing="lg">
              {skills
                .filter((skill) => skill.category === category && skill.show !== false)
                .map((skill) => (
                  <div key={skill.name}>
                    <img src={`./public/assets/${skill.icon}`} alt={skill.name} about={skill.name} />
                  </div>
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </MotionPage>
  );
}

const skillCategories = ['Language', 'Framework/Library', 'UI Framework/Component', 'DBMS', 'Tools'] as const;
const skills: Skill[] = [
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
    name: 'React Native',
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
interface Skill {
  name: string;
  category: (typeof skillCategories)[number];
  icon: string;
  show?: boolean;
}
