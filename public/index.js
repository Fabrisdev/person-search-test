const searchButton = document.querySelector('#search-button')
const fullnameInput = document.querySelector('#fullname-input')
import { changeInformationTo, alertError } from "./info-changer.js"

searchButton.addEventListener('click', async () => {
    const fullname = fullnameInput.value
    const response = await fetch(`/api/persona?fullname=${fullname}`)
    if(response.status === 400) return alertError('Solo se admiten nombres completos.')
    if(response.status === 404) return alertError('Persona no encontrada.')
    const personFound = await response.json()
    changeInformationTo(personFound.fullname, personFound.biography, personFound.photo_url)
    
})

