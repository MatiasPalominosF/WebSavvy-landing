const planBtn = document.getElementById("plan-btn");
const planDiv = document.getElementById("generic_price_table");
const arrowIcon = document.querySelector("#plan-btn i.fa-arrow-right");

planBtn.addEventListener("click", () => {
  if (planDiv.style.display === "none") {
    planDiv.style.display = "flex";
    arrowIcon.style.transform = "rotate(90deg)";
  } else {
    planDiv.style.display = "none";
    arrowIcon.style.transform = "none";
  }
});
