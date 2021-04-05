new fullScroll({
        mainElement: 'wrap',
        displayDots: true,
        dotsPosition: 'right',
        animateTime: 0.7,
        animateFunction: 'ease'
    });
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    $('.skill_per').each(function() {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({
            animatedValue: 0
        }).animate({
            animatedValue: per
        }, {
            duration: 1000,
            stop: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });
    $('.skill_ber').each(function() {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({
            animatedValue: 0
        }).animate({
            animatedValue: per
        }, {
            duration: 1000,
            stop: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });