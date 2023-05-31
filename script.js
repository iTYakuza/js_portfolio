const colorModeBtn = document.querySelector(".dark-mode-btn");
const theme = document.querySelector("body");

//проверка темной темы на уровне системных настроек
if (
   window.matchMedia &&
   window.matchMedia("(prefers-color-scheme: dark)").matches
) {
   colorModeBtn.classList.add("dark-mode-btn--active");
   theme.classList.add("dark");
}

// проверка темной темы
if (localStorage.getItem("theme") === "dark") {
   colorModeBtn.classList.add("dark-mode-btn--active");
   theme.classList.add("dark");
} else if (localStorage.getItem("theme") === "light") {
   colorModeBtn.classList.remove("dark-mode-btn--active");
   theme.classList.remove("dark");
}
// } else {
//    colorModeBtn.classList.remove("dark-mode-btn--active");
//    theme.classList.remove("dark");
// }

//если меняются системные настройки, меняем тему
window
   .matchMedia("(prefers-color-scheme: dark)")
   .addEventListener("change", (event) => {
      const newTheme = event.matches ? "dark" : "light";

      if (newTheme === "dark") {
         colorModeBtn.classList.add("dark-mode-btn--active");
         theme.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         colorModeBtn.classList.remove("dark-mode-btn--active");
         theme.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   });

//включение ночного режима
colorModeBtn.addEventListener("click", () => {
   colorModeBtn.classList.toggle("dark-mode-btn--active");
   const isDark = theme.classList.toggle("dark");
   //    const btn = e.target.closest(".dark-mode-btn");
   //    console.log(btn);
   //    el.classList.toggle(".dark-mode-btn--active");
   if (isDark) {
      localStorage.setItem("theme", "dark");
   } else {
      localStorage.setItem("theme", "light");
   }
});
