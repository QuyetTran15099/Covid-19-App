const api = "https://corona.lmao.ninja/v2/countries?sort=country"
const h1Element = document.querySelector('h1')

function start() {

    // getCountry(data => {
    //     console.log("🚀 ~ file: main.js ~ line 6 ~ start ~ data", data)
    // })
    getCountry(render)
}

function render(data) {
    // console.log(data[5])
    const { cases, countryInfo, deaths, population, recovered, tests, todayCases, todayDeaths, todayRecovered } = data[5]
    h1Element.innerText = cases
}

function getCountry(callback) {

    fetch(api)
        .then((respone) => {
            return respone.json()
        })
        .then(callback)
}
start()