$(document).ready(function () {
  // Кнопка в шапке
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".nav--mobile--hidden")
      .classList.toggle("nav__mobile--visible");
    document.querySelector("body").classList.toggle("body-overflow-hidden");
  });

  // Like в рекомендация
  document.querySelectorAll(".icon-like").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.getAttribute("fill") === "#959EAD") {
        button.setAttribute("fill", "#DC143C");
      } else if (button.getAttribute("fill") === "#DC143C") {
        button.setAttribute("fill", "#959EAD");
      }
    });
  });

  // Like в video
  document.querySelectorAll(".video-like").forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.querySelector("path").getAttribute("fill") === "#1565D8") {
        button.querySelector("path").setAttribute("fill", "#DC143C");
      } else if (
        button.querySelector("path").getAttribute("fill") === "#DC143C"
      ) {
        button.querySelector("path").setAttribute("fill", "#1565D8");
      }
    });
  });

  // Modal Window
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(".modal__overlay").on("click", closeModal);
  document.addEventListener("keyup", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    if (event.key === "Escape" || event.type === "click") {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
    event.preventDefault();
  }

  $('input[type="tel"]').mask("+7 (000) 000-00-00");

  // Валидация
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        "phone-modal": {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        "name-modal": "Имя обязательно",
        "phone-modal": {
          required: "Телефон обязателен",
          minlength: jQuery.validator.format("Формат: +7 (999) 999-99-99"),
        },
        "email-modal": "Укажите почту! Формат: a@a",
        "email-subscribe": "Укажите почту! Формат: a@a",
      },
    });
  });

  // Слайдер Category
  const swiperCategory = new Swiper(".category-container", {
    // Optional parameters
    slidesPerView: "auto",
    slidesPerColumnFill: "row",

    // Navigation arrows
    navigation: {
      nextEl: ".category-button--next",
      prevEl: ".category-button--prev",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 25,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 29,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
    },
  });

  // Слайдер Неизданного
  const swiperUnreleased = new Swiper(".unreleased-container", {
    slidesPerView: "auto",

    // Navigation arrows
    navigation: {
      nextEl: ".unreleased-button--next",
      prevEl: ".unreleased-button--prev",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
    },
  });

  // Главное видео
  $(".video-play-button").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("main-player", {
      videoId: "87by1DjfxLw",
      events: {
        onReady: videoPlay,
      },
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
    event.target.setVolume(10);
  }

  // Видео 1
  $(".play-video-1").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-one", {
      videoId: "qJqHjDsfKP0",
      events: {
        onReady: videoPlay,
      },
    });
  });

  // Видео 2
  $(".play-video-2").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-two", {
      videoId: "87by1DjfxLw",
      events: {
        onReady: videoPlay,
      },
    });
  });

  // Видео 3
  $(".play-video-3").on("click", function onYouTubeIframeAPIReady() {
    player = new YT.Player("video-three", {
      videoId: "87by1DjfxLw",
      events: {
        onReady: videoPlay,
      },
    });
  });

  $('[data-btn="toTop"]').hide();

  // появление/затухание кнопки #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('[data-btn="toTop"]').fadeIn();
      } else {
        $('[data-btn="toTop"]').fadeOut();
      }
    });

    // при клике на ссылку плавно поднимаемся вверх
    $('[data-btn="toTop"]').click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });
  });
  $(function () {
    $(".nav-wrapper a").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate(
        { scrollTop: $(_href).offset().top + "px" },
        1500
      );
      return false;
    });
  });

});
