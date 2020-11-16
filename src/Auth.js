export function isValidPassword(pwd) {
  return pwd.length >= 8;
}

//matches a username with invalid characters
const notAUsernameRegex = /[^a-z\d]/i;

export function isValidUsername(username) {
  return !notAUsernameRegex.test(username);
}
