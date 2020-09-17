/* 

  Author ---  Samuel Torimiro   ---
  Github  ----  Samuel-2626    ----
  Language ----  JavaScript(ES6)   ---
  Purpose  ----    Budget Calculator  ---
  
*/

// Initialize variables containers

let totalIncomeContainer = document.querySelector('#total-income-container')
let totalExpenseContainer = document.querySelector('#total-expense-container')
let totalIncomeText = document.querySelector('#total-income-text')
let button = document.querySelector('button')
let ul = document.querySelector('ul')
document.querySelector('#expense-tracker').style.display = 'none'
document.querySelector('.print-table').style.display = 'none'

// Check if Button is clicked to change income

totalIncomeText.addEventListener('keyup', () => {
  let income = parseFloat(totalIncomeText.value)
  totalIncomeContainer.innerText = income.toFixed(2)
  if(document.querySelector('#total-income-container').innerText === 'NaN') {
    totalIncomeContainer.innerText = 0
  }
    let budgetLeft = document.querySelector('#bugdet-left')
    let result = document.querySelector('#result')
    budgetLeft.innerText =  (document.querySelector('#total-income-container').innerText - document.querySelector('#total-expense-container').innerText).toFixed(2)
    if (budgetLeft.innerText < 0) {
      budgetLeft.style.color = 'red'
      result.innerText = ' (deficit)'
    } else if(budgetLeft.innerText > 0) {
      budgetLeft.style.color = 'green'
      result.innerText = ' (surplus)'
    } else {
      budgetLeft.style.color = 'grey'
      result.innerText = ' (even)'
    }
})

// Set focus on income text field as soon as page loads

totalIncomeText.focus()


// Listen to input change and update the required field 

document.querySelector('.ul-expense').addEventListener('keyup', (e) => {
  let total = parseFloat(document.querySelector('#total-expense-container').innerText)
  if(e.target.className === 'total-expense-text') {
    total = 0
    // if(e.target.value.length == 12) {
    //   alert('Your text string is too long for this field \n It\'s is adviced you shorting it')
    // }
    let inputItems = document.querySelectorAll('input')
    inputItems.forEach(items => {
      if (items.value.length != 0) {
        if (items.className === 'total-expense-text') {
          total += parseFloat(items.value)
        }
      }
      
    })
  }
  document.querySelector('#total-expense-container').innerText = total.toFixed(2)
  let budgetLeft = document.querySelector('#bugdet-left')
    let result = document.querySelector('#result')
    budgetLeft.innerText =  (document.querySelector('#total-income-container').innerText - document.querySelector('#total-expense-container').innerText).toFixed(2)
    if (budgetLeft.innerText < 0) {
      budgetLeft.style.color = 'red'
      result.innerText = ' (deficit)'
    } else if(budgetLeft.innerText > 0) {
      budgetLeft.style.color = 'green'
      result.innerText = ' (surplus)'
    } else {
      budgetLeft.style.color = 'grey'
      result.innerText = ' (even)'
    }

})



// Remove expense onclick

document.querySelector('.ul-expense').addEventListener('click', (e) => {
  let total = parseFloat(document.querySelector('#total-expense-container').innerText)
  if(e.target.className === 'span-expense-text') {
  
    let c = confirm(`Are you sure you want to delete \n ${e.target.innerText}`)
    if (c == true) {
      document.querySelector('.ul-expense').removeChild(e.target.parentElement)
    }
  
    total = 0
    let inputItems = document.querySelectorAll('input')
    inputItems.forEach(items => {
      if (items.value.length != 0) {
        if (items.className === 'total-expense-text') {
          total += parseFloat(items.value)
        }
      }
      
    })

  }

  document.querySelector('#total-expense-container').innerText = total.toFixed(2)
  let budgetLeft = document.querySelector('#bugdet-left')
    let result = document.querySelector('#result')
    budgetLeft.innerText =  (document.querySelector('#total-income-container').innerText - document.querySelector('#total-expense-container').innerText).toFixed(2)
    if (budgetLeft.innerText < 0) {
      budgetLeft.style.color = 'red'
      result.innerText = ' (deficit)'
    } else if(budgetLeft.innerText > 0) {
      budgetLeft.style.color = 'green'
      result.innerText = ' (surplus)'
    } else {
      budgetLeft.style.color = 'grey'
      result.innerText = ' (even)'
    }
})

// Check if Button is clicked to add an expense
let addExpense = document.querySelector('#add-expense')
addExpense.addEventListener('click', function()  {
  let text = document.querySelector('#data-text')
  let number = document.querySelector('#data-number')
  let li = document.createElement('li')
  let span = document.createElement('span')
  let input = document.createElement('input')
  li.className = 'expense-box'
  span.innerHTML = '- '
  span.innerHTML += text.value
  span.innerHTML += ': '
  span.style.color = 'crimson'
  span.style.fontWeight = 'bold'
  span.className = 'span-expense-text'
  input.innerHTML = number.value
  input.type = 'number'
  input.className = 'total-expense-text'
  
  if (text.value !== '' && number.value !== '' && number.value !== 'NaN')
  {
    let ul = document.querySelector('.ul-expense')
    input.value = number.value
    li.appendChild(span)
    li.appendChild(input)
    ul.appendChild(li)
    let showExpense = document.querySelector('#show-expense')
    showExpense.appendChild(ul)
    text.value = ''
    number.value = ''
    let expense =  parseFloat(document.querySelector('#total-expense-container').innerText)
    expense += parseFloat(input.value)  
    expense = expense.toFixed(2)
    document.querySelector('#total-expense-container').innerText = expense

    let budgetLeft = document.querySelector('#bugdet-left')
    let result = document.querySelector('#result')
    budgetLeft.innerText =  (document.querySelector('#total-income-container').innerText - document.querySelector('#total-expense-container').innerText).toFixed(2)
    if (budgetLeft.innerText < 0) {
      budgetLeft.style.color = 'red'
      result.innerText = ' (deficit)'
    } else if(budgetLeft.innerText > 0) {
      budgetLeft.style.color = 'green'
      result.innerText = ' (surplus)'
    } else {
      budgetLeft.style.color = 'grey'
      result.innerText = ' (even)'
    }


    // Alert user to click on expenses to delete

    document.querySelector('#expense-tracker').style.display = 'block'

    let tracker = document.querySelector('#expense-tracker')

    setInterval(() => {
      if (tracker.style.color != 'red')
      {
        tracker.style.color = 'red'
      }else {
        tracker.style.color = 'rosybrown'
      }
    }, 1000);

    setTimeout(() => {
      tracker.style.display = 'none'
    }, 6000);

   

  }
 

})

// Generate table
let generateTable = document.querySelector('#generate-table')
let showTable = document.querySelector('#show-table')
generateTable.addEventListener('click', () => {
  let income = document.querySelector('#total-income-container')
  let expenses = document.querySelector('#total-expense-container')
  table = document.createElement('table')
  showTable.className = 'table-responsive'
  table.className = 'table '
  table.className += 'table-dark '
  table.className += 'table-hover '
  table.className += 'table-bordered'
  thead = document.createElement('thead')
  tr1 = document.createElement('tr')
  th1 = document.createElement('th')
  th2 = document.createElement('th')
  th3 = document.createElement('th')
  tbody = document.createElement('tbody')
  caption = document.createElement('p')
  caption.className = 'text-muted'
  caption.innerHTML = "Bugdet Details"
  th1.innerText = 'Details'
  th2.innerText = 'Expenses'
  th3.innerText = 'Income'
  th1.className = 'center-align'
  th2.className = 'center-align'
  th3.className = 'center-align'
  tr1.appendChild(th1)
  tr1.appendChild(th2)
  tr1.appendChild(th3)
  thead.appendChild(tr1)
  td5 = document.createElement('td')
  td6 = document.createElement('td')
  td6.innerText = '- Income'
  td7 = document.createElement('td')
  td7.innerText = '-'
  td7.className = 'center-align'
  td5.innerText = income.innerText
  td5.className = 'right-align'
  tr5 = document.createElement('tr')
  tr5.appendChild(td6)
  tr5.appendChild(td7)
  tr5.appendChild(td5)
  tbody.appendChild(tr5)
  let li = document.querySelectorAll('.expense-box')
    li.forEach(items => {
      [x, v] = items.children;
      td3 = document.createElement('td')
      td3.innerText = x.innerText
      td4 = document.createElement('td')
      td4.innerText = v.value
      td4.innerText += '.00'
      td4.className = 'right-align'
      td8 = document.createElement('td')
      td8.innerText = '-'
      td8.className = 'center-align'
      trs = document.createElement('tr')
      trs.appendChild(td3)
      trs.appendChild(td4)
      trs.appendChild(td8)
      tbody.appendChild(trs)
      
    })
  while(showTable.hasChildNodes()) {
    showTable.removeChild(showTable.firstChild)
  }
  
  showTable.appendChild(caption)
  table.appendChild(thead)
  table.appendChild(tbody)

  // Append total row
  td9 = document.createElement('td')
  td9.innerText = '- Total'
  td10 = document.createElement('td')
  td10.innerText = expenses.innerText
  td10.className = 'right-align'
  td11 = document.createElement('td')
  td11.innerText = income.innerText
  td11.className = 'right-align'
  tr6 = document.createElement('tr')
  tr6.className = 'total-text'
  tr6.appendChild(td9)
  tr6.appendChild(td10)
  tr6.appendChild(td11)
  tbody.appendChild(tr6)

  // Append summary row

  td12 = document.createElement('td')
  td13 = document.createElement('td')
  
  td13.className = 'right-align'
  td14 = document.createElement('td')
  td14.className = 'right-align'
  tr15 = document.createElement('tr')
 
  if ((document.querySelector('#result').innerText) == ' (even)' || (document.querySelector('#result').innerText) == '') {
    td12.innerText = 'Break-even'
    td13.innerText = '0.00'
    td14.innerText = '0.00'
    tr15.style.color = 'black'
  } else if((document.querySelector('#result').innerText) == ' (surplus)') {
    td12.innerText = 'Surplus'
    td13.innerText = document.querySelector('#bugdet-left').innerText
    td14.innerText = '0.00'
    tr15.style.color = 'limegreen'
  } else {
    td12.innerText = 'Deficit'
    td13.innerText = '0.00'
    td14.innerText = document.querySelector('#bugdet-left').innerText
    tr15.style.color = 'crimson'
  }

  
  tr15.appendChild(td12)
  tr15.appendChild(td13)
  tr15.appendChild(td14)
  tbody.appendChild(tr15)

  showTable.appendChild(table)
  // p = document.createElement('p')
  // p.innerText = 'Print Details'
  // p.className = 'print-table '
  // p.className += 'btn '
  // p.className += 'btn-secondary'
  // showTable.appendChild(p)
  document.querySelector('.print-table').style.display = 'inline-block'

  
})

print = document.querySelector('.print-table')
print.addEventListener('click', () => {
  let tableToPrint = document.getElementById("show-table")
  newWin = window.open("")
  newWin.document.write(tableToPrint.outerHTML)
  newWin.print()
  newWin.close()
})
  
