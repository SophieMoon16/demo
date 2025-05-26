function init() {
  // Récupère le thème sauvegardé ou définit Light par défaut
  let themeSauvegarde = localStorage.getItem("Theme");
  if (themeSauvegarde === null) {
    themeSauvegarde = "Light";
  }

  // Met à jour l'affichage et le bouton
  theme(themeSauvegarde);
  let bouton = document.getElementById("button-theme");
  bouton.innerHTML = themeSauvegarde;
}

function toggle() {
  let button_theme = document.getElementById("button-theme");
  let button_text = button_theme.innerHTML;
  let neww;
  if (button_text === "Dark") {
    button_theme.innerHTML = "Light";
    neww = "Light";
  } else {
    button_theme.innerHTML = "Dark";
    neww = "Dark";
  }
  theme(neww);
  localStorage.setItem("Theme", neww);
}
function theme(neww) {
  if (neww === "Dark") {
    document.getElementById("navigation").style.backgroundColor = "black";
    document.body.style.backgroundColor = "black";
    let a = document.querySelectorAll("a");
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "white";
    }
    document.body.style.color = "white";
    document.getElementById("footer").style.backgroundColor = "black";
  } else {
    document.getElementById("navigation").style.backgroundColor = "#faf3f0";
    let a = document.querySelectorAll("a");
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "black";
    }
    document.getElementById("footer").style.backgroundColor = "#faf3f0";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
let nav = [
  {
    url: "index.html",
    page: "Home",
  },
  {
    url: "about.html",
    page: "About",
  },

  {
    url: "portfolio.html",
    page: "Portfolio",
  },

  {
    url: "contact.html",
    page: "Contact",
  },
];

function navigation() {
  nav.forEach((n) => {
    let a = document.createElement("a");
    a.setAttribute("href", n.url);
    let ul = document.getElementById("nav");
    ul.appendChild(a);
    let li = document.createElement("li");
    li.textContent = n.page;
    a.appendChild(li);
  });
}

document.getElementById("form").addEventListener("submit", check);
let isValid = true;
function check(event) {
  let name = document.getElementById("name").value;
  let nameError = document.getElementById("nameError");
  if (name === "" || name.length <= 2) {
    nameError.style.display = "inline"; // j'affiche le message d'erreur)
    isValid = false;
  } else {
    nameError.style.display = "none";
  }
  let email = document.getElementById("mail").value;
  let emailError = document.getElementById("mailError");
  // Expression régulière pour valider le format email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "" || !emailPattern.test(email)) {
    emailError.style.display = "inline";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  let tel = document.getElementById("tel").value;
  let telError = document.getElementById("telError");
  const telPattern = /^[0-9]{10}$/;
  if (tel === "" || !telPattern.test(tel)) {
    telError.style.display = "inline";
    isValid = false;
  } else {
    telError.style.display = "none";
  }

  let text = document.getElementById("textarea").value;
  let textError = document.getElementById("textError");
  if (text === "") {
    textError.style.display = "inline";
    isValid = false;
  } else {
    textError.style.display = "none";
  }

  if (!isValid) {
    event.preventDefault();
  }
}
