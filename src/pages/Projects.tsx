import { SimpleGrid, Tabs, Text } from '@mantine/core';
import MotionPage from '../components/MotionPage';
import { projectCategories } from '../data/Projects/projectCategories';
import { projects } from '../data/Projects/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <MotionPage className="py-7 pb-20">
      <Text size={42} weight="bold">
        Projects
      </Text>
      <Tabs defaultValue="website" variant="pills" color="blue" mt="md">
        <Tabs.List grow>
          {projectCategories.map((category) => (
            <Tabs.Tab value={category.toLowerCase()} key={category} className="text-black dark:text-white hover:dark:bg-blue-500/50 ">
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {projectCategories.map((category) => (
          <Tabs.Panel value={category.toLowerCase()} key={category} pt="xs" mt="md">
            <SimpleGrid
              breakpoints={[
                { minWidth: 'sm', cols: 1 },
                { minWidth: 'md', cols: 2 },
              ]}
              spacing="lg">
              {projects
                .filter((project) => project.category === category)
                .map((project, i) => (
                  <ProjectCard data={project} key={project.name} delay={i * 0.2} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </MotionPage>
  );
}
