const PRICE_PER_KG = 235000;
const KG_PER_SACK = 25;
const MIN_QTY = 2;
const WHATSAPP = "989044575134";

const qty = document.getElementById("qty");
const total = document.getElementById("total");
const form = document.getElementById("orderForm");
const toast = document.getElementById("toast");

const faNumber = n => new Intl.NumberFormat("fa-IR").format(n);
const toman = n => `${faNumber(n)} تومان`;

function updateTotal(){
  let q = parseInt(qty.value || "2", 10);
  if(q < MIN_QTY) q = MIN_QTY;
  qty.value = q;
  const amount = q * KG_PER_SACK * PRICE_PER_KG;
  total.textContent = toman(amount);
}
qty.addEventListener("input", updateTotal);
updateTotal();

document.querySelectorAll(".copy").forEach(btn => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      toast.classList.add("show");
      setTimeout(()=>toast.classList.remove("show"), 1500);
    } catch(e) {
      alert("کپی خودکار انجام نشد؛ لطفاً شماره را دستی کپی کنید.");
    }
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const q = Math.max(MIN_QTY, parseInt(qty.value || "2", 10));
  const size = document.getElementById("size").value;
  const tracking = document.getElementById("tracking").value.trim() || "وارد نشده";
  const method = document.getElementById("paymentMethod").value === "card" ? "کارت به کارت" : "پرداخت آنلاین";
  const amount = q * KG_PER_SACK * PRICE_PER_KG;

  const message =
`سلام نئو پلاست 👋
می‌خواهم سفارش ثبت کنم.

👤 نام: ${name}
📞 تماس: ${phone}
📦 تعداد گونی: ${faNumber(q)}
📏 سایز: ${size}
⚖️ وزن هر گونی: ۲۵ کیلو
💰 قیمت هر کیلو: ۲۳۵,۰۰۰ تومان
💵 مبلغ کل: ${toman(amount)}
💳 روش پرداخت: ${method}
🔎 شماره پیگیری: ${tracking}

حداقل سفارش: ۲ گونی
`;
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});
document.querySelectorAll("#navMenu a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("navMenu").classList.remove("open");
}));
