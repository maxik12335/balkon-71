import { useEffect, useState } from "react";

// useNavColor() — navbar перекрашивается вручную через атрибуты на секциях
//
// 1. Дефолт (при загрузке) — константы ниже:
const NAV_DEFAULT_BG = "#ffffff";   // фон navbar'а при загрузке
const NAV_DEFAULT_TEXT = "white"; // цвет текста при загрузке
//
// 2. На любой блок вешаешь атрибут — это цвет navbar'а, когда он над блоком:
//    <section data-nav-text="#fff">                     — поменять ТОЛЬКО цвет текста
//    <section data-nav-bg="#14532d">                    — поменять ТОЛЬКО фон
//    <section data-nav-bg="#000" data-nav-text="#fff">  — оба
//    Атрибутов нет — navbar сохраняет предыдущее значение. Хоть bg, хоть текст, хоть оба.
//
// 3. В Navbar.jsx:
//    const { navColor, textColor } = useNavColor();
//    <div style={{ backgroundColor: navColor }}>   ← фон
//    <p  style={{ color: textColor }}>             ← текст

const NAV_LINE = 60; // условная линия navbar'а от верха экрана

export const useNavColor = () => {
  const [navColor, setNavColor] = useState(NAV_DEFAULT_BG);
  const [textColor, setTextColor] = useState(NAV_DEFAULT_TEXT);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        document.querySelectorAll("[data-nav-bg], [data-nav-text]").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top <= NAV_LINE && r.bottom >= NAV_LINE) {
            if (el.dataset.navBg) setNavColor(el.dataset.navBg);
            if (el.dataset.navText) setTextColor(el.dataset.navText);
          }
        });

        ticking = false;
      });
    };

    handleScroll(); // если страница открыта не с самого верха
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { navColor, textColor };
};
