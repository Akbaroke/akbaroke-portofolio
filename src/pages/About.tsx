import MotionPage from '../components/MotionPage';
import { Box, Center, Grid, List, Text, Timeline } from '@mantine/core';
import { ThemeState } from '../components/templates/Navbar';
import useTheme from '../globalState/theme';
import getImgUrl from '../../public/assets/getImgUrl';

export default function About() {
  const theme = useTheme((state) => (state as ThemeState).theme);

  return (
    <div className="py-7 px-5 sm:px-0">
      <Grid>
        <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
          <MotionPage type="bottom">
            <Center sx={{ paddingTop: '1.5rem' }}>
              <img
                src={getImgUrl('akbar.jpg')}
                alt="akbaroke"
                width={150}
                height={150}
                className="rounded-full shadow-lg dark:shadow-gray-700/50 mt-5"
              />
            </Center>
          </MotionPage>
        </Grid.Col>
        <Grid.Col xs={12} md={9} orderXs={2} orderMd={1}>
          <MotionPage>
            <Text size={42} weight="bold">
              About Me
            </Text>

            <Text
              component="span"
              variant="gradient"
              size={26}
              weight="bold"
              gradient={{
                from: 'indigo',
                to: `${theme === 'dark' ? 'gray' : 'black'}`,
                deg: 45,
              }}>
              Muhammad Akbar
            </Text>
            <Text size="md" my="sm">
              Hi everyone, my name is Muhammad Akbar. I am a Frontend Web
              Developer, I am a passionate programming enthusiast who finds joy
              in the process of building programs from scratch and thrives on
              solving complex coding challenges. With a strong foundation in web
              development, I possess adiverse and promising skill-set that
              allows me to excel in various technologies such as React JS,
              JavaScript,TypeScript, MySQL, Firebase, NodeJS and HTML/CSS.
            </Text>
          </MotionPage>
        </Grid.Col>
      </Grid>
      <Box mt="md">
        <MotionPage delay={0.5}>
          <Text size={42} weight="bold">
            Education
          </Text>
          <Timeline active={3} mt="sm">
            <Timeline.Item
              title={
                <Text weight="bold" size="lg" className="dark:text-gray-400">
                  University
                </Text>
              }>
              <Text className="dark:text-gray-400">
                Pelita Bangsa University
              </Text>
              <Text size="md" className="dark:text-gray-400">
                Computer Science (Current GPA: 3.84)
              </Text>
              <Text
                size="sm"
                color="dimmed"
                mt={4}
                className="dark:text-gray-400">
                2021 - present
              </Text>
            </Timeline.Item>
            <Timeline.Item
              title={
                <Text weight="bold" size="lg" className="dark:text-gray-400">
                  Front-End Engineer Career With ReactJS
                </Text>
              }>
              <Text className="dark:text-gray-400">
              Alterra Academy
              </Text>
              <Text size="md" className="dark:text-gray-400">
              Frontend Division Team Leader
              </Text>
              <Text
                size="sm"
                color="dimmed"
                mt={4}
                className="dark:text-gray-400">
                Aug - Des 2023
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
              <Text
                size="sm"
                color="dimmed"
                mt={4}
                className="dark:text-gray-400">
                2016 - 2019
              </Text>
            </Timeline.Item>
          </Timeline>
        </MotionPage>
      </Box>
      <Box mt="md">
        <MotionPage delay={1}>
          <Text size={42} weight="bold">
            Work Experience
          </Text>
          <Timeline active={4} mt="sm">
            <Timeline.Item
              title={
                <Text weight="bold" size="lg" className="dark:text-gray-400">
                  Web Developer
                </Text>
              }>
              <Text className="dark:text-gray-400">
                PT. Kurnia Ciptamoda Gemilang
              </Text>
              <List>
                <List.Item className="dark:text-gray-400 list-disc">
                Performed frontend migration from desktop-based system to web-based with angular framework.
                </List.Item>
                <List.Item className="dark:text-gray-400 list-disc">
                Performingeration with rest api.
                </List.Item>
                <List.Item className="dark:text-gray-400 list-disc">
                Creating forms and validating components in the table and testing the system
                </List.Item>
              </List>
              <Text size="sm" color="dimmed" mt={4}>
              Feb - Jun 2024
              </Text>
            </Timeline.Item>
            <Timeline.Item
              title={
                <Text weight="bold" size="lg" className="dark:text-gray-400">
                  Fullstack Developer
                </Text>
              }>
              <Text className="dark:text-gray-400">
              Mercy Chess Club
              </Text>
              <List>
                <List.Item className="dark:text-gray-400 list-disc">
                Create responsive UI/UX interface design.
                </List.Item>
                <List.Item className="dark:text-gray-400 list-disc">
                Creating landing page and admin dashboard.
                </List.Item>
                <List.Item className="dark:text-gray-400 list-disc">
                Create attendance system, payment history, student data and reports.
                </List.Item>
              </List>
              <Text size="sm" color="dimmed" mt={4}>
              Jul - Sep 2023
              </Text>
            </Timeline.Item>
            <Timeline.Item
              title={
                <Text weight="bold" size="lg" className="dark:text-gray-400">
                  Frontend Developer & UI Designer
                </Text>
              }>
              <Text className="dark:text-gray-400">
              PT Metal Teknologi Indonesia
              </Text>
              <List>
                <List.Item className="dark:text-gray-400 list-disc">
                Create responsive UI/UX interface design.
                </List.Item>
                <List.Item className="dark:text-gray-400 list-disc">
                Implement UI/UX interface design into HTML, CSS and Javascript code.
                </List.Item>
                <List.Item className="dark:text-gray-400 list-disc">
                Deploy the website to the production environment (live production hosting).
                </List.Item>
              </List>
              <Text size="sm" color="dimmed" mt={4}>
              Sep 2021
              </Text>
            </Timeline.Item>
          </Timeline>
        </MotionPage>
      </Box>
      <Box mt="md" id="resume" mb="xl" className="mb-20">
        <MotionPage delay={1.5}>
          <Text size={42} weight="bold">
            Resume
          </Text>
          <Box>
            You can read my resume{' '}
            <a
              href="https://drive.google.com/file/d/1lhU21riOcjwtklz96ZLUtQc-n0HCoJ1m/view"
              target="_blank"
              className="underline text-blue-400 cursor-pointer">
              here.
            </a>
          </Box>
        </MotionPage>
      </Box>
    </div>
  );
}
