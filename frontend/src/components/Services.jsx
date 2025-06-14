import service1Image from '../assets/service1.svg';
import service2Image from '../assets/service2.svg';
import service3Image from '../assets/service3.svg';
import service4Image from '../assets/service4.svg';
import AnimatedBlock from './AnimatedBlock';
import { useTranslation } from '../hooks/useTranslation';

export default function Services() {
    const { t } = useTranslation();
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth', // Плавный скролл
            block: 'center', // Скролл к началу элемента
          });
        }
    };
    
    // Краткие сервисы для карточек
    const services = [
        {
            icon: service1Image,
            title: t('services.service1.title').split(' ')[0], // Берем только первое слово для краткости
            description: t('services.service1.description').split('.')[0] + '.' // Берем только первое предложение
        },
        {
            icon: service3Image,
            title: t('services.service2.title').split('—')[0].trim(), // Берем только первую часть до тире
            description: t('services.service2.description').split('.')[0] + '.' // Берем только первое предложение
        },
        {
            icon: service4Image,
            title: t('services.service3.title').split('—')[0].trim(), // Берем только первую часть до тире
            description: t('services.service3.description').split('.')[0] + '.' // Берем только первое предложение
        }
    ]
    
    return (
        <AnimatedBlock 
            classNames="relative w-full max-w-[1320px] mx-auto flex flex-col items-stretch justify-between mt-[128px] max-[1320px]:mt-[120px] max-[1024px]:mt-[64px] max-[768px]:mt-[120px] gap-[16px] px-[20px]"
            fromOpacity={0}
            fromTransform="translateY(20px)"
            duration="all 0.5s ease-out"
            triggerOnce={true}
        >
            <AnimatedBlock
              fromOpacity={0}
              fromTransform="translateY(-30px)"
              duration="all 0.6s ease-out"
              threshold={0.2}
              triggerOnce={true}
              classNames={"flex flex-col items-center"}
            >
              <h2 className="relative flex text-[45px] leading-[54.86px] font-[600] text-[#1C2D51] text-center">
                {t('services.title')}
                <div className='absolute w-[113px] h-[31px] bg-[#4D65FF] opacity-[0.1] top-[5px] left-[-45px] max-[524px]:right-[6vw] max-[524px]:left-auto'></div>
              </h2>
              <p className="text-[18px] leading-[28px] font-[400] text-[#1C2D51] mt-[27px] text-center">
                {t('services.subtitle')}
              </p>
            </AnimatedBlock>

            <div className="flex gap-[64px] max-[1024px]:flex-wrap items-stretch mt-[64px] max-[1024px]:grid max-[1024px]:grid-cols-4 max-[1024px]:gap-[32px] max-[768px]:grid-cols-2 max-[520px]:grid-cols-1">
              {services.map((service, index) => (
                <AnimatedBlock
                  key={index}
                  classNames="flex flex-col p-[32px] rounded-[24px] bg-[#4267B20D] w-full cursor-pointer"
                  fromOpacity={0}
                  fromTransform="translateY(30px)"
                  duration="all 0.6s ease-out"
                  delay={`${0.15 * (index + 1)}s`}                  
                  threshold={0.2}
                  triggerOnce={true}
                >
                  <div className="absolute text-white font-[700] text-[128px] leading-[26px] z-[-1] right-0 top-[24px]">{index + 1}</div>
                  <img src={service.icon} alt="service" className="w-[36px] h-[36px] mt-[32px] mb-[24px]"/>   
                  <div className="font-geologica text-[16px] leading-[26px] font-[700] text-[#1C2D51] mb-[8px]">
                      {service.title}
                  </div>
                  <div className="font-geologica text-[16px] leading-[26px] font-[400] text-[#1C2D51] w-[105%] mb-[44px]">
                      {service.description}
                  </div>
                  <div className="text-[16px] leading-[16px] font-[400] text-[#4267B2] flex items-center gap-[7px] mt-auto" onClick={() => scrollToSection(`services${index}`)}>
                    {t('banner.learnMore').split(' ')[0]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M17.7658 5.66675L2 5.66675" stroke="#4267B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.1409 6L13.261 10.3333" stroke="#4267B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.1409 6.00008L13.261 1.66675" stroke="#4267B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </AnimatedBlock>
              ))}
            </div>
        </AnimatedBlock>
    );
}