const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
let idx = 1;

const text = "What's up, mate!";

let speed = 200/speedEl.value;

const writeText = () => {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener("input", (e) => {
    speed = 200 / e.target.value;
})