const api = "https://corona.lmao.ninja/v2/countries?sort=country"
const totalCases = document.querySelector('.cases')
const flagCountry = document.querySelector('.flag')
const totalDeaths = document.querySelector('.total-death')
const totalPopulation = document.querySelector('.total-population ')
const recovere = document.querySelector('.recovered')
const totalTests = document.querySelector('.total-tests')
const todayDeath = document.querySelector('.today-death')
const todayRecovere = document.querySelector('.today-recovered')
const todayCase = document.querySelector('.today-cases')
const currDate = document.querySelector('#currentDate')

function start() {

    // getCountry(data => {
    //     console.log("🚀 ~ file: main.js ~ line 6 ~ start ~ data", data)
    // })
    getCountry(render)
    getCurrentDate()
}
// function GET current date

function getCurrentDate() {
    let date = new Date()
    var parseDate = date.toLocaleString()
    currDate.innerHTML = parseDate
}


function render(data) {
    // console.log(data[5])
    const { cases, countryInfo, deaths, population, recovered, tests, todayCases, todayDeaths, todayRecovered } = data[5]
        // console.log("🚀 ~ file: main.js ~ line 34 ~ render ~ countryInfo", countryInfo)
    totalCases.innerText = cases.toLocaleString('en')
    flagCountry.style.backgroundImage = `url('${countryInfo.flag}')`
    totalDeaths.innerText = deaths.toLocaleString('en')
    totalPopulation.innerText = population.toLocaleString('en')
    recovere.innerText = recovered.toLocaleString('en')
    totalTests.innerText = tests.toLocaleString('en')
    todayCase.innerText = todayCases.toLocaleString('en')
    todayDeath.innerText = todayDeaths.toLocaleString('en')
    todayRecovere.innerText = todayRecovered.toLocaleString('en')

}

function getCountry(callback) {

    fetch(api)
        .then((respone) => {
            return respone.json()
        })
        .then(callback)
}
start()
    // const api = "https://corona.lmao.ninja/v2/jhucsse"

// fetch(api)
//     .then(respone => {
//         return respone.json()
//     })
//     .then(data => {
//         console.log(data)
//     })