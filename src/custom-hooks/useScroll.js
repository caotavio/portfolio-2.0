import {useEffect} from 'react';

const useScroll = () => {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById('nav');

      if(isTop) {
        nav.classList.add('shadow-2xl');
      } else {
        nav.classList.remove('shadow-2xl');
      }

      return () => window.removeEventListener('scroll');
    })
  }, []);
}

export default useScroll;