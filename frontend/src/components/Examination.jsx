import arrowLeftImage from '../assets/arrow-left.svg';
import amicoImage from '../assets/amico.svg';
import AnimatedBlock from './AnimatedBlock';

export default function Examination() {
    return (
      <div className="relative w-full max-w-[1320px] mx-auto flex flex-col justify-center mt-[284px] max-[1320px]:mt-[120px] max-[1024px]:mt-[67px] max-[768px]:mt-[120px] px-[20px]">
        <AnimatedBlock
          fromOpacity={0}
          fromTransform="translateY(-30px)"
          duration="all 0.6s ease-out"
          threshold={0.2}
          triggerOnce={true}
        >
          <h2 className="font-geologica text-[36px] leading-[36px] font-[700] text-[#202124] text-right">
              Супровід податкових перевірок
          </h2>
          <p className="font-geologica text-[18px] leading-[27px] font-[400] text-[#80868B] mt-[16px] text-right">
              Ми пропонуємо повну підтримку на всіх етапах податкової перевірки:
          </p>
        </AnimatedBlock>

        <div className="flex items-center mt-[32px] justify-end max-[768px]:flex-col max-[768px]:items-start">
          <AnimatedBlock
            classNames="w-[49%] absolute bottom-0 left-[-8vw] max-[1320px]:left-[-20%] max-[1320px]:top-[0] max-[1024px]:w-[40%] max-[1024px]:left-[-15%] max-[768px]:w-[100%] max-[768px]:left-[0] max-[768px]:right-[0] max-[768px]:relative max-[768px]:max-w-[628px] ml-auto"
            fromOpacity={0}
            fromTransform="translateX(-100px)"
            duration="all 1s ease-out"
            threshold={0.2}
            triggerOnce={true}
          >
            <img src={amicoImage} alt="amico" className="w-full object-cover"/>
          </AnimatedBlock>

          <div className="flex flex-col gap-[16px] max-w-[100%] items-end">
            {[
              "Виявлення можливих помилок і ризиків донарахувань",
              "Перевірка законності дій податкових органів",
              "Представлення інтересів при проведенні заходів податкового контролю",
              "Підготовку рекомендацій щодо покращення бізнес-процесів",
              "Оскарження рішень і дій контролюючих органів."
            ].map((text, index) => (
              <AnimatedBlock
                key={index}
                classNames="relative flex items-center gap-[32px] justify-end w-full"
                fromOpacity={0}
                fromTransform="translateX(50px)"
                duration="all 0.6s ease-out"
                delay={`${0.15 * (index + 1)}s`}
                threshold={0.2}
                triggerOnce={true}
              >
                <div className="font-geologica text-[22px] leading-[27.5px] font-[300] text-[#80868B] text-right py-[20px]">
                  {text}
                </div>
                <img 
                  src={arrowLeftImage} 
                  alt="arrow left" 
                  className="w-[44px] h-[44px] object-cover rotate-180"
                />
                <div 
                  className="absolute bottom-0 h-[1px] w-[100%]" 
                  style={{
                    background: "linear-gradient(-90deg, rgba(209, 167, 122, 0.64) 0%, rgba(241, 244, 246, 0.64) 100%)"
                  }}
                />
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </div>
    );
}