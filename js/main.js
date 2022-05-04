document.querySelector('#getHero').addEventListener('click', getHero)
document.querySelector('#random').addEventListener('click', random)
const name = document.querySelector('#name')
const birthName = document.querySelector('#birthName')
const age = document.querySelector('#age')
const nationality = document.querySelector('#nationality')
const role = document.querySelector('#role')
const health = document.querySelector('#health')


async function getHero(){
    try {
        const choice = document.querySelector('#userSelection').value.toLowerCase()
        const response = await fetch('https://simple-overwatch-hero-api.herokuapp.com/api/characters/'+choice)
        const data = await response.json()
        name.innerText = data.name
        birthName.innerText = data.birthName
        age.innerText = data.age
        nationality.innerText = data.nationality
        role.innerText = data.role
        health.innerText = data.health
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

async function random(){
    try {
        const response = await fetch('https://simple-overwatch-hero-api.herokuapp.com/api/random')
        const data = await response.json()
        name.innerText = data.name
        birthName.innerText = data.birthName
        age.innerText = data.age
        nationality.innerText = data.nationality
        role.innerText = data.role
        health.innerText = data.health
    }
    catch(err){
        console.log(err)
    }
}