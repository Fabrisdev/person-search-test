const fullnameField = document.querySelector('#fullname-field')
const biographyField = document.querySelector('#biography-field')
const photoField = document.querySelector('#photo-field')

export function changeInformationTo(fullname, biography, photoUrl){
    fullnameField.textContent = fullname
    biographyField.textContent = biography
    photoField.src = photoUrl
}

export function alertError(message){
    fullnameField.textContent = message
    biographyField.textContent = "Revisa los campos para continuar.\n(El archivo personas.json contiene todos los nombres de las personas)"
    photoField.src = "/img/signo-de-interrogacion.png"
}