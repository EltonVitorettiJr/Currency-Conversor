const convertButton = document.querySelector(`.convert-button`)
const currencySelectFrom = document.querySelector(`.currency-select-from`)
const currencySelectTo = document.querySelector(`.currency-select-to`)

currencySelectFrom.value = `real`
currencySelectTo.value = `dollar`

function changeCurrency() {
    const valueInput = document.querySelector(`.value-input`).value
    const convertValue = document.querySelector(`.convert-value`)
    const convertedValue = document.querySelector(`.converted-value`)
    const currencySelectedFrom = document.querySelector(`.currency-select-from`).value
    const currencySelectedTo = document.querySelector(`.currency-select-to`).value
    const logoConvertCurrency = document.querySelector(`.img-currency-covert`)
    const logoConvertedCurrency = document.querySelector(`.img-currency-converted`)
    const convertText = document.querySelector(`.convert-text`)
    const convertedText = document.querySelector(`.converted-text`)
    

    if (currencySelectedFrom == `real`) {

        const dollarToday = 5.81
        const euroToday = 6.21
        const libraToday = 7.14
        const bitcoinToday = 523560.21

        logoConvertCurrency.src = `assets/brasil 2.png`

        convertText.innerHTML = `Brazilian Real`

        convertValue.innerHTML = new Intl.NumberFormat(`pt-br`, {
            style: `currency`,
            currency: `BRL`
        }).format(valueInput)

        if (currencySelectedTo == `real`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`pt-br`, {
                style: `currency`,
                currency: `BRL`
            }).format(valueInput)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                style: `currency`,
                currency: `USD`
            }).format(valueInput / dollarToday)
            
            logoConvertedCurrency.src = `./assets/estados-unidos.png`
    
            convertedText.innerHTML = `American Dollar`
        }
    
        if (currencySelectedTo == `euro`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
                style: `currency`,
                currency: `EUR`
            }).format(valueInput / euroToday)
    
            logoConvertedCurrency.src = `./assets/euro.png`
    
            convertedText.innerHTML = `Euro`
        }
    
        if (currencySelectedTo == `libra`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
                style: `currency`,
                currency: `GBP`
            }).format(valueInput / libraToday)
    
            logoConvertedCurrency.src = `./assets/libra.png`
    
            convertedText.innerHTML = `British Pound`
        }
    
        if (currencySelectedTo == `bitcoin`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en`, {
                style: `currency`,
                currency: `BTC`
            }).format(valueInput / bitcoinToday)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    } else if (currencySelectedFrom == `dollar`) {
        
        const realToday = 0.172
        const euroToday = 1.14
        const libraToday = 1.33
        const bitcoinToday = 90061.94

        logoConvertCurrency.src = `assets/estados-unidos.png`

        convertText.innerHTML = `American Dollar`

        convertValue.innerHTML = new Intl.NumberFormat(`en-US`, {
            style: `currency`,
            currency: `USD`
        }).format(valueInput)

        if (currencySelectedTo == `real`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`pt-br`, {
                style: `currency`,
                currency: `BRL`
            }).format(valueInput / realToday)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                style: `currency`,
                currency: `USD`
            }).format(valueInput)
            
            logoConvertedCurrency.src = `./assets/estados-unidos.png`
    
            convertedText.innerHTML = `American Dollar`
        }
    
        if (currencySelectedTo == `euro`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
                style: `currency`,
                currency: `EUR`
            }).format(valueInput / euroToday)
    
            logoConvertedCurrency.src = `./assets/euro.png`
    
            convertedText.innerHTML = `Euro`
        }
    
        if (currencySelectedTo == `libra`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
                style: `currency`,
                currency: `GBP`
            }).format(valueInput / libraToday)
    
            logoConvertedCurrency.src = `./assets/libra.png`
    
            convertedText.innerHTML = `British Pound`
        }
    
        if (currencySelectedTo == `bitcoin`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en`, {
                style: `currency`,
                currency: `BTC`
            }).format(valueInput / bitcoinToday)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    } else if (currencySelectedFrom == `euro`) {
        
        const realToday = 0.161
        const dollarToday = 0.88
        const libraToday = 1.17
        const bitcoinToday = 84260.85

        logoConvertCurrency.src = `assets/euro.png`

        convertText.innerHTML = `Euro`

        convertValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
            style: `currency`,
            currency: `EUR`
        }).format(valueInput)

        if (currencySelectedTo == `real`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`pt-br`, {
                style: `currency`,
                currency: `BRL`
            }).format(valueInput / realToday)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                style: `currency`,
                currency: `USD`
            }).format(valueInput / dollarToday)
            
            logoConvertedCurrency.src = `./assets/estados-unidos.png`
    
            convertedText.innerHTML = `American Dollar`
        }
    
        if (currencySelectedTo == `euro`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
                style: `currency`,
                currency: `EUR`
            }).format(valueInput)
    
            logoConvertedCurrency.src = `./assets/euro.png`
    
            convertedText.innerHTML = `Euro`
        }
    
        if (currencySelectedTo == `libra`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
                style: `currency`,
                currency: `GBP`
            }).format(valueInput / libraToday)
    
            logoConvertedCurrency.src = `./assets/libra.png`
    
            convertedText.innerHTML = `British Pound`
        }
    
        if (currencySelectedTo == `bitcoin`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en`, {
                style: `currency`,
                currency: `BTC`
            }).format(valueInput / bitcoinToday)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    } else if (currencySelectedFrom == `libra`) {
        
        const realToday = 0.142
        const dollarToday = 0.75
        const euroToday = 0.86
        const bitcoinToday = 72373.42

        logoConvertCurrency.src = `assets/libra.png`

        convertText.innerHTML = `Libra`

        convertValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
            style: `currency`,
            currency: `GBP`
        }).format(valueInput)

        if (currencySelectedTo == `real`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`pt-br`, {
                style: `currency`,
                currency: `BRL`
            }).format(valueInput / realToday)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                style: `currency`,
                currency: `USD`
            }).format(valueInput / dollarToday)
            
            logoConvertedCurrency.src = `./assets/estados-unidos.png`
    
            convertedText.innerHTML = `American Dollar`
        }
    
        if (currencySelectedTo == `euro`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
                style: `currency`,
                currency: `EUR`
            }).format(valueInput / euroToday)
    
            logoConvertedCurrency.src = `./assets/euro.png`
    
            convertedText.innerHTML = `Euro`
        }
    
        if (currencySelectedTo == `libra`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
                style: `currency`,
                currency: `GBP`
            }).format(valueInput)
    
            logoConvertedCurrency.src = `./assets/libra.png`
    
            convertedText.innerHTML = `British Pound`
        }
    
        if (currencySelectedTo == `bitcoin`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en`, {
                style: `currency`,
                currency: `BTC`
            }).format(valueInput / bitcoinToday)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    } else if (currencySelectedFrom == `bitcoin`) {
        
        const realToday = 0.00000191
        const dollarToday = 0.0000110
        const euroToday = 0.0000118
        const libraToday = 0.0000138

        logoConvertCurrency.src = `assets/bitcoin.png`

        convertText.innerHTML = `Bitcoin`

        convertValue.innerHTML = new Intl.NumberFormat(`en`, {
            style: `currency`,
            currency: `BTC`
        }).format(valueInput)

        if (currencySelectedTo == `real`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`pt-br`, {
                style: `currency`,
                currency: `BRL`
            }).format(valueInput / realToday)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                style: `currency`,
                currency: `USD`
            }).format(valueInput / dollarToday)
            
            logoConvertedCurrency.src = `./assets/estados-unidos.png`
    
            convertedText.innerHTML = `American Dollar`
        }
    
        if (currencySelectedTo == `euro`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
                style: `currency`,
                currency: `EUR`
            }).format(valueInput / euroToday)
    
            logoConvertedCurrency.src = `./assets/euro.png`
    
            convertedText.innerHTML = `Euro`
        }
    
        if (currencySelectedTo == `libra`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
                style: `currency`,
                currency: `GBP`
            }).format(valueInput / libraToday)
    
            logoConvertedCurrency.src = `./assets/libra.png`
    
            convertedText.innerHTML = `British Pound`
        }
    
        if (currencySelectedTo == `bitcoin`) {
            convertedValue.innerHTML = new Intl.NumberFormat(`en`, {
                style: `currency`,
                currency: `BTC`
            }).format(valueInput)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    }
}

currencySelectFrom.addEventListener(`change`, changeCurrency)

currencySelectTo.addEventListener(`change`, changeCurrency)

convertButton.addEventListener(`click`, changeCurrency)