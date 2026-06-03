document.querySelectorAll("[data-scroll-target]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const targetId = trigger.getAttribute("data-scroll-target");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-demo-toast]").forEach((button) => {
  button.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.textContent = "Esta accion forma parte del demo publico. El flujo real se implementaria con backend e integraciones.";
    toast.setAttribute(
      "style",
      [
        "position:fixed",
        "left:50%",
        "bottom:24px",
        "transform:translateX(-50%)",
        "background:#0d1b2a",
        "color:white",
        "padding:14px 18px",
        "border-radius:999px",
        "font-family:Instrument Sans, sans-serif",
        "font-size:14px",
        "box-shadow:0 18px 36px rgba(13,27,42,0.22)",
        "z-index:30",
      ].join(";")
    );

    document.body.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2600);
  });
});
