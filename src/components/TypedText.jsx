import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  backDelay = 2000,
  loop = true,
  className = "",
}) => {
  const elementRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    typedRef.current = new Typed(elementRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      smartBackspace: true,
      cursorChar: "|",
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  return <span ref={elementRef} className={className}></span>;
};

export default TypedText;
