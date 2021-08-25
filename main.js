const api = "https://corona.lmao.ninja/v2/countries?sort=country"

fetch(api)
    .then((respone) => {
        return respone.json()
    })
    .then((data) => {
        console.log("🚀 ~ file: main.js ~ line 6 ~ .then ~ data", data)
    })