import service1Image from '../assets/service1.svg';
import service2Image from '../assets/service2.svg';
import service3Image from '../assets/service3.svg';
import service4Image from '../assets/service4.svg';
import AnimatedBlock from './AnimatedBlock';

export default function Services() {
    const services = [
        {
            icon: service1Image,
            title: "Торгівля",
            description: "Оптимізуємо закупівлі та поставки для підвищення ефективності бізнесу."
        },
        {
            icon: service2Image,
            title: "Логістика",
            description: "Розробляємо та реалізуємо найкращі маршрути доставки."
        },
        {
            icon: service3Image,
            title: "Консолідація",
            description: "Об'єднуємо вантажі для зниження витрат та прискорення процесів."
        },
        {
            icon: service4Image,
            title: "Доставка",
            description: "Гарантуємо швидку та надійну транспортування товарів."
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
                Чим ми займаємося
                <div className='absolute w-[113px] h-[31px] bg-[#4D65FF] opacity-[0.1] top-[5px] left-[-45px] max-[524px]:right-[6vw] max-[524px]:left-auto'></div>
              </h2>
              <p className="text-[18px] leading-[28px] font-[400] text-[#1C2D51] mt-[27px] text-center">
                Повний цикл послуг для вашого бізнесу.
              </p>
            </AnimatedBlock>

            <div className="flex gap-[64px] max-[1024px]:flex-wrap items-stretch mt-[64px] max-[1024px]:grid max-[1024px]:grid-cols-4 max-[1024px]:gap-[32px] max-[768px]:grid-cols-2 max-[520px]:grid-cols-1">
              {services.map((_, index) => (
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
                  <img src={_.icon} alt="service" className="w-[36px] h-[36px] mt-[32px] mb-[24px]"/>   
                  <div className="font-geologica text-[16px] leading-[26px] font-[700] text-[#1C2D51] mb-[8px]">
                      {_.title}
                  </div>
                  <div className="font-geologica text-[16px] leading-[26px] font-[400] text-[#1C2D51] w-[105%] mb-[44px]">
                      {_.description}
                  </div>
                  <div className="text-[16px] leading-[16px] font-[400] text-[#4267B2] flex items-center gap-[7px] mt-auto">
                    Детальніше
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M17.7658 5.66675L2 5.66675" stroke="#4267B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.1409 6L13.261 10.3333" stroke="#4267B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.1409 6.00008L13.261 1.66675" stroke="#4267B2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </AnimatedBlock>
              ))}
            </div>
        </AnimatedBlock>
    );
}