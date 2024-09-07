import { useState, useEffect } from "react";
import button from "../assets/back-to-top.svg";
function ScrollToTop() {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollToTopButton && (
        <i onClick={scrollToTop}>
          <img src={button} alt="Top" id="topBtn" />
        </i>
      )}
    </div>
  );
}

export default ScrollToTop;
