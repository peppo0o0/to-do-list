
export function validateName(name) {
  if(name.trim()) return 'The field is required'
  return (
    /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name) ||
    alert("You have entered an invalid name!")
  );
}

export function validateEmail(email) {
  return (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
    alert("You have entered an invalid email address!")
  );
}

export function validatePassword(password) {
  return (
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      password
    ) ||
    alert(
      "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
    )
  );
}
