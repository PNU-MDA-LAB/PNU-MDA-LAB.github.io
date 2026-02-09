// 슬라이더 기능
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  // 범위 체크
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  // 모든 슬라이드 숨기기
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // 모든 도트 비활성화
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  // 현재 슬라이드 표시
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

function moveSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
  showSlide(index);
}

// 자동 슬라이드 (5초마다)
if (slides.length > 0) {
  setInterval(() => {
    moveSlide(1);
  }, 5000);
}

// 모바일 네비게이션 토글
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// 모바일 드롭다운 메뉴 토글
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  if (toggle) {
    toggle.addEventListener('click', function(e) {
      // 모바일에서만 토글 동작 (768px 이하)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('open');
        // 다른 드롭다운 닫기
        dropdowns.forEach(other => {
          if (other !== dropdown) other.classList.remove('open');
        });
      }
    });
  }
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
