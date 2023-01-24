(() => {
    const menuBtnRef = document.querySelector("[contact-menu-button]");
    const mobileMenuRef = document.querySelector("[contact-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("contact-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("contact-open");
    });
  })();