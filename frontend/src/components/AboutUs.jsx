import patternImage from '../assets/pattern.png';
import aboutUs1Image from '../assets/aboutus1.png';
import aboutUs2Image from '../assets/aboutus2.png';
import aboutUs3Image from '../assets/aboutus3.png';
import aboutUs4Image from '../assets/aboutus4.png';
import AnimatedBlock from './AnimatedBlock';
import { useTranslation } from '../hooks/useTranslation';

export default function AboutUs() {
    const { t } = useTranslation();
    
    // Динамические данные на основе переводов
    const aboutUsItems = [
      {
        title: t('services.service1.title'),
        description: t('services.service1.description'),
        listItems: t('services.service1.items'),
        image: aboutUs1Image,
      },
      {
        title: t('services.service2.title'),
        description: t('services.service2.description'),
        listItems: t('services.service2.items'),
        image: aboutUs3Image,
      },
      {
        title: t('services.service3.title'),
        description: t('services.service3.description'),
        listItems: t('services.service3.items'),
        image: aboutUs4Image,
      }
    ];

    return (
        <div className="relative w-[100%] overflow-hidden" id="aboutus">
            {aboutUsItems.map((item, index) => (
                <AnimatedBlock 
                    key={index}
                    classNames={`w-full max-w-[1320px] mx-auto flex flex-row ${index % 2 !== 0 ? 'flex-row-reverse' : ''} max-[1023px]:flex-col items-stretch justify-shrink mt-[96px] max-[1320px]:mt-[108px] max-[768px]:mt-[92px] gap-[64px] px-[20px] max-[1024px]:gap-[24px] max-[1023px]:flex-col max-[1023px]:gap-[24px]`}
                    fromOpacity={0}
                    fromTransform="translateY(20px)"
                    duration="all 0.5s ease-out"
                    triggerOnce={true}
                    id={"services"+index}
                >
                    <div className="relative w-[535px] min-w-[535px] max-[1023px]:w-[100%] max-[1023px]:h-[240px] max-[1023px]:min-w-full">
                        <img 
                            src={item.image} 
                            alt="about us" 
                            className="rounded-[24px] w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-[32px] py-[32px] max-[1023px]:py-0">
                        <h2 className="font-geologica text-[38px] leading-[48px] font-[600] text-[#1C2D51]">
                            {item.title}
                        </h2>
                        <p className="font-geologica text-[18px] leading-[28px] font-[400] text-[#1C2D51]">
                            {item.description}
                        </p>
                        <ul className="text-[18px] font-[400] leading-[28px] text-left text-[#4267B2] flex flex-col gap-[12px]">
                            {item.listItems.map((listItem, listIndex) => (
                                <li key={listIndex} className="pl-[12px]"><b className='mr-[5px]'>·</b> {listItem}</li>
                            ))}
                        </ul>
                    </div>
                </AnimatedBlock>
            ))}
        </div>
    );
}