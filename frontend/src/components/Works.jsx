import arrowLeftImage from '../assets/arrow-left.svg';
import panaImage from '../assets/pana.svg';
import AnimatedBlock from './AnimatedBlock';

export default function Works() {
    const workItems = [
        "Допомога створення, придбання, реорганізації та діяльності компаній.",
        "Комплексний правовий супровід бізнесу, захист від зовнішніх і внутрішніх загроз.",
        "Договірна робота. Підготовка проекту, погодження, підписання, реєстрація та зберігання укладеного договору.",
        "Представництво в загальних, господарських та адміністративних судах усіх інстанцій."
    ];

    return (
      <div className="relative w-full max-w-[1320px] mx-auto flex flex-col justify-center mt-[284px] max-[1320px]:mt-[120px] max-[1024px]:mt-[67px] max-[768px]:mt-[120px] px-[20px]">
        <AnimatedBlock
          fromOpacity={0}
          fromTransform="scale(0.95)"
          duration="all 0.8s ease-out"
          threshold={0.2}
          triggerOnce={true}
        >
          <h2 className="font-geologica text-[36px] leading-[36px] font-[700] text-[#202124]">
              Юридичне обслуговування
          </h2>
          <p className="font-geologica text-[18px] leading-[27px] font-[400] text-[#80868B] mt-[16px]">
              Наше юридичне обслуговування включає в себе
          </p>
        </AnimatedBlock>

        <div className="flex items-end mt-[32px] max-[768px]:flex-col-reverse max-[768px]:items-start">
            <div className="flex flex-col max-w-[58%] gap-[16px] max-[1024px]:max-w-[59%] max-[768px]:max-w-[100%]">
                {workItems.map((text, index) => (
                    <AnimatedBlock
                        key={index}
                        classNames="relative flex items-center gap-[32px]"
                        fromOpacity={0}
                        fromTransform={`translateX(${-50 - (index * 20)}px)`}
                        duration="all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
                        delay={`${0.2 * (index + 1)}s`}
                        threshold={0.2}
                        triggerOnce={true}
                    >
                        <AnimatedBlock
                            fromOpacity={0}
                            fromTransform="rotate(-180deg)"
                            duration="all 0.6s ease-out"
                            delay={`${0.4 * (index + 1)}s`}
                            threshold={0.2}
                            triggerOnce={true}
                            classNames="shrink-0"
                        >
                            <img 
                                src={arrowLeftImage} 
                                alt="arrow left" 
                                className="w-[44px] h-[44px] object-cover"
                            />
                        </AnimatedBlock>
                        <div className="font-geologica text-[22px] leading-[27.5px] font-[300] text-[#80868B] py-[12px]">
                            {text}
                        </div>
                        <AnimatedBlock
                            classNames="absolute bottom-0 h-[1px] w-[100%]"
                            fromOpacity={0}
                            fromTransform="scaleX(0)"
                            duration="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                            delay={`${0.3 * (index + 1)}s`}
                            threshold={0.2}
                            triggerOnce={true}
                        >
                            <div 
                                className="h-full w-full"
                                style={{
                                    background: "linear-gradient(90deg, rgba(209, 167, 122, 0.64) 0%, rgba(241, 244, 246, 0.64) 100%)"
                                }}
                            />
                        </AnimatedBlock>
                    </AnimatedBlock>
                ))}
            </div>
            <AnimatedBlock
                classNames="w-full flex justify-end"
                fromOpacity={0}
                fromTransform="translate(50px, 30px) scale(0.95)"
                duration="all 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
                delay="0.5s"
                threshold={0.2}
                triggerOnce={true}
            >
                <img 
                    src={panaImage} 
                    alt="pana" 
                    className="absolute bottom-0 w-[503px] object-cover max-[1024px]:w-[378px] max-[768px]:relative max-[768px]:w-[342px]"
                />
            </AnimatedBlock>
        </div>
      </div>
    );
}