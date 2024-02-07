const homeDropdown = document.getElementById("home__dropdown");
const featureDropdown = document.getElementById("feature__dropdown");
const formopen = document.getElementById("form-open");
const headersearch = document.getElementById("headersearch");
const quickview = document.getElementById("quickview");
const cartCount = document.getElementById("cart-count");
const quickviewCart = document.getElementById("quick-view-cart");
const cartInput = document.getElementById("cart-input");
const popularProduct = document.getElementById("popular-product");
const popularh1 = document.getElementById("popularh1");
const sellerh1 = document.getElementById("sellerh1");
const rateh1 = document.getElementById("rateh1");
const sellerProduct = document.getElementById("seller-product");
const ratedProduct = document.getElementById("rated-product");
const loginRegister = document.getElementById("login-register");
const showpassword = document.getElementById("showpassword");
const showpassword2 = document.getElementById("showpassword2");
const showpassword3 = document.getElementById("showpassword3");
const eye = document.getElementById("eye");
const registerForm = document.getElementById("registerForm");
const LoginForm = document.getElementById("LoginForm");
const registerRow = document.getElementById("register-row");

function showHomeDropdown() {
  homeDropdown.classList.remove("d-none");
  homeDropdown.classList.add("d-block");
}

function hideHomeDropdown() {
  homeDropdown.classList.remove("d-block");
  homeDropdown.classList.add("d-none");
}

function showFeatureDropdown() {
  featureDropdown.classList.remove("d-none");
  featureDropdown.classList.add("d-block");
}

function hideFeatureDropdown() {
  featureDropdown.classList.remove("d-block");
  featureDropdown.classList.add("d-none");
}

function formdblock() {
  formopen.classList.remove("d-none");
  formopen.classList.add("d-flex");
}

function formclose() {
  formopen.classList.remove("d-flex");
  formopen.classList.add("d-none");
}

function loginForm() {
  loginRegister.classList.remove("d-none");
  loginRegister.classList.add("d-block");
}

function passwordshow() {
  if (showpassword.type === "password") {
    showpassword.type = "text";
    eye.classList.remove("text-secondary");
    eye.classList.add("text-dark");
  } else {
    showpassword.type = "password";

    eye.classList.remove("text-dark");
    eye.classList.add("text-secondary");
  }
  if (showpassword2.type === "password") {
    showpassword2.type = "text";
    eye.classList.remove("text-secondary");
    eye.classList.add("text-dark");
  } else {
    showpassword2.type = "password";

    eye.classList.remove("text-dark");
    eye.classList.add("text-secondary");
  }
  if (showpassword3.type === "password") {
    showpassword3.type = "text";
    eye.classList.remove("text-secondary");
    eye.classList.add("text-dark");
  } else {
    showpassword3.type = "password";

    eye.classList.remove("text-dark");
    eye.classList.add("text-secondary");
  }
}

function openLogin() {
  if (LoginForm && registerForm) {
    LoginForm.classList.remove("d-none");
    LoginForm.classList.add("d-block");
    registerForm.classList.remove("d-block");
    registerForm.classList.add("d-none");
  }
}

function openRegister() {
  if (LoginForm && registerForm) {
    LoginForm.classList.remove("d-block");
    LoginForm.classList.add("d-none");
    registerForm.classList.remove("d-none");
    registerForm.classList.add("d-block");
  }
}

function viewRemove() {
  quickview.classList.remove("d-block");
  quickview.classList.add("d-none");
  loginRegister.classList.remove("d-block");
  loginRegister.classList.add("d-none");
}

function view() {
  quickview.classList.remove("d-none");
  quickview.classList.add("d-block");
}

function popular() {
  popularh1.classList.add("color");
  popularh1.classList.add("borderBottom");
  sellerh1.classList.remove("color");
  sellerh1.classList.remove("borderBottom");
  rateh1.classList.remove("color");
  rateh1.classList.remove("borderBottom");
  popularProduct.classList.remove("d-none");
  popularProduct.classList.add("d-block");
  sellerProduct.classList.remove("d-block");
  sellerProduct.classList.add("d-none");
  ratedProduct.classList.remove("d-block");
  ratedProduct.classList.add("d-none");
}
function bestseller() {
  popularh1.classList.remove("color");
  popularh1.classList.remove("borderBottom");
  sellerh1.classList.add("color");
  sellerh1.classList.add("borderBottom");
  rateh1.classList.remove("color");
  rateh1.classList.remove("borderBottom");
  popularProduct.classList.remove("d-block");
  popularProduct.classList.add("d-none");
  sellerProduct.classList.remove("d-none");
  sellerProduct.classList.add("d-block");
  ratedProduct.classList.remove("d-block");
  ratedProduct.classList.add("d-none");
}
function toprate() {
  popularh1.classList.remove("color");
  popularh1.classList.remove("borderBottom");
  sellerh1.classList.remove("color");
  sellerh1.classList.remove("borderBottom");
  rateh1.classList.add("color");
  rateh1.classList.add("borderBottom");
  popularProduct.classList.remove("d-block");
  popularProduct.classList.add("d-none");
  sellerProduct.classList.remove("d-block");
  sellerProduct.classList.add("d-none");
  ratedProduct.classList.remove("d-none");
  ratedProduct.classList.add("d-block");
}

function cartcheck() {
  const cartTodo = document.getElementById("cart-todo");
  const cartCount = document.getElementById("cart-count");
  const price = document.getElementById("price");

  if (cartTodo) {
    var numbercount = cartTodo.childElementCount;
    cartCount.innerHTML = `${numbercount}`;
  } else {
    console.error("Element with ID 'cart-todo' not found");
  }

  if (numbercount > 0 && price) {
    var priceCard = document.createElement("div");
    priceCard.innerHTML = `<div class="position-absolute bottom-0 w-100 h-25 bg-white" id="price-card-none">
      <div class="d-flex justify-content-between align-items-center text">
        <h5>Subtotal:</h5>
        <h5>$24.00</h5>
      </div>
      <button class="btn btn-outline w-100 mt-3">VIEW CART</button>
      <button class="btn shop-btn w-100 mt-3 fw-bold">CHECKOUT</button>
    </div>`;

    price.appendChild(priceCard);
  }
}

function addtocart() {
  const cartTodo = document.getElementById("cart-todo");
  const cartItem = document.createElement("div");
  cartItem.innerHTML = `<div class="d-flex align-items-center justify-content-between mt-3 ">
    <div class="d-flex w-25">
      <img src="assets/shop-3.webp" alt="" width="100%" class="rounded-4">
    </div>
    <div class="d-flex flex-column w-50 gap-2">
      <a href="#" class="nav-link m-0">Van Gogh Notebook</a>
      <p>1 × $24.00</p>
    </div>
    <div class="d-flex">
      <p class="cursor-pointer" onclick="removeitem()">Close</p>
    </div>
  </div>`;

  if (cartTodo) {
    cartTodo.appendChild(cartItem);
  }
  cartcheck();
}

function removeitem() {
  const cartTodo = document.getElementById("cart-todo");
  if (cartTodo) {
    cartTodo.removeChild(cartTodo.firstElementChild);
  }
  cartcheck();
}

function increaseValue() {
  let value = parseInt(cartInput.value);
  value++;
  cartInput.value = `${value}`;
}

function decreaseValue() {
  let value = parseInt(cartInput.value);
  if (value > 1) {
    value--;
    cartInput.value = `${value}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");
  const border = document.querySelector(".border");

  loginRegister.addEventListener("mouseover", function (e) {
    document.body.style.cursor = "none";

    cursor.classList.remove("d-none");
    cursor.classList.add("d-block");
  });

  loginRegister.addEventListener("mouseout", function (e) {
    cursor.classList.remove("d-block");
    cursor.classList.add("d-none");
    document.body.style.cursor = "auto";
  });
  registerRow.addEventListener("mouseover", function (e) {
    cursor.classList.remove("d-block");
    cursor.classList.add("d-none");
    document.body.style.cursor = "auto";
  });
  registerRow.addEventListener("mouseout", function (e) {
    document.body.style.cursor = "none";

    cursor.classList.remove("d-none");
    cursor.classList.add("d-block");
  });

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x - 8}px, ${y - 20}px)`;
  });

  const hoverElements = document.querySelectorAll("a, button, .custom-hover");

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
});
