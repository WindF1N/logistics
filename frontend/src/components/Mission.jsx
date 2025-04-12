import AnimatedBlock from './AnimatedBlock';
import { useTranslation } from '../hooks/useTranslation';

export default function Mission() {
    const { t } = useTranslation();
    
    return (
      <div className="bg-[#4267B20D] min-h-[155px] flex items-center justify-center mt-[272px] max-[1024px]:mt-[226px] max-[768px]:mt-[61px] max-[520px]:mt-[92px]"> 
        <div className="relative w-full max-w-[1320px] mx-auto flex flex-col items-center justify-center py-[17px]">
          <AnimatedBlock
            fromOpacity={0}
            fromTransform="scale(0.9)"
            duration="all 1s ease-out"
            threshold={0.3}
            triggerOnce={true}
          >
            <div className="font-geologica text-[20px] leading-[30px] font-[400] text-[#1C2D51] text-center max-w-[1160px] max-[1024px]:px-[24px]">
              {t('banner.description')}
            </div>
          </AnimatedBlock>
        </div>
      </div>
    );
}