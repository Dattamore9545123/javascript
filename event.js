const btn = document.getElementById("btn");

btn.addEventListener("mouseover", function()
{
    btn.style.background="red";
})

document.addEventListener("contextmenu", e => e.preventDefault());

["copy", "cut", "paste"].forEach(eventName => {
document.addEventListener(eventName, e => e.preventDefault());
});

document.addEventListener("keydown", e => {
if (e.key === "F12") {
e.preventDefault();
}
if (e.ctrlKey && e.shiftKey &&
["i", "j", "c"].includes(e.key.toLowerCase())) {
e.preventDefault();
}
if (e.ctrlKey &&
["u", "c", "x", "s", "a"].includes(e.key.toLowerCase())) {
e.preventDefault();
}
});

document.addEventListener("selectstart", e => e.preventDefault());