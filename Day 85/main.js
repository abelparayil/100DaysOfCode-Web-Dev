const spantext = document.getElementById("tooltip");

window.onmousemove = function (e) {
  const x = e.clientX;
  const y = e.clientY;
  spantext.style.top = y + 20 + "px";
  spantext.style.left = x + 20 + "px";
};
