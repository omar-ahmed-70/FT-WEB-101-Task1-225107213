// الوصول إلى زر تبديل الوضع عن طريق الـ id
const themeButton = document.getElementById("theme-toggle");

// الاستماع لحدث الضغط على الزر
themeButton.addEventListener("click", function () {
  // إضافة أو إزالة كلاس dark من عنصر body
  document.body.classList.toggle("dark");
});