// Мобильное меню бургер
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
	  if (!menu.classList.contains('active')) {
		 menu.classList.add('active')
		 burger.classList.add('active-burger')
		 body.classList.add('locked')
	  } else {
		 menu.classList.remove('active')
		 burger.classList.remove('active-burger')
		 body.classList.remove('locked')
	  }
	})
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
	  if (window.innerWidth > 991.98) {
		 menu.classList.remove('active')
		 burger.classList.remove('active-burger')
		 body.classList.remove('locked')
	  }
	})
 }
 burgerMenu()
 



$(function(){
	$('.header__slider-container').slick({
		infinite: false,
		prevArrow: '<button type="button" class="slider-btn slider-btn__header-left"><svg class="slider__icon-arrow" width="12" height="24"> <use xlink: href="../../images/sprite.svg#icon-arrow_left"></use><span class="sr-only"> Предыдущий слайд</span></svg></button>',
		nextArrow: '<button type="button" class="slider-btn slider-btn__header-right"><svg class="slider__icon-arrow" width="12" height="24"> <use xlink: href="../../images/sprite.svg#icon-arrow_right"></use><span class="sr-only"> Следующий слайд</span></svg></button>',
		
		responsive: [{
			  breakpoint: 769,
			  settings: {
				arrows: false,
				autoplay: true,
				autoplaySpeed: 4000,
			  }
			},
		]
	});
	
	$('.select-brand').styler();
});

$(function () {
	$('.filter-btn, .filter-btn-close').on('click', function () {
		$('.header__filters-inner').toggleClass('header__filters-inner--active');
	});

});