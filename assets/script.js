const buttons = document.querySelectorAll(".colors .color");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

  });
});

const storageButtons = document.querySelectorAll(".storage button");

storageButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    storageButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

  });
});



document.querySelectorAll('.wishlist i').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('fa-regular'); // trái tim rỗng
    el.classList.toggle('fa-solid');   // trái tim đặc
    el.parentElement.classList.toggle('active'); // đổi màu hồng
  });
});