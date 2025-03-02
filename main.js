window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const circle = document.querySelector('.circle-of-the-section-one');
  circle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  const btn = document.getElementById("scrollBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.classList.add("show");
    btn.classList.remove("hide");
  } else {
    btn.classList.add("hide");
    setTimeout(function () {
      btn.classList.remove("show");
    }, 700);
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
