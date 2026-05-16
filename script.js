function showSection(id) {
  let sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Language Toggle
let isEnglish = true;

function toggleLang() {
  if (isEnglish) {
    document.getElementById("title").innerText = "फिटनेस प्रोग्राम";
    document.getElementById("homeText").innerText = "आपले स्वागत आहे";
  } else {
    document.getElementById("title").innerText = "Fitness Programs";
    document.getElementById("homeText").innerText = "Welcome to Fitness Platform";
  }
  isEnglish = !isEnglish;
}

// Contact Form
function submitForm(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Message Sent Successfully!";
}