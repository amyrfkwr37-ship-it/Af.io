const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const settingsPanel = document.querySelector("#settingsPanel");

// open menu
menuButton.addEventListener("click", (e) => {
   e.stopPropagation();
  settingsPanel.style.right = "0";
});
// close menu
document.addEventListener("click", (e) => {
  if (!settingsPanel.contains(e.target)) {
    settingsPanel.style.right = "-320px";
  }
});

closeButton.addEventListener("click", () => {
  settingsPanel.style.right = "-320px";
});

// change dark mode
const darkModeToggle = document.querySelector("#darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "dark");
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// save theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// language menu
const languageButton = document.querySelector("#languageButton");
const languageMenu = document.querySelector("#languageMenu");
languageButton.addEventListener("click", () => {
  languageMenu.style.display =
    languageMenu.style.display === "block" ? "none" : "block";
});

const persianLanguage = document.querySelector("#persianLanguage");
const englishLanguage = document.querySelector("#englishLanguage");

const settingTitle = document.querySelector("#settingTitle");
const darkModeText = document.querySelector("#darkModeText");
const languageText = document.querySelector("#languageText");
const homeText = document.querySelector("#homeText");
const UniversityText = document.querySelector("#UniversityText");
const ProgramingText = document.querySelector("#ProgramingText");
const appsText = document.querySelector("#appsText");
const checkSite = document.querySelector("#checkSite");
const searchInput = document.querySelector("#searchInput");
const taglainText = document.querySelector("#taglainText");


// change language
persianLanguage.addEventListener("click", () => {
  settingTitle.textContent = "تنظیمات";
  darkModeText.textContent = "حالت تاریک";
  languageText.textContent = "زبان";
  homeText.textContent = "خانه";
  UniversityText.textContent = "دانشگاه";
  ProgramingText.textContent = "برنامه نویسی";
  appsText.textContent = "اپ ها";
  checkSite.textContent = "چک سایت";
  searchInput.placeholder = "سرچ در گوگل";
  document.body.style.direction ="rtl";
  settingsPanel.style.direction = "rtl";
  taglainText.textContent ="طراحی. ساخت. تکامل"
  // save languge
  localStorage.setItem("language", "persian");
  languageMenu.style.display="none";

});

englishLanguage.addEventListener("click", () => {
  settingTitle.textContent = "Setting";
  darkModeText.textContent = "Dark";
  languageText.textContent = "Language";
  homeText.textContent = "Home";
  UniversityText.textContent = "University";
  ProgramingText.textContent = "Programing";
  appsText.textContent = "Apps";
  checkSite.textContent = "Chech Site";
  searchInput.placeholder = "search Google";
  document.body.style.direction ="ltr";
  settingsPanel.style.direction = "ltr";
  taglainText.textContent ="Desion. Build. Evolve";
  // save languge
  localStorage.setItem("language", "english");
  languageMenu.style.display="none";
});

const savedLanguage = localStorage.getItem("language");
if (savedLanguage === "persian") {
  persianLanguage.click();
}

if (savedLanguage === "english") {
  englishLanguage.click();
}


// clear the google sreach box
searchInput.addEventListener("blur", (e)=>{
    searchInput.value = "";
})


// mouse movment
const background = document.querySelector(".animated-background");
const shapes = document.querySelectorAll(".shape");

document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    shapes.forEach((shape) => {
        shape.style.setProperty("--mouse-x", `${x}px`);
        shape.style.setProperty("--mouse-y", `${y}px`);
    });
});

const revealElements = document.querySelectorAll(
    ".section-heading, .tool-card"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const header = document.querySelector("header");

function updateHeaderHeight() {
    const headerHeight = header.offsetHeight;

    document.querySelector("main").style.paddingTop =
        `${headerHeight}px`;
}

updateHeaderHeight();

window.addEventListener("resize", updateHeaderHeight);
