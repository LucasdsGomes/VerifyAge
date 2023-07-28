let birthdateInput = document.getElementById('birthdate');
let genderF = document.getElementById('female');
let genderO = document.getElementById('other');
let genderM = document.getElementById('male');
let submitButton = document.getElementById('sub');
let res = document.getElementById('res'); 
let resultadoTitulo = document.getElementById('resultadoTitulo'); // Get the title element
let img = document.getElementById('foto'); // Get the existing image element

// Image URLs for different age and gender categories
let imgMeninoURL = 'imgs/crianca.png';
let imgMeninaURL = 'imgs/menina.png';
let imgJovemURL = 'imgs/jovem.png';
let imgJovemGURL = 'imgs/jovemG.png';
let imgAdultoURL = 'imgs/adulto.png';
let imgAdultaURL = 'imgs/adulta.png';
let imgIdosoURL = 'imgs/idoso.png';
let imgIdosaURL = 'imgs/idosa.png';

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); 

  let birthYear = new Date(birthdateInput.value).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  if (genderM.checked && birthYear < currentYear && birthdateInput.value.length > 0) {
    if (age >= 0 && age < 10){
      resultadoTitulo.innerHTML = `Você é um menino do gênero masculino com ${age} anos`;
      img.setAttribute('src', imgMeninoURL);
    } else if (age < 21) {
      resultadoTitulo.innerHTML = `Você é um jovem do gênero masculino com ${age} anos`;
      img.setAttribute('src', imgJovemURL);
    } else if (age < 50) {
      resultadoTitulo.innerHTML = `Você é um adulto do gênero masculino com ${age} anos`;
      img.setAttribute('src', imgAdultoURL);
    } else {
      resultadoTitulo.innerHTML = `Você é um idoso do gênero masculino com ${age} anos`;
      img.setAttribute('src', imgIdosoURL);
    }
  } else if (genderF.checked && birthYear < currentYear && birthdateInput.value.length > 0) {
    if (age >= 0 && age < 10){
      resultadoTitulo.innerHTML = `Você é uma menina do gênero feminino com ${age} anos`;
      img.setAttribute('src', imgMeninaURL);
    } else if (age < 21) {
      resultadoTitulo.innerHTML = `Você é uma jovem do gênero feminino com ${age} anos`;
      img.setAttribute('src', imgJovemGURL);
    } else if (age < 50) {
      resultadoTitulo.innerHTML = `Você é uma adulta do gênero feminino com ${age} anos`;
      img.setAttribute('src', imgAdultaURL);
    } else {
      resultadoTitulo.innerHTML = `Você é uma idosa do gênero feminino com ${age} anos`;
      img.setAttribute('src', imgIdosaURL);
    }
  } else if (genderO.checked && birthYear < currentYear && birthdateInput.value.length > 0) {
    resultadoTitulo.innerHTML = `Você escolheu não opinar! Vejo que você tem ${age} anos!`;
    // Remove the image when "other" gender is selected
    img.removeAttribute('src');
  } else {
    alert(`As credenciais estão incorretas. Verifique novamente.`);
    // Remove the image when the credentials are incorrect
    img.removeAttribute('src');
  }
});
