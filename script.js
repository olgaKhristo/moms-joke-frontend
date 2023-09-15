const jokeElement = document.querySelector('#joke');

async function generateJoke() {
    try{
        const response = await fetch(`https://mom-joke-api-project1.onrender.com`)
        if(response.ok){
            const data = await response.json()
            addJoke(data.joke)
        }else{
            throw new Error('Something went wrong')
        }
    }catch(err){
        console.error(err)
    }
}

function addJoke(joke){
   const jokeElement = document.querySelector('#joke')
   if(jokeElement){
       jokeElement.textContent = joke
   }else{
       console.error('No joke element found')
   }
}

async function createJoke(e){
   e.preventDefault()
   const data = {joke: e.target.joke.value}
   const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   }
   const responce = await fetch(`https://mom-joke-api-project1.onrender.com`, options)
    if(responce.status ==201){
        console.log('Joke added')
        e.target.name.value = ''
        alert('Joke added')
    }else{
        alert('Something went wrong')
    }
}

const form = document.querySelector('#create-form')
form.addEventListener('submit', createJoke)

const button = document.querySelector('#btn-randomise')
button.addEventListener('click', generateJoke)