const convertButton = document.querySelector(`.convert-button`)
const currencySelectTo = document.querySelector(`.currency-select-to`)

function changeCurrency() {
    const valueInput = document.querySelector(`.value-input`).value
    const convertValue = document.querySelector(`.convert-value`)
    const convertedValue = document.querySelector(`.converted-value`)
    const currencySelectedTo = document.querySelector(`.currency-select-to`).value
    const logoConvertedCurrency = document.querySelector(`.img-currency-converted`)
    const convertedText = document.querySelector(`.converted-text`)
    const dollarToday = 5.81
    const euroToday = 6.21

    convertValue.innerHTML = new Intl.NumberFormat(`pt-br`, {
        style: `currency`,
        currency: `BRL`
    }).format(valueInput)

    if (currencySelectedTo == `dollar`) {
        convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
            style: `currency`,
            currency: `USD`
        }).format(valueInput / dollarToday)
        
        logoConvertedCurrency.src = `./assets/estados-unidos.png`

        convertedText.innerHTML = `Dollar`
    }

    if (currencySelectedTo == `euro`) {
        convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
            style: `currency`,
            currency: `EUR`
        }).format(valueInput / euroToday)

        logoConvertedCurrency.src = `./assets/euro.png`

        convertedText.innerHTML = `Euro`
    }
}

currencySelectTo.addEventListener(`change`, changeCurrency)

convertButton.addEventListener(`click`, changeCurrency)