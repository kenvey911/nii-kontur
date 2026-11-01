const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? "Открыть меню" : "Закрыть меню");
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Открыть меню");
      navigation.classList.remove("is-open");
    }
  });
}

const requestForm = document.querySelector(".request-form");
const formStatus = document.querySelector(".form-status");

if (requestForm instanceof HTMLFormElement && formStatus) {
  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!requestForm.reportValidity()) {
      return;
    }

    formStatus.textContent = "Запрос зарегистрирован. Канал связи подтверждён.";
    requestForm.reset();
  });
}
