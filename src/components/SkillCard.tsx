import { Tooltip } from '@mantine/core';
import MotionPage from './MotionPage';
import { Skill } from '../data/Skills/skill';
import getImgUrl from '../../public/assets/getImgUrl';

export default function SkillCard({ data, delay }: { data: Skill; delay: number }) {
  return (
    <MotionPage type="bottom" delay={delay}>
      <Tooltip label={data.name} color="gray" withArrow position="bottom">
        <div key={data.name} className="grid place-items-center w-full sm:w-[279px] h-[148px] p-6 shadow-md rounded-xl bg-white dark:bg-[#1A1B1E]">
          <img src={getImgUrl(data.icon)} alt={data.name} about={data.name} title={data.name} width={100} height={100} />
        </div>
      </Tooltip>
    </MotionPage>
  );
}
