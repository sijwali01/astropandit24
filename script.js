document.getElementById("buyNowButton").addEventListener("click", function () {
  document.getElementById("modal").classList.add("show");
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("show");
});

window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").classList.remove("show");
  }
});
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
