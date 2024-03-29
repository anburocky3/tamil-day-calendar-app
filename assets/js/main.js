const dateEl = document.querySelector("#date");
const dayContainerEl = document.querySelector("#dayImg");

dateEl.addEventListener("change", (e) => {
  e.preventDefault();

  const inputDate = e.target.value;

  //   console.log(inputDate);
  processDate(inputDate);
});

function processDate(date) {
  const myDate = date ? new Date(date) : new Date();

  // https://www.tamildailycalendar.com/2024/2012024.jpg
  const result = myDate.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });

  const formatedDate = result.replaceAll("/", "");
  const formatedUrl = `https://www.tamildailycalendar.com/${myDate.getFullYear()}/${formatedDate}.jpg`;

  dayContainerEl.src = formatedUrl;
  dayContainerEl.alt = formatedDate;
  dayContainerEl.classList.remove("hidden");
}

processDate();
