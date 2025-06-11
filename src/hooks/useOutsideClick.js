import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("click outside");
          close();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing); //capture phase only not while bubbling up
      return () => document.removeEventListener("click", handleClick, true);
    },
    [close, listenCapturing]
  );

  return ref;
}
