(() => {
    const menuBtnRef = document.querySelector("[data-submenu-button]");
    const mobileMenuRef = document.querySelector("[data-submenu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("submenu-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("submenu-open");
    });
  })();