document.addEventListener("DOMContentLoaded", function () {
    // Registro
    const registerBtn = document.querySelector("#registerBtn");
    if (registerBtn) {
      registerBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const firstName = document.querySelector("#inputFirstName").value.trim();
        const lastName = document.querySelector("#inputLastName").value.trim();
        const email = document.querySelector("#inputEmail").value.trim();
        const password = document.querySelector("#inputPassword").value.trim();
        const confirmPassword = document.querySelector("#inputPasswordConfirm").value.trim();
  
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
          alert("Completa todos los campos.");
          return;
        }
  
        if (password !== confirmPassword) {
          alert("Las contraseñas no coinciden.");
          return;
        }
  
        alert("Registro exitoso (demo)");
      });
    }
  
    // Login
    const loginBtn = document.querySelector("#loginBtn");
    if (loginBtn) {
      loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const email = document.querySelector("#inputEmail").value.trim();
        const password = document.querySelector("#inputPassword").value.trim();
  
        if (!email || !password) {
          alert("Completa todos los campos.");
          return;
        }
  
        alert("Inicio de sesión exitoso (demo)");
      });
    }
  
    // Recuperación de contraseña
    const resetBtn = document.querySelector("#resetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const email = document.querySelector("#inputEmail").value.trim();
  
        if (!email) {
          alert("Ingresa tu correo electrónico.");
          return;
        }
  
        alert("Enlace de recuperación enviado (demo)");
      });
    }
  });

  