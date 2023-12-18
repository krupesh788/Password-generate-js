function generatePassword() {
  const passwordLength = document.getElementById("passwordLength").value;
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeLowercase = document.getElementById('includeLowercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;
  const includeCurrency = document.getElementById('includeCurrency').checked;

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+=<>?';
  const currencyChars = '€£$¥';

  let allChars = '';
  let password = '';

  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;
  if (includeCurrency) allChars += currencyChars;

  for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
  }

  document.getElementById('passwordOutput').innerHTML = password;
  console.log(password);
}

