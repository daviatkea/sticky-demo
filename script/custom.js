const main = document.querySelector("main");

const classReg = /(?!\s)[^,()/*{}]+(?![^{]*})/g;

const styleTag = main.querySelector(".editor > style");
const _tA = main.querySelector(".editor > textarea");
let startingCSS = _tA.innerHTML;

const parent = main.querySelector(".container");

function prefix(str) {
  return str.replaceAll(classReg, (match) => `.sticky-container ${match}`);
}

const init = () => {
  styleTag.innerHTML = prefix(_tA.value);

  _tA.addEventListener("input", (e) => {
    styleTag.innerHTML = prefix(e.target.value);
  });
};

init();
