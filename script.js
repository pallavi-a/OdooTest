function showValue(event) {
    let inputField = document.getElementById('input-field');
    inputField.appendChild(document.createTextNode(event.target.innerHTML));
    console.log(event.target.innerHTML);
}

function generateRandom() {
    fetch('https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new')
        .then(response => response.json())
        .then(data => {
            document.getElementById('input-field').innerHTML = data
            console.log(data)
        });
}

function countdown() {
    let currentValue = document.getElementById('input-field').innerHTML;
    if (currentValue == '') {
        document.getElementById('input-field').innerHTML = "Happy Birthday!"
        return
    }
    current = parseInt(currentValue)
    let counter = setInterval(() => {

        current -= 1
        document.getElementById('input-field').innerHTML = current
        if (current === 0) {
            clearInterval(counter)
            document.getElementById('input-field').innerHTML = "Happy Birthday!"
        }
    }, 1)

}