import Swal from "sweetalert2";
import "../assets/css/main.css";

export function validateSignup(name, email, password) {
  let nameValidation = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const notifications = [];

  if (!nameValidation.test(name)) {
    notifications.push("Invalid name");
  }

  if (!emailValidation.test(email)) {
    notifications.push("Invalid email");
  }

  if (!passwordValidation.test(password)) {
    notifications.push("Invalid Password: Minimum eight characters, at least one letter and one number");
  }

  if (notifications.length > 0) {
    Swal.fire({
      icon: "warning",
      title: "Registration denied",
      html: notifications.join("<br><br>"),
      customClass: "swal-settings",
    });
  }

  return notifications;
}
