import React, { useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";
import Container from "./Container";

const ScrollBtn = () => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollBtn");

    const scrollFunction = () => {
      if (window.scrollY) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", scrollFunction);
    scrollBtn.addEventListener("click", scrollToTop);
  }, []);
  return (
    <Container>
      <div
        className="fixed bottom-10 right-20 z-40
     bg-darkColor/80 text-lightText/80 p-3 rounded-full cursor-pointer
     hover:bg-black transition duration-300 scrollBtn"
      >
        <MdArrowUpward size={24} />
      </div>
    </Container>
  );
};

export default ScrollBtn;
