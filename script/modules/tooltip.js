export default function initTooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}"px"`;
      this.tooltipBox.style.left = `${event.pageX + 20}"px"`;
    },
  };

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = `${event.pageY}"px"`;
    tooltipBox.style.left = `${event.pageX}"px"`;

    const onMouseLeave = {
      element: "",
      tooltipBox: "",
      handleEvent() {
        this.tooltipBox.remove();
      },
    };

    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener("mouseleave", onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
