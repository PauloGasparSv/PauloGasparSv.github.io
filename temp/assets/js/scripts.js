$(() => {
    AOS.init({
        duration: 1500
    });

    $('.parallax').scroll(function () {
        if ($(this).scrollTop() >= 50)
            $('#return-to-top').fadeIn(250);
        else
            $('#return-to-top').fadeOut(250);
    });
    $('.popover-html').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="99" style="width: 99%"></div></div> <span class="fc-1 text-center mt-1 d-block">99%</span>',
        placement: 'bottom'
    });
    $('.popover-css').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="95" style="width: 95%"></div></div> <span class="fc-1 text-center mt-1 d-block">95%</span>',
        placement: 'bottom'
    });
    $('.popover-sass').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="70" style="width: 70%"></div></div> <span class="fc-1 text-center mt-1 d-block">70%</span>',
        placement: 'bottom'
    });
    $('.popover-boot').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div> <span class="fc-1 text-center mt-1 d-block">100%</span>',
        placement: 'bottom'
    });
    $('.popover-js').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="60" style="width: 60%"></div></div> <span class="fc-1 text-center mt-1 d-block">60%</span>',
        placement: 'bottom'
    });
    $('.popover-jq').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="80" style="width: 80%"></div></div> <span class="fc-1 text-center mt-1 d-block">80%</span>',
        placement: 'bottom'
    });
    $('.popover-react').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="40" style="width: 40%"></div></div> <span class="fc-1 text-center mt-1 d-block">40%</span>',
        placement: 'bottom'
    });
    $('.popover-angular').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="50" style="width: 50%"></div></div> <span class="fc-1 text-center mt-1 d-block">50%</span>',
        placement: 'bottom'
    });
    $('.popover-ts').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="50" style="width: 50%"></div></div> <span class="fc-1 text-center mt-1 d-block">50%</span>',
        placement: 'bottom'
    });
    $('.popover-php').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="70" style="width: 70%"></div></div> <span class="fc-1 text-center mt-1 d-block">70%</span>',
        placement: 'bottom'
    });
    $('.popover-yii').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="60" style="width: 60%"></div></div> <span class="fc-1 text-center mt-1 d-block">60%</span>',
        placement: 'bottom'
    });
    $('.popover-mysql').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="60" style="width: 60%"></div></div> <span class="fc-1 text-center mt-1 d-block">60%</span>',
        placement: 'bottom'
    });
    $('.popover-git').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="75" style="width: 75%"></div></div> <span class="fc-1 text-center mt-1 d-block">75%</span>',
        placement: 'bottom'
    });
    $('.popover-apache').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="75" style="width: 75%"></div></div> <span class="fc-1 text-center mt-1 d-block">75%</span>',
        placement: 'bottom'
    });
    $('.popover-cpanel').popover({
        html: true,
        trigger: 'hover',
        content: '<div class="progress"><div class="progress-bar progress-bar-striped bgc-1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="85" style="width: 85%"></div></div> <span class="fc-1 text-center mt-1 d-block">85%</span>',
        placement: 'bottom'
    });
    $('#return-to-top').click(() => {
        $('.parallax').animate({
            scrollTop: 0
        }, 500);
    });
    scrollTo = function (a) {
        var c = a.attr('href');
        var d = window.innerHeight;
        if ($(window).scrollTop() != d) {
            $('.parallax').stop().animate({
                scrollTop: d
            }, 2000);
        }
    };
    $('.btn-down').on('click', function (e) {
        e.preventDefault();
        scrollTo($(this));
    });



    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', '${vh}px');

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', '${vh}px');
    });



    $('form#contato').submit(function (e) {
        e.preventDefault();
        var dados = $(this).serialize();
        $.ajax({
            url: 'https://rafaela.tech/enviar',
            type: "POST",
            dataType: "json",
            data: dados,
            success: function (data) {
                if (data.aviso === 1) {
                    $('.resp').empty().html(data.mensagem)
                } else {
                    $('.resp').empty().html(data.mensagem)
                }
            },
            beforeSend: function () {
                $('.resp').empty().html('<p><i class="fa fa-spinner fa-spin"></i></p>')
            },
            complete: function () {},
            error: function (e) {
                alert("Ocorreu um erro ao carregar os dados.")
            }
        });
        return false
    })
});

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 15,
            "density": {
                "enable": true,
                "value_area": 200
            }
        },
        "color": {
            "value": ["#feaec9", "#3fab95"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 7,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 140,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3.2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 500,
                "rotateY": 1100
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});