import bannerImage from '../assets/banner.png';
import AnimatedBlock from './AnimatedBlock';
import { useTranslation } from '../hooks/useTranslation';

export default function Banner() {
    const { t } = useTranslation();
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="relative w-full max-w-[1320px] mx-auto flex items-center justify-between mt-[128px] max-[1320px]:mt-[74px] max-[768px]:mt-[50px] px-[24px] max-[768px]:flex-col max-[768px]:gap-[24px]">
            <AnimatedBlock 
                classNames="max-w-[765px] max-[1024px]:max-w-[585px] max-[768px]:max-w-full z-[1] relative"
                fromOpacity={0}
                fromTransform="translateY(-20px)"
                duration="all 0.5s ease-out"
                triggerOnce={true}
            >
                <h1 className="font-geologica text-[#4267B2] text-[55px] leading-[65px] font-[600] max-[768px]:text-[40px] max-[768px]:text-[32px] max-[768px]:leading-[40px]">
                    {t('banner.title')}
                </h1>
                <p className="font-geologica text-[18px] font-[500] leading-[28px] text-[#1C2D51] mt-[38px] max-w-[724px] tracking-[0em] max-[768px]:mt-[24px]">
                    {t('banner.mission')}
                </p>
                <div className="mt-[66px] max-[768px]:mt-[24px]">
                    <button
                        type='button'
                        onClick={() => scrollToSection('aboutus')}
                        className="flex items-center gap-[10px] px-[26.93px] py-[19px] rounded-[10px] bg-[#3B5CA0] text-white hover:opacity-90 text-[18px] font-[600] leading-[21.94px]"
                    >
                        {t('banner.learnMore')}
                        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6953 6.16675L1.92957 6.16675" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.0704 6.5L13.1906 10.8333" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.0704 6.50008L13.1906 2.16675" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </AnimatedBlock>
            <AnimatedBlock 
                classNames="
                    w-[655px] 
                    absolute 
                    right-[0px] 
                    z-[0]
                    rounded-[24px]
                    overflow-hidden
                    max-[1360px]:right-[-11vw]
                    max-[1024px]:max-w-[453px]
                    max-[1024px]:h-[660px]
                    max-[1024px]:right-[24px]
                    max-[768px]:relative
                    max-[768px]:max-w-full
                    max-[768px]:w-full
                    max-[768px]:h-[565px]
                    max-[768px]:left-[0]
                    max-[768px]:h-auto
                "
                fromOpacity={0}
                fromTransform="translateX(100px)"
                duration="all 0.5s ease-out"
                triggerOnce={true}
            >
                <div className="relative w-full h-full">
                    <img src={bannerImage} alt="Enri" className="w-[100%] h-[100%] object-cover"/>
                    <div className="absolute top-0 left-0 w-full h-full max-[1024px]:bg-gradient-to-l max-[1024px]:from-transparent max-[1024px]:from-[78.93%] max-[1024px]:to-white max-[1024px]:to-[100%]"></div>
                </div>
            </AnimatedBlock>
        </div>
    );
}