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
    console.log(data[5])
    const { cases, countryInfo, deaths, population, recovered, tests, todayCases, todayDeaths, todayRecovered } = data[5]
    totalCases.innerText = cases
        // flagCountry.style.backgroundImage = `url('${countryInfo}')`;
    totalDeaths.innerText = deaths
    totalPopulation.innerText = population
    recovere.innerText = recovered
    totalTests.innerText = tests
    todayCase.innerText = todayCases
    todayDeath.innerText = todayDeaths
    todayRecovere.innerText = todayRecovered

}

function getCountry(callback) {

    fetch(api)
        .then((respone) => {
            return respone.json()
        })
        .then(callback)
}
start()