(() => {
  "use strict";
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.7 } });
  document.querySelector("#year").textContent = new Date().getFullYear();

  const dialog = document.querySelector("#notice");
  const title = document.querySelector("#notice-title");
  const message = document.querySelector("#notice-message");
  let lastFocused;
  function showNotice(heading, body) {
    lastFocused = document.activeElement;
    title.textContent = heading;
    message.textContent = body;
    dialog.showModal();
  }
  dialog.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => lastFocused?.focus());

  let invitation = null;
  try {
    const url = new URL(window.SITE_CONFIG?.whatsappGroupUrl || "");
    if (url.protocol === "https:" && url.hostname === "chat.whatsapp.com" && /^\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)) invitation = url.href;
  } catch { /* An unset invitation keeps the page in preview mode. */ }

  document.querySelectorAll("[data-join]").forEach((link) => {
    if (invitation) {
      link.href = invitation;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.addEventListener("click", () => {
        if (typeof window.fbq === "function") {
          window.fbq("track", "Lead", {
            content_name: "Grupo eupagueibarato",
          });
          window.fbq("trackCustom", "WhatsAppClick", {
            content_name: "Grupo eupagueibarato",
          });
        }
      });
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showNotice("Convite indisponível", "O convite do grupo ainda não está disponível. Volte em breve para conferir os achadinhos.");
      });
    }
  });
  document.querySelector("[data-privacy]").addEventListener("click", () => {
    showNotice("Sua privacidade", "Esta página utiliza o Pixel da Meta para medir visitas e cliques no convite do grupo e o Pixel do TikTok para medir visitas e avaliar anúncios. A Meta e o TikTok podem usar cookies e receber informações de navegação, como a página visitada e dados do navegador e dispositivo. Não coletamos dados por formulários. Ao abrir o convite, você acessa o WhatsApp, que possui suas próprias regras de privacidade. Em grupos, seu número e as informações do seu perfil podem ficar visíveis a outros participantes, conforme as configurações do WhatsApp.");
  });
  const mobileJoin = document.querySelector(".mobile-join");
  const heroButton = document.querySelector(".hero [data-join]");
  const observer = new IntersectionObserver(([entry]) => {
    mobileJoin.classList.toggle("visible", !entry.isIntersecting && entry.boundingClientRect.top < 0);
  });
  observer.observe(heroButton);
})();
