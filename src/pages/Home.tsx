import { TypeAnimation } from 'react-type-animation';
import MotionPage from '../components/MotionPage';
import { Text } from '@mantine/core';
import useTheme from '../globalState/theme';
import { ThemeState } from '../components/templates/Navbar';
import getImgUrl from '../../public/assets/getImgUrl';

export default function Home() {
  const theme = useTheme((state) => (state as ThemeState).theme);

  return (
    <div className="flex sm:flex-wrap flex-wrap-reverse sm:justify-around h-[500px] sm:h-[700px] justify-center items-center px-5 sm:p-0">
      <div className="text-center sm:text-start">
        <MotionPage delay={0.2}>
          <h1 className="font-black text-4xl">Muhammad Akbar</h1>
        </MotionPage>
        <MotionPage delay={0.8}>
          <Text component="span" variant="gradient" size={26} weight="bold" gradient={{ from: 'indigo', to: `${theme === 'dark' ? 'gray' : 'black'}`, deg: 45 }}>
            <TypeAnimation sequence={['Frontend Web Developer', 2000, 'Mobile Developer', 2000, 'UI/UX Designer', 2000]} cursor={true} repeat={Infinity} />
          </Text>
        </MotionPage>
        <MotionPage delay={1.4}>
          <div className="max-w-[300px] text-sm mt-1">
            Hi everyone <span className="wave">👋🏼</span>. welcome to my portofolio website
          </div>
        </MotionPage>
      </div>
      <MotionPage type="bottom" delay={1.8}>
        <img src={getImgUrl('akbar.jpg')} alt="akbaroke" className="w-40 h-40 sm:w-52 sm:h-52 rounded-full shadow-lg dark:shadow-gray-700/50 relative -bottom-16 sm:bottom-0" />
      </MotionPage>
    </div>
  );
}
