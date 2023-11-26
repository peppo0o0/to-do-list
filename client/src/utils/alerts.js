import Swal from "sweetalert2";

export async function registrationAlert() {
  const registrationAlert = await Swal.fire({
    icon: "success",
    title: "Registration completed!",
    customClass: "swal-settings",
  });
  return registrationAlert;
}

export async function loginEmptyFieldsAlert() {
  const emptyFields = await Swal.fire({
    icon: "warning",
    title: "Fulfill all empty fields in order to enter...",
    customClass: "swal-settings",
  });
  return emptyFields;
}

export async function loginInvalidInformation(error) {
  const invalidInformation = await Swal.fire({
    icon: "warning",
    title: `Error: ${error}`,
    customClass: "swal-settings",
  });
  return invalidInformation;
}
