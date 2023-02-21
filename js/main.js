let invert = document.querySelector(".invert");
let article = document.querySelector(".article");
let fontWeight = document.querySelector(".fontWeight");
let font = document.querySelector("#fonts");
let minus = document.querySelector(".minus");
let fontSize = document.querySelector(".fontSize");
let plus = document.querySelector(".plus");

window.onload = function (e) {
  if (window.localStorage.getItem("backgroundColor") === "black") {
    invert.style.color = "#4F7942";
    article.style.backgroundColor = "black";
    article.style.color = "white";
  }
  if (window.localStorage.getItem("fontWeight") === "700") {
    fontWeight.style.color = "#4F7942";
    article.style.fontWeight = "700";
  }
  if (window.localStorage.getItem("fontSize")) {
    fontSize.innerHTML = window.localStorage.getItem("fontSize");
    article.style.fontSize = window.localStorage.getItem("fontSize") + "px";
  } else {
    fontSize.innerHTML = 16;
    article.style.fontSize = "16px";
  }

  smallerThan(minus);
  biggertThan(plus);
  if (window.localStorage.getItem("fontFamily")) {
    font.value = window.localStorage.getItem("fontFamily");
    article.style.fontFamily = window.localStorage.getItem("fontFamily");
  }
};

function biggertThan(element) {
  if ("26" === fontSize.innerHTML) {
    element.disabled = true;
    element.classList.remove("hover");
    element.style.cursor = "not-allowed";
  } else {
    element.disabled = false;
    element.classList.add("hover");
    element.style.cursor = "pointer";
  }
}

function smallerThan(element) {
  if ("16" === fontSize.innerHTML) {
    element.disabled = true;
    element.classList.remove("hover");
    element.style.cursor = "not-allowed";
  } else {
    element.disabled = false;
    element.classList.add("hover");
    element.style.cursor = "pointer";
  }
}

invert.onclick = function (e) {
  if (getComputedStyle(article).color === "rgb(0, 0, 0)") {
    article.style.color = "white";
    article.style.backgroundColor = "black";
    e.target.style.color = "#4F7942";
  } else {
    article.style.color = "black";
    article.style.backgroundColor = "white";
    e.target.style.color = "black";
  }
  window.localStorage.setItem("backgroundColor", article.style.backgroundColor);
};

fontWeight.onclick = function (e) {
  if (getComputedStyle(article).fontWeight === "400") {
    article.style.fontWeight = "700";
    e.target.style.color = "#4F7942";
  } else {
    article.style.fontWeight = "400";
    e.target.style.color = "black";
  }
  window.localStorage.setItem("fontWeight", article.style.fontWeight);
};

font.onclick = function (e) {
  if (
    e.target.value === "Ubuntu" ||
    e.target.value === "Cairo" ||
    e.target.value === "Dongle"
  ) {
    article.style.fontFamily = e.target.value;
  } else {
    article.style.fontFamily = "sans-serif";
  }
  window.localStorage.setItem("fontFamily", e.target.value);
};

minus.onclick = function (e) {
  if (16 < parseInt(fontSize.innerHTML)) {
    fontSize.innerHTML = parseInt(fontSize.innerHTML) - 1;
    article.style.fontSize = parseInt(fontSize.innerHTML) + "px";
  }
  smallerThan(minus);
  biggertThan(plus);
  window.localStorage.setItem("fontSize", parseInt(fontSize.innerHTML));
};

plus.onclick = function (e) {
  if (parseInt(fontSize.innerHTML) < 26) {
    fontSize.innerHTML = parseInt(fontSize.innerHTML) + 1;
    console.log(fontSize.innerHTML);
    article.style.fontSize = fontSize.innerHTML + "px";
  }
  smallerThan(minus);
  biggertThan(plus);
  window.localStorage.setItem("fontSize", parseInt(fontSize.innerHTML));
};
