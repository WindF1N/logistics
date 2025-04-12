import { useRef } from 'react';
import worksImage from '../assets/works-img.png';
import { useTranslation } from '../hooks/useTranslation';
import AnimatedBlock from './AnimatedBlock';

export default function Works() {
  const { t } = useTranslation();
  const ref = useRef(null);

  // Более надежная проверка для получения массива работ
  const worksData = t('works.items');
  const workItems = Array.isArray(worksData) ? worksData : 
                    (typeof worksData === 'string' ? worksData.split('|').map(item => {
                      try {
                        return JSON.parse(item);
                      } catch (e) {
                        return { title: item };
                      }
                    }) : []);

  return (
    <AnimatedBlock
      classNames="w-full max-w-[1320px] mx-auto flex flex-col items-stretch justify-between mt-[128px] max-[1320px]:mt-[120px] max-[1024px]:mt-[64px] max-[768px]:mt-[120px] max-[320px]:mt-[90px] gap-[16px]"
      fromOpacity={0}
      fromTransform="translateY(20px)"
      duration="all 0.5s ease-out"
      triggerOnce={true}
    >
      <div className='relative w-full flex flex-col gap-[32px] lg:flex-row lg:items-start lg:justify-between px-[20px] lg:gap-[80px]'>
        <div className='flex flex-col max-w-full lg:max-w-[549px] lg:pt-[90px]'>
          <AnimatedBlock
            classNames="flex flex-col items-start"
            fromOpacity={0}
            fromTransform="translateY(-30px)"
            duration="all 0.6s ease-out"
            triggerOnce={true}
            threshold={0.2}
          >
            <h2 className="relative text-[45px] leading-[54.86px] font-[600] text-[#1C2D51] max-[450px]:text-[35px]">
              {t('works.title')}
              <div className='absolute w-[73px] h-[31px] bg-[#4D65FF] opacity-[0.1] top-[5px] right-[-39px]'></div>
            </h2>
            <div className='mt-[16px] text-[18px] leading-[28px] font-[400] text-[#1C2D51]'>
              {t('works.subtitle')}
            </div>
          </AnimatedBlock>
          <div className='flex flex-col gap-y-[23px] mt-[35px]'>
            {workItems.map((item, index) => (
              <AnimatedBlock
                key={index}
                classNames="px-[30px] py-[21px] bg-[#EFF1F9] rounded-[16px] text-[#1C2D51] font-[600] flex items-center gap-[16px] max-[768px]:px-[20px] max-[768px]:py-[16px]"
                fromOpacity={0}
                fromTransform="translateY(30px)"
                duration="all 0.5s ease-out"
                delay={`${0.1 * (index + 1)}s`}
                triggerOnce={true}
                threshold={0.2}
              >
                <div className='w-[44px] h-[44px] bg-[#73B4FF] rounded-full flex items-center justify-center text-[25px] text-white'>
                  {index + 1}
                </div>
                <div className='text-[20px] font-[600]'>
                  {item.title}
                </div>
              </AnimatedBlock>
            ))}
          </div>
        </div>
        <div className='relative lg:ml-auto'>
          <AnimatedBlock
            fromOpacity={0}
            fromTransform="translateX(30px)"
            duration="all 0.6s ease-out"
            delay="0.2s"
            triggerOnce={true}
            threshold={0.2}
          >
            <img
              src={worksImage}
              alt='How we work'
              className='w-full max-w-[550px] h-auto aspect-square object-contain mx-auto'
            />
          </AnimatedBlock>
          <div className='w-[160px] h-[160px] bg-[#C0D9FF] rounded-[10px] absolute top-[-6%] left-[-6%] -z-10'></div>
          <div className='w-[212px] h-[212px] bg-gradient-to-b from-transparent to-[#4D65FF] rounded-full absolute bottom-[-10%] right-[-10%] opacity-[0.25] -z-10'></div>
        </div>
      </div>
    </AnimatedBlock>
  );
}