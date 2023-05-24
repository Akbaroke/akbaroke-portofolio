import { motion as m } from 'framer-motion';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  type?: 'right' | 'bottom';
};

export default function MotionPage({ children, className, type }: Props) {
  return (
    <m.div variants={type === 'bottom' ? bottom : right} initial="hidden" animate="enter" exit="exit" transition={{ ease: 'easeInOut', duration: 0.75 }} className={className}>
      {children}
    </m.div>
  );
}

const right = {
  hidden: { opacity: 0, x: -40, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 40 },
};
const bottom = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -40, y: 0 },
};
