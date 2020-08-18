// Globals

// Tax bands
const PERSONAL_ALLOWANCE = 12500;
const BASIC_RATE = { VALUE: 37500, RATE: 0.2 };
const HIGHER_RATE = { VALUE: 150000, RATE: 0.4 };
const ADDITIONAL_RATE = { RATE: 0.45 };

// National Insurance thresholds
const NI_BASE = { VALUE: 9500, RATE: 0.12 };
const NI_UPPER = { VALUE: 50000, RATE: 0.02 };

let salary;

// Currency formatter.
let currency = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// Form event listener
document.getElementById('salary-form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('results').style.display = 'none';
  salary = document.getElementById('salary').value;

  if (!salary) {
    displayError();
    return;
  }

  if (document.getElementById(alert))
    document.getElementById('alert').outerHTML = '';
  document.getElementById('spinner').style.display = 'block';
  setTimeout(calculateResults, 1500);
}

// Calculate Results

function calculateResults() {
  document.getElementById('spinner').style.display = 'none';
  const personalTaxAllowance = getPersonalAllowance(salary);
  const tax = calculateTax(salary, personalTaxAllowance);
  const nationalInsurance = calculateNI(salary);

  let totalIncome = [];
  let totalTaxableIncome = [];
  let totalTax = [];
  let totalNationalInsurance = [];
  let totalTakeHome = [];

  createArrays(totalIncome, salary);
  createArrays(totalTaxableIncome, salary - getPersonalAllowance(salary));
  createArrays(totalTax, tax.basicRate + tax.higherRate + tax.additionalRate);
  createArrays(
    totalNationalInsurance,
    nationalInsurance.basic + nationalInsurance.upper
  );
  createArrays(
    totalTakeHome,
    salary -
      nationalInsurance.basic -
      nationalInsurance.upper -
      tax.basicRate -
      tax.higherRate -
      tax.additionalRate
  );

  updateDOM(document.getElementById('gross-income').children, totalIncome);
  updateDOM(
    document.getElementById('taxable-income').children,
    totalTaxableIncome
  );
  updateDOM(document.getElementById('tax').children, totalTax);
  updateDOM(
    document.getElementById('national-insurance').children,
    totalNationalInsurance
  );
  updateDOM(document.getElementById('take-home').children, totalTakeHome);

  document.getElementById('results').style.display = 'block';
}

// Determine tax free personal allowance
function getPersonalAllowance(grossSalary) {
  if (grossSalary < PERSONAL_ALLOWANCE) return Number(grossSalary);
  if (grossSalary <= 100000) return PERSONAL_ALLOWANCE;

  //   Personal allowance decreases by £1 for each £2 earned
  //   above £100,000 until it reaches zero
  if (grossSalary <= 125000) {
    const decrease = Math.floor((grossSalary - 100000) / 2);

    return Number(PERSONAL_ALLOWANCE - decrease);
  }
  //   no personal allowance for salart over £125,000
  return 0;
}

function calculateTax(salary, personalAllowance) {
  const tax = {
    basicRate: null,
    higherRate: null,
    additionalRate: null,
  };

  tax.basicRate = Math.max(
    (Math.min(salary, BASIC_RATE.VALUE + PERSONAL_ALLOWANCE) -
      PERSONAL_ALLOWANCE) *
      BASIC_RATE.RATE,
    0
  );

  tax.higherRate = Math.max(
    (Math.min(salary, HIGHER_RATE.VALUE) -
      BASIC_RATE.VALUE -
      personalAllowance) *
      HIGHER_RATE.RATE,
    0
  );

  tax.additionalRate =
    salary > HIGHER_RATE.VALUE
      ? (salary - HIGHER_RATE.VALUE) * ADDITIONAL_RATE.RATE
      : 0;

  return tax;
}

function calculateNI(salary) {
  const nationalInsurance = {
    basic: null,
    upper: null,
  };
  nationalInsurance.basic = Math.max(
    (Math.min(salary, NI_UPPER.VALUE) - NI_BASE.VALUE) * NI_BASE.RATE,
    0
  );
  nationalInsurance.upper =
    salary > NI_UPPER.VALUE ? (salary - NI_UPPER.VALUE) * NI_UPPER.RATE : 0;

  return nationalInsurance;
}

// Create arrays to contain yearly, monthly, weekly and daily totals
function createArrays(array, value) {
  array.push(currency.format(value));
  array.push(currency.format(value / 12));
  array.push(currency.format(value / 52));
  array.push(currency.format(value / 260));
}

// Update DOM table elements

function updateDOM(element, array) {
  for (let i = 1; i < array.length + 1; i++) {
    element[i].textContent = array[i - 1];
  }
}

// Show error if no value entered

function displayError() {
  const alert = document.createElement('div');
  alert.className = 'alert alert-danger py-1 mt-2';
  alert.id = 'alert';
  alert.appendChild(document.createTextNode('Please enter a salary'));
  document.querySelector('div.form-group').appendChild(alert);
  setTimeout(removeError, 3000);
}

function removeError() {
  document.getElementById('alert').outerHTML = '';
}
