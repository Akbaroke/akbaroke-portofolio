import { Box, Group, Text, Title, Tooltip } from '@mantine/core';
import { Project } from '../data/Projects/project';
import MotionPage from './MotionPage';
import { Link } from 'react-router-dom';
import { BiGitRepoForked } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';
import { skills } from '../data/Skills/skills';
import getImgUrl from '../assets/getImgUrl';

export default function ProjectCard({ data, delay }: { data: Project; delay: number }) {
  const index = delay / 0.2;
  return (
    <MotionPage type={index % 2 == 0 ? 'left' : 'right'} delay={delay}>
      <div key={data.name} className="shadow-lg rounded-xl p-7 bg-white dark:bg-[#1A1B1E]">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
          }}>
          <Title order={3}>{data.name}</Title>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}>
            {data.link.repo && (
              <Link to={data.link.repo} target="_blank">
                <Tooltip label="Repository" color="gray" withArrow position="bottom">
                  <Box>
                    <BiGitRepoForked size={20} className="text-gray-400 hover:text-black transition-all dark:hover:text-white" />
                  </Box>
                </Tooltip>
              </Link>
            )}
            {data.link.demo && (
              <Link to={data.link.demo} target="_blank">
                <Tooltip label="Demo" color="gray" withArrow position="bottom">
                  <Box>
                    <FiExternalLink size={21} className="text-gray-400 hover:text-black transition-all dark:hover:text-white" />
                  </Box>
                </Tooltip>
              </Link>
            )}
          </Box>
        </Box>
        <Text className="inline-flex items-center w-full h-16 my-3 overflow-hidden break-words">{data.desc}</Text>
        <Group spacing="xs">
          {skills
            .filter((skill) => data.tech.includes(skill.name))
            .map((skill) => (
              <Box key={skill.name} sx={{ position: 'relative', height: 25, width: 25 }} title={skill.name}>
                <img
                  src={getImgUrl(skill.icon)}
                  alt={skill.name}
                  sizes="(max-width: 768px) 8vw,
                    (max-width: 1200px) 16vw,
                    32vw"
                  style={{ pointerEvents: 'none', objectFit: 'contain' }}
                />
              </Box>
            ))}
        </Group>
      </div>
    </MotionPage>
  );
}
