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
