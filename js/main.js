const swiper = new Swiper('.feedback-swiper', {
    loop: true, // Lặp vô hạn các slide
    speed: 600, // Tốc độ trượt mượt mà
    
    // Cấu hình custom 2 nút bấm điều hướng bên ngoài theo ý bạn
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });
