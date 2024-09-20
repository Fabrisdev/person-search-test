import { readFileSync } from 'node:fs'

const personsFile = readFileSync('personas.json', 'utf8')

interface Person {
    fullname: string
    biography: string
    photo_url: string
}

const personsData: Person[] = JSON.parse(personsFile)

export function findPersonByFullName(fullname: string){
    return personsData.find(person => {
        const [currentPersonName, currentPersonLastname] = person.fullname.toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").split(' ')
        const [personName, personLastname] = fullname.toLocaleLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").split(' ')
        if(personLastname === undefined) return personName === currentPersonName || personName === currentPersonLastname
        return currentPersonName === personName || currentPersonLastname === personLastname
    })
}