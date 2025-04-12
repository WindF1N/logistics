import adventage1Image from '../assets/adventage1.svg';
import adventage2Image from '../assets/adventage2.svg';
import adventage3Image from '../assets/adventage3.svg';
import adventage4Image from '../assets/adventage4.svg';
import adventagesBannerImage from '../assets/adventages-banner.jpg';
import AnimatedBlock from './AnimatedBlock';
import { useTranslation } from '../hooks/useTranslation';

export default function Adventages() {
  const { t } = useTranslation();
  
  // Получаем преимущества из переводов с более надежной проверкой
  const advantagesData = t('advantages.items');
  
  // Проверяем тип данных и обрабатываем соответственно
  let advantagesItems = [];
  if (Array.isArray(advantagesData)) {
    advantagesItems = advantagesData;
  } else if (typeof advantagesData === 'string') {
    try {
      // Пробуем разобрать как JSON, если это строка в формате JSON
      const parsed = JSON.parse(advantagesData);
      advantagesItems = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      // Если не удалось разобрать как JSON, разделяем по |
      advantagesItems = advantagesData.split('|').map(item => {
        try {
          return JSON.parse(item);
        } catch (e) {
          return { title: item, text: '' };
        }
      });
    }
  }
  
  // Сопоставляем иконки преимуществам
  const adventageImages = [
    adventage1Image,
    adventage2Image,
    adventage3Image,
    adventage4Image
  ];
  
  // Создаем массив преимуществ с иконками
  const adventages = advantagesItems.map((item, index) => ({
    ...item,
    img: adventageImages[index]
  }));
  
  return (
    <AnimatedBlock 
      classNames="relative"
      fromOpacity={0}
      fromTransform="translateY(20px)"
      duration="all 0.5s ease-out"
      triggerOnce={true}
    >
      <div className="absolute w-[100%] h-[100%] bg-[#EFF1F94D] z-[-1] right-[-26%] min-[1600px]:right-[-30%] min-[1800px]:right-[-33%]"></div>
      <div className="relative w-full max-w-[1320px] mx-auto flex flex-col items-stretch justify-between mt-[128px] max-[1320px]:mt-[120px] max-[1024px]:mt-[64px] max-[768px]:mt-[120px] gap-[16px] px-[20px] pb-[187px]">
        <AnimatedBlock
          fromOpacity={0}
          fromTransform="translateY(-30px)"
          duration="all 0.6s ease-out"
          threshold={0.2}
          triggerOnce={true}
          classNames={"flex flex-col items-center"}
        >
          <h2 className="relative flex text-[45px] leading-[54.86px] font-[600] text-[#1C2D51] text-center mt-[53px]">
            {t('advantages.title')}
            <div className='absolute w-[113px] h-[31px] bg-[#4D65FF] opacity-[0.1] top-[5px] left-[-45px] max-[524px]:right-[6vw] max-[524px]:left-auto'></div>
          </h2>
        </AnimatedBlock>

        <div className="flex items-center max-[1024px]:flex-col max-[1024px]:gap-[64px]">
          <div className="flex gap-x-[132px] gap-y-[115px] flex-wrap items-center justify-start mt-[64px] max-[1024px]:grid max-[1024px]:grid-cols-2 max-[520px]:grid-cols-1 max-w-[800px]">
            {adventages.map((item, index) => (
              <AnimatedBlock
                key={index}
                classNames="flex flex-col gap-[16px] rounded-[16px] max-w-[276px] max-[1024px]:items-center max-[1024px]:max-w-full"
                fromOpacity={0}
                fromTransform={`${index % 2 === 0 ? 'translateY(30px)' : 'translateY(-30px)'}`}
                duration="all 0.8s ease-out"
                delay={`${0.2 * (index + 1)}s`}
                threshold={0.2}
                triggerOnce={true}
              >
                <AnimatedBlock
                  fromOpacity={0}
                  fromTransform="scale(0.8)"
                  duration="all 0.6s ease-out"
                  delay={`${0.3 * (index + 1)}s`}
                  threshold={0.2}
                  triggerOnce={true}
                >
                  <img src={item.img} alt="audit" className="w-[70px] h-[70px]"/>
                </AnimatedBlock>
                <div className="font-geologica text-[20px] leading-[30px] font-[600] text-[#1C2D51] max-[1024px]:text-center">
                  {item.title}
                </div>
                <div className="font-geologica text-[18px] leading-[28px] font-[400] text-[#1C2D51] max-[1024px]:text-center">
                  {item.text}
                </div>
              </AnimatedBlock>
            ))}
          </div>
          <div className="absolute max-w-[550px] max-h-[450px] right-[-100px] max-[1215px]:right-[-200px] max-[1125px]:right-[-300px] max-[1024px]:relative max-[1024px]:inset-0 max-[1024px]:scale-[1.3] max-[1024px]:mt-[92px] max-[1024px]:mb-[120px] max-[768px]:scale-[.9] max-[768px]:mt-[0] max-[768px]:mb-[-120px]">
            <img src={adventagesBannerImage} alt="advantages banner" className="w-full h-full object-cover"/>
            <div className="w-[32%] h-[39%] bg-[#C0D9FF] rounded-[10px] absolute bottom-[-27%] right-[-6%]"></div>
            <div className="w-[32%] h-[39%] bg-gradient-to-r from-[#73B4FF] to-[#4D65FF] rounded-full absolute bottom-[-27%] left-[-12%] opacity-[0.2] z-[-1]"></div>
            <div className="w-[21%] h-[26%] bg-[#E9EBFA] rounded-[10px] absolute top-[28%] left-[-6%]"></div>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
}