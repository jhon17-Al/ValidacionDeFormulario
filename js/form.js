import { REGEX_PATTERNS } from "../helpers/expresionesRegulares.js";
/* ----------------Switch between satrtup and logging---------------- */
document
  .getElementById("mostrar-inicio")
  .addEventListener("click", function () {
    document.getElementById("iniciar-sesion").classList.add("activo");
    document.getElementById("registrarse").classList.add("oculto");
    document.getElementById("registrarse").classList.remove("activo");
    document.getElementById("iniciar-sesion").classList.remove("oculto");
  });

document
  .getElementById("mostrar-registrar")
  .addEventListener("click", function () {
    document.getElementById("iniciar-sesion").classList.add("oculto");
    document.getElementById("registrarse").classList.add("activo");
    document.getElementById("iniciar-sesion").classList.remove("activo");
    document.getElementById("registrarse").classList.remove("oculto");
  });

/* ----------------confirm password---------------- */
const FORM = document.getElementById("form-logging");
const PASSWORD = document.getElementById("password-login");
const CONFIRM_PASSWORD = document.getElementById("confirm-password-login");

FORM.addEventListener("submit", function (event) {
  let valid = true;
  // Validar email
  const emailInput = document.getElementById("email-login");
  if (!REGEX_PATTERNS.email.test(emailInput.value)) {
    emailInput.classList.add("incorrecto");
    valid = false;
  }
  // Validar password
  if (!REGEX_PATTERNS.password.test(PASSWORD.value)) {
    PASSWORD.classList.add("incorrecto");
    valid = false;
  }
  // Validar confirmación de password
  if (PASSWORD.value !== CONFIRM_PASSWORD.value || !REGEX_PATTERNS.password.test(CONFIRM_PASSWORD.value)) {
    CONFIRM_PASSWORD.classList.add("incorrecto");
    valid = false;
  }
  // Validar nombre si existe
  const nameInput = document.getElementById("name-login");
  if (nameInput && !REGEX_PATTERNS.nombre.test(nameInput.value)) {
    nameInput.classList.add("incorrecto");
    valid = false;
  }
  if (!valid) {
    alert("Por favor, corrija los campos marcados antes de continuar.");
    event.preventDefault();
  }
});
/* ----------------show password---------------- */
const ShowPassword = document.getElementsByClassName("show-password");
let Icon = document.getElementsByClassName("icon-password");
Icon[0].addEventListener("click", function () {
  if (ShowPassword[0].type == "password") {
    ShowPassword[0].type = "text";
    Icon[0].src = "../img/iconform/open.png";
  } else {
    ShowPassword[0].type = "password";
    Icon[0].src = "../img/iconform/close.png";
  }
}),
  Icon[1].addEventListener("click", function () {
    if (ShowPassword[1].type == "password") {
      ShowPassword[1].type = "text";
      Icon[1].src = "../img/iconform/open.png";
    } else {
      ShowPassword[1].type = "password";
      Icon[1].src = "../img/iconform/close.png";
    }
  }),
  Icon[2].addEventListener("click", function () {
    if (ShowPassword[2].type == "password") {
      ShowPassword[2].type = "text";
      Icon[2].src = "../img/iconform/open.png";
    } else {
      ShowPassword[2].type = "password";
      Icon[2].src = "../img/iconform/close.png";
    }
  });

/* ----------------Validate Form---------------- */
let inputs = document.querySelectorAll("form input");
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    switch (e.target.name) {
      case "email-switch":
        if (REGEX_PATTERNS.email.test(e.target.value)) {
          document
            .getElementById("email-switch")
            .classList.remove("incorrecto");
          e.target.removeAttribute("title");
        } else {
          document.getElementById("email-switch").classList.add("incorrecto"),
            e.target.setAttribute(
              "title",
              "Dede ser un correo real: example@dominio.com"
            );
        }
        break;

      case "password-switch":
        if (REGEX_PATTERNS.password.test(e.target.value)) {
          document
            .getElementById("password-switch")
            .classList.remove("incorrecto");
          e.target.removeAttribute("title");
        } else {
          document
            .getElementById("password-switch")
            .classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe contener min 8 caracteneres, Mayusculas, minusculas y números (puede incluir caracteres especiales)"
          );
        }
        break;
      //--------------- registrarse--------------------
      case "name":
        if (REGEX_PATTERNS.nombre.test(e.target.value)) {
          document.getElementById("name-login").classList.remove("incorrecto");
          e.target.removeAttribute("title");
        } else {
          document.getElementById("name-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe tener entre 2 y 30 letras y no incluir números"
          );
        }
        break;

      case "email":
        if (REGEX_PATTERNS.nombre.test(e.target.value)) {
          document.getElementById("email-login").classList.remove("incorrecto");
          e.target.removeAttribute("title");
        } else {
          document.getElementById("email-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Dede ser un correo real: example@dominio.com"
          );
        }
        break;
      case "password-login":
        if (REGEX_PATTERNS.password.test(e.target.value)) {
          document
            .getElementById("password-login")
            .classList.remove("incorrecto");
          e.target.removeAttribute("title");
        } else {
          document.getElementById("password-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe contener min 8 caracteneres, Mayusculas, minusculas y números (puede incluir caracteres especiales)"
          );
        }
        break;
      case "confirm-password-login":
        if (REGEX_PATTERNS.password.test(e.target.value)) {
          document
            .getElementById("confirm-password-login")
            .classList.remove("incorrecto");
          e.target.removeAttribute("title");
        } else {
          document.getElementById("confirm-password-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe contener min 8 caracteneres, Mayusculas, minusculas y números (puede incluir caracteres especiales)"
          );
        }
        break;

      default:
        break;
    }
  });

  /* --------------remove .incorrecto when focus is lost-------------- */
  input.addEventListener("blur", (e) => {
    switch (e.target.name) {
      case "email-switch":
        document.getElementById("email-switch").classList.remove("incorrecto");
        e.target.removeAttribute("title");
        break;
      case "password-switch":
        document
          .getElementById("password-switch")
          .classList.remove("incorrecto");
        e.target.removeAttribute("title");
        break;
      //--------------- registrarse--------------------
      case "name":
        document.getElementById("name-login").classList.remove("incorrecto");
        e.target.removeAttribute("title");
        break;
      case "email-login":
        document.getElementById("email-login").classList.remove("incorrecto");
        e.target.removeAttribute("title");
        break;
      case "password-login":
        document.getElementById("password-login").classList.remove("incorrecto");
        e.target.removeAttribute("title");
        break;
      case "confim-password-login":
        document.getElementById("confim-password-login").classList.remove("incorrecto");
        e.target.removeAttribute("title");
        break;

      default:
        break;
    }
  });

  /* --------------add .incorrecto when focus is on-------------- */
  input.addEventListener("focus", (e) => {
    switch (e.target.name) {
      case "email-switch":
        if (!REGEX_PATTERNS.email.test(e.target.value)) {
          document.getElementById("email-switch").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe ser un correo real: example@example.com"
          );
        }
        break;
      case "password-switch":
        if (!REGEX_PATTERNS.password.test(e.target.value)) {
          document
            .getElementById("password-switch")
            .classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe contener min 8 caracteres, minusculas, mayusculas y números. Puede contener caracteres especiales"
          );
        }
        break;
      //--------------- registrarse--------------------
      case "name":
        if (!REGEX_PATTERNS.nombre.test(e.target.value)) {
          document.getElementById("name-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe tener entre 2 y 30 letras y no incluir números"
          );
        }
        break;
      case "email-login":
        if (!REGEX_PATTERNS.email.test(e.target.value)) {
          document.getElementById("email-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe ser un correo real: example@example.com"
          );
        }
        break;
      case "password-login":
        if (!REGEX_PATTERNS.password.test(e.target.value)) {
          document.getElementById("password-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe contener min 8 caracteres, minusculas, mayusculas y números. Puede contener caracteres especiales"
          );
        }
        break;
      case "confim-password-login":
        if (!REGEX_PATTERNS.password.test(e.target.value)) {
          document.getElementById("confim-password-login").classList.add("incorrecto");
          e.target.setAttribute(
            "title",
            "Debe contener min 8 caracteres, minusculas, mayusculas y números. Puede contener caracteres especiales"
          );
        }
        break;
      default:
        break;
    }
  });
});
