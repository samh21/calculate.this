document.getElementById("distance").addEventListener("change", handleSubmit);
document.getElementById("fuel-price").addEventListener("change", handleSubmit);
document.getElementById("vehicle-mpg").addEventListener("change", handleSubmit);
document.getElementById("calculator-form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    let distance = document.getElementById("distance").value
    let fuelPrice = document.getElementById("fuel-price").value;
    let vehicleMpg = document.getElementById("vehicle-mpg").value;

    calculate(distance, fuelPrice, vehicleMpg)

    function calculate(dist, price, mpg) {
        let result

        let litresNeeded = (dist / mpg) * 4.546
        let pence = litresNeeded * price
        result = pence / 100

        const formArray = [dist, price, mpg]
        let formComplete = formArray.every(element => element)

        const costElmt = document.getElementById("result")
        costElmt.innerHTML = !formComplete ? "" : `<hr /><h3>£ <span class='badge badge-secondary'>${result.toFixed(2)}</span></h3><hr />`

    }
}

function displayError() {
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger py-1 mt-2';
    alert.id = 'alert';
    alert.appendChild(document.createTextNode('Please fill in all fields correctly.'));
    document.querySelector('div.form-group').appendChild(alert);
    setTimeout(removeError, 3000);
}

function removeError() {
    document.getElementById('alert').outerHTML = '';
}
