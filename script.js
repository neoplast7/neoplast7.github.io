const translations = {
  fa: {
    navHome:"خانه",
    navProducts:"محصولات",
    navAbout:"درباره ما",
    navContact:"تماس با ما",

    heroTitle:"نایلون دسته‌دار شفاف<br><strong>در سایزهای کوچک تا بزرگ</strong>",
    heroText:"ارائه نایلون‌های دسته‌دار شفاف برای فروشگاه‌ها، بسته‌بندی و مصارف مختلف.",

    contactBtn:"ارتباط با ما",
    productBtn:"مشاهده محصول",

    productLabel:"محصول",
    productTitle:"نایلون دسته‌دار شفاف",
    productIntro:"از سایز کوچک تا بزرگ، مناسب بسته‌بندی و حمل محصولات.",

    bagTitle:"نایلون دسته‌دار شفاف",
    bagText:"شفاف، سبک و مناسب استفاده فروشگاهی و بسته‌بندی.",

    small:"سایز کوچک",
    medium:"سایز متوسط",
    large:"سایز بزرگ",

    clear:"شفاف",
    clearText:"نمایش بهتر محصول داخل بسته",

    handle:"دسته‌دار",
    handleText:"استفاده راحت برای حمل",

    sizes:"تنوع سایز",
    sizesText:"از کوچک تا بزرگ",

    aboutLabel:"درباره Neo PLAST",
    aboutTitle:"راهکاری ساده برای بسته‌بندی روزمره",
    aboutText:"Neo PLAST در زمینه نایلون دسته‌دار شفاف فعالیت می‌کند و محصول را در سایزهای مختلف ارائه می‌دهد.",

    contactLabel:"تماس",
    contactTitle:"برای سفارش و اطلاعات بیشتر",
    contactText:"از راه‌های زیر با Neo PLAST در ارتباط باشید.",

    phoneLabel:"شماره تماس",
    emailLabel:"ایمیل",

    footerText:"نایلون دسته‌دار شفاف | سایزهای کوچک تا بزرگ",
    copyright:"© 2026 Neo PLAST — تمامی حقوق محفوظ است.",

    bagAlt:"نایلون دسته‌دار شفاف Neo PLAST"
  },

  ar: {
    navHome:"الرئيسية",
    navProducts:"المنتجات",
    navAbout:"من نحن",
    navContact:"اتصل بنا",

    heroTitle:"أكياس نايلون شفافة بمقبض<br><strong>بأحجام من الصغيرة إلى الكبيرة</strong>",
    heroText:"نوفر أكياس نايلون شفافة بمقبض للمحلات والتغليف والاستخدامات المختلفة.",

    contactBtn:"تواصل معنا",
    productBtn:"مشاهدة المنتج",

    productLabel:"المنتج",
    productTitle:"كيس نايلون شفاف بمقبض",
    productIntro:"من الحجم الصغير إلى الكبير، مناسب للتغليف وحمل المنتجات.",

    bagTitle:"كيس نايلون شفاف بمقبض",
    bagText:"شفاف وخفيف ومناسب للمحلات والتغليف.",

    small:"حجم صغير",
    medium:"حجم متوسط",
    large:"حجم كبير",

    clear:"شفاف",
    clearText:"رؤية أفضل للمنتج داخل الكيس",

    handle:"بمقبض",
    handleText:"سهل ومريح للحمل",

    sizes:"أحجام متعددة",
    sizesText:"من الصغير إلى الكبير",

    aboutLabel:"عن Neo PLAST",
    aboutTitle:"حل بسيط للتغليف اليومي",
    aboutText:"تعمل Neo PLAST في مجال أكياس النايلون الشفافة ذات المقابض، مع توفير أحجام مختلفة.",

    contactLabel:"اتصال",
    contactTitle:"للطلب والاستفسار",
    contactText:"يمكنكم التواصل مع Neo PLAST عبر الطرق التالية.",

    phoneLabel:"رقم الهاتف",
    emailLabel:"البريد الإلكتروني",

    footerText:"أكياس نايلون شفافة بمقبض | أحجام من الصغيرة إلى الكبيرة",
    copyright:"© 2026 Neo PLAST — جميع الحقوق محفوظة.",

    bagAlt:"كيس نايلون شفاف بمقبض من Neo PLAST"
  },

  en: {
    navHome:"Home",
    navProducts:"Products",
    navAbout:"About Us",
    navContact:"Contact",

    heroTitle:"Clear Handle Plastic Bags<br><strong>From small to large sizes</strong>",
    heroText:"Clear handle plastic bags for shops, packaging and everyday uses.",

    contactBtn:"Contact Us",
    productBtn:"View Product",

    productLabel:"Product",
    productTitle:"Clear Handle Plastic Bag",
    productIntro:"Available from small to large sizes, suitable for packaging and carrying products.",

    bagTitle:"Clear Handle Plastic Bag",
    bagText:"Clear, lightweight and suitable for retail and packaging.",

    small:"Small size",
    medium:"Medium size",
    large:"Large size",

    clear:"Clear",
    clearText:"Better visibility of the product inside",

    handle:"Handle bag",
    handleText:"Easy and comfortable to carry",

    sizes:"Multiple sizes",
    sizesText:"From small to large",

    aboutLabel:"About Neo PLAST",
    aboutTitle:"A simple solution for everyday packaging",
    aboutText:"Neo PLAST provides clear handle plastic bags in a range of sizes for different packaging needs.",

    contactLabel:"Contact",
    contactTitle:"For orders and more information",
    contactText:"Get in touch with Neo PLAST through the options below.",

    phoneLabel:"Phone",
    emailLabel:"Email",

    footerText:"Clear handle plastic bags | Small to large sizes",
    copyright:"© 2026 Neo PLAST — All rights reserved.",

    bagAlt:"Neo PLAST clear handle plastic bag"
  }
};


function setLanguage(lang) {

  const t = translations[lang] || translations.fa;

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "en" ? "ltr" : "rtl";


  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key = el.dataset.i18n;

    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }

  });


  document.querySelectorAll("[data-i18n-alt]").forEach(el => {

    const key = el.dataset.i18nAlt;

    if (t[key] !== undefined) {
      el.alt = t[key];
    }

  });


  document.querySelectorAll("[data-lang]").forEach(btn => {

    btn.classList.toggle(
      "active",
      btn.dataset.lang === lang
    );

  });


  localStorage.setItem(
    "neoplast-language",
    lang
  );
}


document.querySelectorAll("[data-lang]").forEach(btn => {

  btn.addEventListener("click", () => {

    setLanguage(btn.dataset.lang);

  });

});


const savedLanguage =
  localStorage.getItem("neoplast-language") || "fa";

setLanguage(savedLanguage);
// ===============================
// Neo PLAST - Shopping Cart
// ===============================

let cart = JSON.parse(localStorage.getItem("neoPlastCart")) || [];
let selectedSize = "";

// انتخاب سایز
function selectSize(size) {
  selectedSize = size;

  // رفتن به بخش سفارش
  const orderBox = document.getElementById("orderBox");

  if (orderBox) {
    orderBox.scrollIntoView({
      behavior: "smooth"
    });
  }

  const selectedText = document.getElementById("selectedSize");

  if (selectedText) {
    selectedText.textContent = "سایز انتخاب شده: " + size;
  }
}


// افزودن محصول به سبد
function addToCart() {

  if (!selectedSize) {
    alert("لطفاً ابتدا یک سایز انتخاب کنید.");
    return;
  }

  const quantityInput =
    document.getElementById("quantity");

  const quantity =
    parseInt(quantityInput?.value) || 1;

  const existing =
    cart.find(item => item.size === selectedSize);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      name: "نایلون دسته‌دار شفاف",
      size: selectedSize,
      quantity: quantity
    });
  }

  saveCart();

  renderCart();

  alert("محصول به سبد خرید اضافه شد.");

  const cartBox =
    document.getElementById("cart");

  if (cartBox) {
    cartBox.scrollIntoView({
      behavior: "smooth"
    });
  }
}


// ذخیره سبد خرید
function saveCart() {

  localStorage.setItem(
    "neoPlastCart",
    JSON.stringify(cart)
  );

}


// نمایش سبد خرید
function renderCart() {

  const cartItems =
    document.getElementById("cartItems");

  const cartCount =
    document.getElementById("cartCount");

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML =
      "<p>سبد خرید شما خالی است.</p>";

    if (cartCount) {
      cartCount.textContent = "0";
    }

    return;
  }


  let total = 0;

  cartItems.innerHTML = "";


  cart.forEach((item, index) => {

    total += item.quantity;

    const div =
      document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <br>
        <span>سایز: ${item.size}</span>
      </div>

      <div class="cart-controls">

        <button onclick="changeQuantity(${index}, -1)">
          −
        </button>

        <span>${item.quantity}</span>

        <button onclick="changeQuantity(${index}, 1)">
          +
        </button>

      </div>

      <button
        class="remove-cart"
        onclick="removeFromCart(${index})">
        حذف
      </button>
    `;

    cartItems.appendChild(div);

  });


  if (cartCount) {
    cartCount.textContent = total;
  }

}


// کم و زیاد کردن تعداد
function changeQuantity(index, amount) {

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();

  renderCart();

}


// حذف محصول
function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();

  renderCart();

}


// خالی کردن سبد
function clearCart() {

  cart = [];

  saveCart();

  renderCart();

}


// نمایش سبد هنگام باز شدن سایت
document.addEventListener(
  "DOMContentLoaded",
  function() {
    renderCart();
  }
);
