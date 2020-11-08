/* eslint-disable no-return-assign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react';

import Button from '../Button';

interface IBackToTopButton {
  animationTime?: number;
}

const BackToTopButton: React.FC<IBackToTopButton> = ({
  animationTime = 1000,
}) => {
  const handleBackToTop = useCallback(() => {
    smoothScrollTo(0, 0, animationTime);

    function smoothScrollTo(endX: number, endY: number, duration: number) {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();

      // Easing function
      const easeInOutQuart = (
        time: number,
        from: number,
        distance: number,
        scrollDuration: number,
      ) => {
        if ((time /= scrollDuration / 2) < 1)
          return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
      };

      const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
          clearInterval(timer);
        }
        window.scroll(newX, newY);
      }, 1000 / 60); // 60 fps
    }
  }, [animationTime]);

  return <Button onClick={handleBackToTop}>voltar ao topo</Button>;
};

export default BackToTopButton;
