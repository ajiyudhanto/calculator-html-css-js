document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display')
    let buttons = document.querySelectorAll('.buttons .button')
    let equalityButton = document.querySelector('.equality-container')
    let arrayOfButtons = Array.from(buttons)
    arrayOfButtons.push(equalityButton)
    let input = ''

    arrayOfButtons.map(button => button.addEventListener('click', function() {
        if (button.innerText === '=') {
            display.innerText = eval(input)
        } else if (button.innerText === ':') {
            display.innerText += ':'
            input += '/'
        } else if (button.innerText === 'x') {
            display.innerText += 'x'
            input += '*'
        } else if (button.innerText === '<-') {
            let arrayDisplay = display.innerText.split('')
            let arrayInput = input.split('')
            arrayDisplay.pop()
            arrayInput.pop()
            display.innerText = arrayDisplay.join('')
            input = arrayInput.join('')
        } else if (button.innerText === 'C') {
            display.innerText = ''
            input = ''
        } else {
            display.innerText += button.innerText
            input += button.innerText
        }
    }))

})