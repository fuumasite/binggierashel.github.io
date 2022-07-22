const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggle.innerHTML = "DARK mode";
  } else {
    html.classList.add("dark");
    toggle.innerHTML = "LIGHT mode";
  }
});

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const months = ["jan", "feb", "march", "apr", "may", "june", "aug", "sept", "oct", "nov", "dec"];

setInterval(() => {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const hour = time.getHours();
  const hourIn12Hour = hour % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour > 12 ? "pm" : "AM";

  dateEl.innerText = `${days[day]}, ${date}, ${months[month]}`;
  timeEl.innerText = `${hour}: ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

  hourEl.style.transform = `translate(-50%, -100%)rotate(${hour * 30}deg)`;
  minuteEl.style.transform = ` translate(-50%, -100%) rotate(${minutes * 6}deg)`;
  secondEl.style.transform = ` translate(-50%, -100%) rotate(${seconds * 6}deg)`;
}, 1000);
