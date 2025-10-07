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

// Highlight heart-icon
document.querySelectorAll('.wishlist i').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('fa-regular'); // trái tim rỗng
    el.classList.toggle('fa-solid');   // trái tim đặc
    el.parentElement.classList.toggle('active'); // đổi màu hồng
  });
});


function changeImage(element) {
  // Lấy thẻ ảnh chính
  const mainImg = document.querySelector('.main-images img');
  
  // Lấy đường dẫn ảnh của thumbnail vừa click
  const newSrc = element.getAttribute('src');
  
  // Đổi ảnh chính thành ảnh đó
  mainImg.setAttribute('src', newSrc);
  
  // Hiệu ứng khi đổi ảnh
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.setAttribute('src', newSrc);
    mainImg.style.opacity = 1;
  }, 150);

  // Xóa viền các ảnh khác
  const thumbs = document.querySelectorAll('.thumbs img');
  thumbs.forEach(img => img.classList.remove('active-thumb'));

  // Thêm viền cho ảnh được chọn
  element.classList.add('active-thumb');
}