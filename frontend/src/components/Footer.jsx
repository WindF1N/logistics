import contactsBgImage from '../assets/contacts-bg.png';
import contactsImage from '../assets/contacts.svg';
import logo from '../assets/logo.svg';
import AnimatedBlock from './AnimatedBlock';
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError(t('contactForm.emailError'));
            return;
        }
        setError('');

        const response = await fetch('https://service.frantovskiy.com.ua/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: `${t('contactForm.title')} ${name}`,
                message: `${t('contactForm.name')}: ${name}\n${t('contactForm.email')}: ${email}\n${t('contactForm.message')}: ${message}`,
            }),
        });
        const data = await response.json();
        console.log(data);

        if (data.status === 'success') {
            setSuccessMessage(t('contactForm.successMessage'));
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setError(t('contactForm.errorMessage'));
        }
    };

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
      <>
        <div id="contacts" className="relative bg-[#4267B21A]">
            <img src={contactsBgImage} alt="contacts bg" className="absolute w-[100%] h-[100%] object-cover z-[0] top-0 left-0"/>
            <div className="relative w-full max-w-[1320px] mx-auto flex flex-col items-center justify-between mt-[128px] max-[1320px]:mt-[120px] max-[1024px]:mt-[64px] max-[768px]:mt-[120px] px-[20px] py-[64px]">
                <div className="flex items-center justify-between gap-[140px] max-[1024px]:flex-col max-[1024px]:gap-[68px]">
                    <AnimatedBlock
                    classNames="flex flex-col gap-[16px] max-[1024px]:items-center"
                    fromOpacity={0}
                    fromTransform="translateX(-50px)"
                    duration="all 0.8s ease-out"
                    threshold={0.2}
                    triggerOnce={true}
                    >
                        <h2 className="font-geologica text-[45px] leading-[54.86px] font-[600] text-[#1C2D51] max-[1024px]:text-center">
                            {t('contactForm.title')}
                        </h2>
                        <p className="font-geologica text-[18px] leading-[28px] mt-[11px] font-[400] text-[#1C2D51] max-[1024px]:text-center">
                            {t('contactForm.description')}
                        </p>
                        <img src={contactsImage} alt="contacts" className="w-[407px] h-[233px] object-cover max-[768px]:w-full max-[768px]:h-auto"/>
                    </AnimatedBlock>
                    <AnimatedBlock
                    classNames="flex flex-col gap-[16px] w-full max-w-[460px] max-[1024px]:mx-auto"
                    fromOpacity={0}
                    fromTransform="translateX(50px)"
                    duration="all 0.8s ease-out"
                    delay="0.2s"
                    threshold={0.2}
                    triggerOnce={true}
                    >
                        <input 
                            type="text"
                            placeholder={t('contactForm.name')}
                            className="w-full px-[24px] py-[16px] rounded-[16px] border border-[#3B5CA0] font-geologica text-[16px] leading-[24px] font-[400] text-[#202124] outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setSuccessMessage('')}
                        />
                        <input 
                            type="email"
                            placeholder={t('contactForm.email')}
                            className={`w-full px-[24px] py-[16px] rounded-[16px] border ${error ? 'border-red-500' : 'border-[#3B5CA0]'} font-geologica text-[16px] leading-[24px] font-[400] text-[#202124] outline-none`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => {
                                setError('');
                                setSuccessMessage('')
                            }}
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <textarea
                            placeholder={t('contactForm.message')}
                            rows={1}
                            className="w-full px-[24px] py-[16px] rounded-[16px] border border-[#3B5CA0] font-geologica text-[16px] leading-[24px] font-[400] text-[#202124] outline-none resize-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onBlur={() => setSuccessMessage('')}
                        />
                        <button
                            type='button'
                            className="px-[44px] py-[19px] rounded-[10px] bg-[#3B5CA0] text-white hover:opacity-90 font-geologica text-[18px] font-semibold leading-[18px] max-[768px]:w-[100%]"
                            onClick={handleSubmit}
                        >
                            {t('contactForm.send')}
                        </button>
                        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                        <p className="font-geologica text-[14px] leading-[21px] font-[300] text-[#1C2D51]">
                            {t('contactForm.consent')}
                        </p>
                    </AnimatedBlock>
                </div>
            </div>
        </div>
        <div className="relative w-full max-w-[1320px] mx-auto flex flex-wrap justify-between w-full py-[32px] px-[24px] max-[920px]:flex-col">
            <div className="flex flex-col justify-end max-[1024px]:w-full max-[1024px]:mb-[56px]">
                <div className="flex items-center gap-[16px]">
                    <img src={logo} alt="logo" className="w-[64px] h-[64px] object-cover"/>
                    <div className="text-[#4267B2] font-[600] text-[24px] leading-[24px]">
                        ENRI
                    </div>
                </div>
                <div className="text-[14px] leading-[20px] font-[400] text-[#4A4A4A] mt-[28px]">
                    {t('contactForm.copyright')}
                </div>
            </div>
            <div className="flex flex-col justify-end max-[1024px]:order-last max-[920px]:mt-[56px]">
                <div className="flex items-center text-center text-[#1C2D51] text-[16px] font-[500] leading-[28px] cursor-pointer space-x-[24px]">
                    <div onClick={() => scrollToSection('services')}>{t('nav.services')}</div>
                    <div onClick={() => scrollToSection('aboutus')}>{t('nav.company')}</div>
                    <div onClick={() => scrollToSection('contacts')}>{t('nav.contacts')}</div>
                </div>
                <div className="text-[14px] leading-[28px] font-[500] text-[#4A4A4A] mt-[16px] max-w-[499px]">
                    {t('contactForm.missionFooter')}
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <div className="text-[18px] leading-[25.71px] font-[600] text-[#4A4A4A]">
                    {t('contactForm.officeAddress')}
                </div>
                <div className="text-[14px] leading-[20px] font-[400] text-[#4A4A4A] mt-[16px]">
                    {t('contactForm.address')}
                </div>
                <div className="text-[14px] leading-[20px] font-[400] text-[#4A4A4A] mt-[16px]">
                    +48 695 783 810
                </div>
                <div className="text-[14px] leading-[20px] font-[400] text-[#4A4A4A] mt-[16px]">
                    enri@enri-trading.com
                </div>
            </div>
        </div>
      </>
    );
}