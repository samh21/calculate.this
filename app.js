class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav
      class="navbar navbar-sm navbar-expand-sm navbar-dark bg-dark"
"
    >
      <a class="navbar-brand" href="/">
        <h3>Calculator Utilities</h3>
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
              <a class="dropdown-item" href="#">Your Calculator Here....</a>
              <a class="dropdown-item" href="#">Your Calculator Here....</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
          `;
  }
}

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <!-- Footer -->
  <footer class="page-footer font-small blue pt-4">
  
    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">
  
      <!-- Grid row -->
      <div class="row">
  
        <!-- Grid column -->
        <div class="col-md-6 mt-md-0 mt-3">
  
          <!-- Content -->
          <h5 class="text-uppercase">Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
  
        </div>
        <!-- Grid column -->
  
        <hr class="clearfix w-100 d-md-none pb-3">
  
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
  
          <!-- Links -->
          <h5 class="text-uppercase">Links</h5>
  
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
  
          <!-- Links -->
          <h5 class="text-uppercase">Links</h5>
  
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
  
        </div>
        <!-- Grid column -->
  
      </div>
      <!-- Grid row -->
  
    </div>
    <!-- Footer Links -->
  
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  
  </footer>
  <!-- Footer -->
  
        `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
