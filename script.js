const PRICE_PER_KG = 235000;
const KG_PER_SACK = 25;
const MIN_QTY = 2;
const WHATSAPP = "989044575134";

const form = document.getElementById("orderForm");
const totalEl = document.getElementById("total");
const totalQtyEl = document.getElementById("totalQty");
const totalWeightEl = document.getElementById("totalWeight");
const toast = document.getElementById("toast");

const faNumber = n => new Intl.NumberFormat("fa-IR").format(n);
const toman = n => `${faNumber(n)} تومان`;

function getQuantities() {
  return [...document.querySelectorAll(".size-qty")].map(input => ({
    size: input.dataset.size,
    qty: Math.max(0, parseInt(input.value || "0", 10))
  }));
}

function updateTotal() {
  const items = getQuantities();
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const amount = totalQty * KG_PER_SACK * PRICE_PER_KG;
  totalQtyEl.textContent = `${faNumber(totalQty)} گونی`;
  totalWeightEl.textContent = `${faNumber(totalQty * KG_PER_SACK)} کیلو`;
  totalEl.textContent = toman(amount);
  document.getElementById("minOrderMessage").style.display = totalQty < MIN_QTY ? "block" : "none";
  return {items, totalQty, amount};
}

document.querySelectorAll(".size-qty").forEach(input => input.addEventListener("input", updateTotal));
updateTotal();

document.querySelectorAll(".copy").forEach(btn => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1500);
    } catch(e) {
      alert("کپی خودکار انجام نشد؛ لطفاً شماره را دستی کپی کنید.");
    }
  });
});

document.querySelectorAll(".size-card").forEach(card => {
  card.addEventListener("click", () => {
    const target = document.querySelector(`.size-qty[data-size="${card.dataset.size}"]`);
    if (target) {
      if (parseInt(target.value || "0", 10) < 1) target.value = 1;
      updateTotal();
      document.getElementById("order").scrollIntoView({behavior:"smooth", block:"start"});
      target.focus();
    }
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const tracking = document.getElementById("tracking").value.trim() || "وارد نشده";
  const method = document.getElementById("paymentMethod").value === "card" ? "کارت به کارت" : "پرداخت آنلاین";
  const {items, totalQty, amount} = updateTotal();

  if (totalQty < MIN_QTY) {
    document.getElementById("minOrderMessage").style.display = "block";
    alert("حداقل سفارش ۲ گونی است. می‌توانید این ۲ گونی را از یک یا چند سایز مختلف انتخاب کنید.");
    return;
  }

  const selected = items.filter(item => item.qty > 0);
  const sizeLines = selected.map(item => `📏 سایز ${item.size}: ${faNumber(item.qty)} گونی`).join("\n");

  const message =
`سلام نئو پلاست 👋
می‌خواهم سفارش ثبت کنم.

👤 نام: ${name}
📞 تماس: ${phone}

📦 جزئیات سفارش:
${sizeLines}

📦 تعداد کل: ${faNumber(totalQty)} گونی
⚖️ وزن کل: ${faNumber(totalQty * KG_PER_SACK)} کیلو
💰 قیمت هر کیلو: ۲۳۵,۰۰۰ تومان
💵 مبلغ کل: ${toman(amount)}
💳 روش پرداخت: ${method}
🔎 شماره پیگیری: ${tracking}

حداقل سفارش: ۲ گونی`;

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});
document.querySelectorAll("#navMenu a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("navMenu").classList.remove("open");
}));
