import MotionPage from '../components/MotionPage';
import IMAGE from '../assets/akbar.jpg';
import { Box, Center, Grid, List, Text, Timeline } from '@mantine/core';
import { ThemeState } from '../components/templates/Navbar';
import useTheme from '../globalState/theme';
import { Link } from 'react-router-dom';

export default function About() {
  const theme = useTheme((state) => (state as ThemeState).theme);

  return (
    <MotionPage className="py-7" type="bottom">
      <Grid>
        <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
          <Center sx={{ paddingTop: '1.5rem' }}>
            <img src={IMAGE} alt="akbaroke" width={150} height={150} className="rounded-full shadow-lg dark:shadow-gray-700/50 mt-5" />
          </Center>
        </Grid.Col>
        <Grid.Col xs={12} md={9} orderXs={2} orderMd={1}>
          <Text size={42} weight="bold">
            About Me
          </Text>

          <Text component="span" variant="gradient" size={26} weight="bold" gradient={{ from: 'indigo', to: `${theme === 'dark' ? 'gray' : 'black'}`, deg: 45 }}>
            Muhammad Akbar
          </Text>
          <Text size="md" my="sm">
            Hi everyone, my name is Muhammad Akbar. I am a Frontend Web F Developer Mobile Developer, UI/UX Designer and Computer Science Student.
          </Text>
          <Text size="md" my="sm">
            I live in Cikarang, Indonesia. I was born in Bandung, September 15 2001. I am 21 years old. I am a Computer Science Student from Pelita Bangsa University.
          </Text>
          <Text size="md" my="sm">
            Coding has been my passion and hobby since I was 18 years old, and I have loved computers since I was a kid. Besides coding, I like listening to music. I also like to play games. My favorite genre is First Person Shooters. I
            spend a lot of time on TikTok sharing demo videos of apps I build or coding tips.
          </Text>
        </Grid.Col>
      </Grid>
      <Box mt="md">
        <Text size={42} weight="bold">
          Education
        </Text>
        <Timeline active={1} mt="sm">
          <Timeline.Item
            title={
              <Text weight="bold" size="lg" className="dark:text-gray-400">
                University
              </Text>
            }>
            <Text className="dark:text-gray-400">Pelita Bangsa University</Text>
            <Text size="md" className="dark:text-gray-400">
              Computer Science (Current GPA: 3.84)
            </Text>
            <Text size="sm" color="dimmed" mt={4} className="dark:text-gray-400">
              2021 - present
            </Text>
          </Timeline.Item>
          <Timeline.Item
            title={
              <Text weight="bold" size="lg" className="dark:text-gray-400">
                Senior High School
              </Text>
            }>
            <Text className="dark:text-gray-400">SMAN 1 Cibarusah</Text>
            <Text size="md" className="dark:text-gray-400">
              Natural Science
            </Text>
            <Text size="sm" color="dimmed" mt={4} className="dark:text-gray-400">
              2016 - 2019
            </Text>
          </Timeline.Item>
        </Timeline>
      </Box>
      <Box mt="md">
        <Text size={42} weight="bold">
          Work Experience
        </Text>
        <Timeline active={0} mt="sm">
          <Timeline.Item
            title={
              <Text weight="bold" size="lg" className="dark:text-gray-400">
                Freelancing
              </Text>
            }>
            <Text className="dark:text-gray-400">PT. Metal Teknologi Indonesia</Text>
            <List>
              <List.Item className="dark:text-gray-400 list-disc">Create website ui designs</List.Item>
              <List.Item className="dark:text-gray-400 list-disc">website development by implementing the UI design that has been made</List.Item>
              <List.Item className="dark:text-gray-400 list-disc">Deploy to the hosting server</List.Item>
            </List>
            <Text size="sm" color="dimmed" mt={4}>
              Oct 2022 - Sep 2022
            </Text>
          </Timeline.Item>
        </Timeline>
      </Box>
      <Box mt="md" id="resume" mb="xl" className="mb-20">
        <Text size={42} weight="bold">
          Resume
        </Text>
        <Box>
          You can read my resume{' '}
          <Link target="_blank" to="github.com/Akbaroke" className="underline text-blue-400">
            here.
          </Link>
        </Box>
      </Box>
    </MotionPage>
  );
}
