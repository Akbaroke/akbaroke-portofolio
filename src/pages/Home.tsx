import IMAGE from '../assets/akbar.jpg';
import { motion as m } from 'framer-motion';

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
      }}
      className="flex flex-wrap gap-5 sm:h-[700px] justify-center items-center">
      <div>
        <h1 className="font-black text-3xl">Muhammad Akbar</h1>
        <h3 className="text-lg font-semibold text-blue-500 my-1">Junior Frontend Developer</h3>
        <div className="max-w-[300px] text-sm">
          Hi everyone <span className="wave">👋🏼</span>. welcome to my portofolio website
        </div>
      </div>
      <img src={IMAGE} alt="akbaroke" className="w-40 h-40 rounded-full shadow-lg dark:shadow-gray-700/50" />
    </m.div>
  );
}
