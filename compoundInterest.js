// add event handler to form submit
document.getElementById("calculator-form").addEventListener("submit", handleSubmit);


// event handler for form submit
function handleSubmit(e) {
    e.preventDefault();

    // clear old results
    removeTable();
    
    // get the values of all the form fields
    let initialBalance = document.getElementById("initial-balance").value;
    let interestRate = document.getElementById("interest-rate").value;
    let calculationPeriod = document.getElementById("calculation-period").value;

    // check for errors in values
    if(checkValuesInRange(initialBalance, interestRate, calculationPeriod)){
        let results = calculateInterest(initialBalance, interestRate, calculationPeriod);
        document.getElementById("spinner").style.visibility = "visible";
        setTimeout(displayResults, 1500, results);
        console.log(results);
    }
    
}

// checks there are no errored values in the input form
function checkValuesInRange(initBal, intRate, calcPeriod){
    if(!initBal || !intRate || !calcPeriod){
        displayError();
        return false;
    }

    if(initBal < 0 || intRate < 0 || calcPeriod < 0){
        displayError();
        return false;
    }

    return true;
}

// calculates compound interest, returns a table of results
function calculateInterest(initBal, intRate, calcPeriod){
    let table = {
        year: [],
        yearInterest: [],
        totalInterest: [],
        balance: []
    };

    // pushing first year (no calculations needed)
    table.year.push(0);
    table.yearInterest.push(0);
    table.totalInterest.push(0);
    table.balance.push(initBal);

    // calculates the balance, total interest and yearly interest rounded to 2 d.p.
    for(let i=1;i<=calcPeriod;i++){
        table.year.push(i);
        table.balance.push(Math.round(100*(initBal * Math.pow((1 + (intRate/100)), i)))/100);
        table.totalInterest.push(Math.round(100*(table.balance[i] - initBal))/100);
        table.yearInterest.push(Math.round(100*(table.totalInterest[i] - table.totalInterest[i-1]))/100);
    }

    return table;
}

// displays the results on the webpage
function displayResults(results){

    document.getElementById("spinner").style.visibility = "hidden";
    for(let i=0;i<results.year.length;i++){
        const row = document.createElement("tr");
        const cols = [];
        for(let j=0;j<4;j++){
            cols.push(document.createElement("td"));
        }
        
        cols[0].appendChild(document.createTextNode(`${results.year[i]}`));
        cols[1].appendChild(document.createTextNode(`£${results.yearInterest[i]}`));
        cols[2].appendChild(document.createTextNode(`£${results.totalInterest[i]}`));
        cols[3].appendChild(document.createTextNode(`£${results.balance[i]}`));

        for(let k=0;k<cols.length;k++){
            row.appendChild(cols[k]);
        }
        document.querySelector("table").style.visibility = "visible";
        document.querySelector("tbody").appendChild(row);
    }

}

// shows an error below the form for 3 seconds
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

// removes the body the HTML table and replaces it with a blank one.
function removeTable() {
    document.querySelector("tbody").parentNode.removeChild(document.querySelector("tbody"));

    const newTable = document.createElement("tbody");

    newTable.style = "text-align: center;";

    document.querySelector("table").appendChild(newTable);

    document.querySelector("table").style.visibility = "hidden";
}