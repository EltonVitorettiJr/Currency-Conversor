const convertButton = document.querySelector(`.convert-button`)
const currencySelectFrom = document.querySelector(`.currency-select-from`)
const currencySelectTo = document.querySelector(`.currency-select-to`)

currencySelectFrom.value = `real`
currencySelectTo.value = `dollar`

async function changeCurrency() {
    
    const valueInput = document.querySelector(`.value-input`).value
    const convertValue = document.querySelector(`.convert-value`)
    const convertedValue = document.querySelector(`.converted-value`)
    const currencySelectedFrom = document.querySelector(`.currency-select-from`).value
    const currencySelectedTo = document.querySelector(`.currency-select-to`).value
    const logoConvertCurrency = document.querySelector(`.img-currency-covert`)
    const logoConvertedCurrency = document.querySelector(`.img-currency-converted`)
    const convertText = document.querySelector(`.convert-text`)
    const convertedText = document.querySelector(`.converted-text`)
    
    const data = await fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL`).then(response => response.json())
    
    const dollarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high

    if (currencySelectedFrom == `real`) {

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

            }).format(valueInput * dollarToday)
            
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

            }).format((valueInput * dollarToday) / euroToday)
    
            logoConvertedCurrency.src = `./assets/euro.png`
    
            convertedText.innerHTML = `Euro`
        }
    
        if (currencySelectedTo == `libra`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
                
                style: `currency`,
                currency: `GBP`

            }).format((valueInput * dollarToday) / libraToday)
    
            logoConvertedCurrency.src = `./assets/libra.png`
    
            convertedText.innerHTML = `British Pound`
        }
    
        if (currencySelectedTo == `bitcoin`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`en`, {
                
                style: `currency`,
                currency: `BTC`

            }).format((valueInput * dollarToday) / bitcoinToday)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    } else if (currencySelectedFrom == `euro`) {

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

            }).format(valueInput * euroToday)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                
                style: `currency`,
                currency: `USD`

            }).format((valueInput * euroToday) / dollarToday)
            
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

            }).format((valueInput * euroToday) / libraToday)
    
            logoConvertedCurrency.src = `./assets/libra.png`
    
            convertedText.innerHTML = `British Pound`
        }
    
        if (currencySelectedTo == `bitcoin`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`en`, {
                
                style: `currency`,
                currency: `BTC`

            }).format((valueInput * euroToday) / bitcoinToday)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    } else if (currencySelectedFrom == `libra`) {

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

            }).format(valueInput * libraToday)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                
                style: `currency`,
                currency: `USD`

            }).format((valueInput * libraToday) / dollarToday)
            
            logoConvertedCurrency.src = `./assets/estados-unidos.png`
    
            convertedText.innerHTML = `American Dollar`
        }
    
        if (currencySelectedTo == `euro`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
                
                style: `currency`,
                currency: `EUR`

            }).format((valueInput * libraToday) / euroToday)
    
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

            }).format((valueInput * libraToday) / bitcoinToday)
    
            logoConvertedCurrency.src = `./assets/bitcoin.png`
    
            convertedText.innerHTML = `Bitcoin`
        }
    } else if (currencySelectedFrom == `bitcoin`) {

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

            }).format(valueInput * bitcoinToday)
            
            logoConvertedCurrency.src = `./assets/brasil 2.png`
    
            convertedText.innerHTML = `Brazilian Real`
        }

        if (currencySelectedTo == `dollar`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`en-US`, {
                
                style: `currency`,
                currency: `USD`

            }).format((valueInput * bitcoinToday) / dollarToday)
            
            logoConvertedCurrency.src = `./assets/estados-unidos.png`
    
            convertedText.innerHTML = `American Dollar`
        }
    
        if (currencySelectedTo == `euro`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`de-DE`, {
                
                style: `currency`,
                currency: `EUR`

            }).format((valueInput * bitcoinToday) / euroToday)
    
            logoConvertedCurrency.src = `./assets/euro.png`
    
            convertedText.innerHTML = `Euro`
        }
    
        if (currencySelectedTo == `libra`) {
            
            convertedValue.innerHTML = new Intl.NumberFormat(`en-GB`, {
                
                style: `currency`,
                currency: `GBP`

            }).format((valueInput * bitcoinToday) / libraToday)
    
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