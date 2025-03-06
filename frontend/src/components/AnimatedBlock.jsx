import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedBlock = ({ children, classNames, triggerOnce, threshold, fromOpacity, fromTransform, duration, delay, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce, // Анимация срабатывает только один раз
    threshold: threshold, // Порог видимости (10% элемента в области видимости)
  });

  return (
    <div
      ref={ref}
      className={classNames}
      id={id}
      style={
        inView ?
          {
            opacity: 1,
            transform: 'translateY(0)',
            transition: duration,
            transitionDelay: delay
          }
        :
          {
            opacity: fromOpacity,
            transform: fromTransform,
            transition: duration,
            transitionDelay: delay
          }
      }
    >
      {children}
    </div>
  );
};

export default AnimatedBlock;