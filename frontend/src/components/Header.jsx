import logoIcon from '../assets/logo.svg'
import AnimatedBlock from './AnimatedBlock'

export default function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth', // Плавный скролл
            block: 'start', // Скролл к началу элемента
          });
        }
    };
    return (
        <AnimatedBlock
            classNames="h-[96px] flex items-center justify-between max-w-[1320px] w-full mx-auto px-[24px] max-[768px]:bg-white"
            fromOpacity={0}
            fromTransform="translateY(-20px)"
            duration="all 0.5s ease-out"
            triggerOnce={true}
        >
            <div className="shrink-0 cursor-pointer flex items-center space-x-[7px]">
                <img src={logoIcon} alt="logo" className="h-[64px]" />
                {/* <span className="text-[#202124] font-[700] text-[16.2px] leading-[20.25px]">Франтовський<br/>і Партнери</span> */}
            </div>
            <div className="shrink-0 flex items-center justify-center text-center text-[#444444] text-[18px] font-normal leading-[28px] cursor-pointer space-x-[64px] md:max-lg:space-x-[44px] max-[767px]:hidden">
                <div onClick={() => scrollToSection('services')}>Послуги</div>
                <div onClick={() => scrollToSection('aboutus')}>Про компанію</div>
                <div onClick={() => scrollToSection('contacts')}>Контакти</div>
            </div>
            <div className="shrink-0">
                <a href="tel:+48695783810" className="text-center text-[#444444] text-[18px] font-normal leading-[28px] cursor-pointer">+48 695 783 810</a>
            </div>
        </AnimatedBlock>
    );
}