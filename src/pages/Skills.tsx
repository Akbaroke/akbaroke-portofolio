import { SimpleGrid, Tabs, Text } from '@mantine/core';
import MotionPage from '../components/MotionPage';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/Skills/skillCategories';
import { skills } from '../data/Skills/skills';

export default function Skills() {
  return (
    <MotionPage className="py-7 px-5 sm:p-0" type="bottom">
      <Text size={42} weight="bold">
        Skills
      </Text>
      <Tabs defaultValue="language" variant="pills" color="blue" mt="md">
        <Tabs.List grow>
          {skillCategories.map((category) => (
            <Tabs.Tab value={category.toLowerCase()} key={category} className="text-black dark:text-white hover:dark:bg-blue-500/50 ">
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
                { minWidth: 'lg', cols: 3 },
              ]}
              spacing="lg">
              {skills
                .filter((skill) => skill.category === category && skill.show !== false)
                .map((skill, i) => (
                  <SkillCard data={skill} key={i} delay={i * 0.2} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </MotionPage>
  );
}


