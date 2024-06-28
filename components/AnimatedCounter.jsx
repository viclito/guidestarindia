import {
    animate,
    useInView,
    useIsomorphicLayoutEffect,
  } from "framer-motion";
  import { useRef } from "react";
  
  
  const AnimatedCounter = ({ from, to, animationOptions}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const formatNumberIndian = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',').replace(/(\d+)(\d{3},)/, '$1,$2').replace(/(\d+)(\d{2},\d{3},)/, '$1,$2');
      };
  
    useIsomorphicLayoutEffect(() => {
      const element = ref.current;
  
      if (!element) return;
      if (!inView) return;
  
      // Set initial value
      element.textContent = formatNumberIndian(from);
  
      const controls = animate(from, to, {
        duration: 5,
        ease: "easeOut",
        ...animationOptions,
        onUpdate(value) {
          element.textContent = formatNumberIndian(Math.floor(value));
        },
      });
  
      // Cancel on unmount
      return () => {
        controls.stop();
      };
    }, [ref, inView, from, to]);
  
    return <span ref={ref} />;
  };
  
  export default AnimatedCounter;