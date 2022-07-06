let loc;
document.querySelector("button").addEventListener("click", function () {
  loc = window.location.href;
  document.querySelector("input").value = loc;
});

console.log(loc);
