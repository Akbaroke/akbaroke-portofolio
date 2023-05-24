import IMAGE from '../assets/akbar.jpg';
import { TypeAnimation } from 'react-type-animation';
import MotionPage from '../components/MotionPage';
import { Text } from '@mantine/core';
import useTheme from '../globalState/theme';
import { ThemeState } from '../components/templates/Navbar';

export default function Home() {
  const theme = useTheme((state) => (state as ThemeState).theme);

  return (
    <MotionPage className="flex sm:flex-wrap flex-wrap-reverse sm:gap-5 gap-1 h-[500px] sm:h-[700px] sm:justify-around justify-center items-center">
      <div className="text-start">
        <h1 className="font-black text-4xl">Muhammad Akbar</h1>
        <Text component="span" variant="gradient" size={26} weight="bold" gradient={{ from: 'indigo', to: `${theme === 'dark' ? 'gray' : 'black'}`, deg: 45 }}>
          <TypeAnimation sequence={['Frontend Web Developer', 2000, 'Mobile Developer', 2000, 'UI/UX Designer', 2000]} cursor={true} repeat={Infinity} />
        </Text>
        <div className="max-w-[300px] text-sm mt-1">
          Hi everyone <span className="wave">👋🏼</span>. welcome to my portofolio website
        </div>
      </div>
      <img src={IMAGE} alt="akbaroke" className="w-52 h-52 rounded-full shadow-lg dark:shadow-gray-700/50" />
    </MotionPage>
  );
}