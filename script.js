console.log('connected')

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[]
let input=document.getElementById('input')


fetch(endpoint).then(response=>{
response.json().then(res=>{
cities.push(...res)

console.log(cities)
})
}).catch(err=>{
    console.log(err)
})



function findMatches(text){
  let filtered=cities.filter(el=>{
        return el.city.toLowerCase().includes(text.toLowerCase()) || el.state.toLowerCase().includes(text.toLowerCase())
    })
    console.log(filtered)
    return filtered
}

function displayMatches(arr){


    const html=arr.map(el=>{
        return `
        <li>
        ${el.city}, ${el.state}
        </li>
        `
    }).join('')

    document.getElementsByTagName('ul')[0].innerHTML=html

}


input.addEventListener('keyup', (e)=>{
    let inputText=document.getElementsByTagName('input')[0].value
    console.log('hit', inputText)
    let matches=findMatches(inputText)
    displayMatches(matches)

})


