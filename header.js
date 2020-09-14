class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav
      class="navbar navbar-sm navbar-expand-sm navbar-dark bg-dark"
"
    >
      <a class="navbar-brand" href="/">
        <h3>Calculate.This</h3>
      </a>  
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown03"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Calculators</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdown03">
              <a class="dropdown-item" href="takehomesalary.html">Take Home Pay</a>
              <a class="dropdown-item" href="compoundinterest.html">Compound Interest</a>
              <a class="dropdown-item" href="unitconverter.html">Unit Converters</a>
              <a class="dropdown-item" href="bugdet.html">Bugdet Calculator</a>
              <a class="dropdown-item" href="#">Your Calculator Here....</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
          `;
  }
}

customElements.define('main-header', Header);
