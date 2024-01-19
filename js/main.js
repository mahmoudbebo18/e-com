$(document).ready(function () {

    $(document).ready(function () {
        $('.categories_owl').owlCarousel({
            rtl: true,
            autoplay: true,
            loop: true,
            dots: false,
            nav: true,
            margin: 10,
            navText: ["<img src='/imgs/right_arrow.png'>", "<img src='/imgs/left_arrow.png'>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                575: {
                    items: 3,
                    nav: false
                },
                767: {
                    items: 3,
                    nav: false
                },
                991: {
                    items: 4,
                    nav: true,
                },
                1400: {
                    items: 5,
                    nav: true,
                },
                1500: {
                    items: 6,
                    nav: true,
                }
            }
        });


        //new arrivals owl 
        $('.new_arrivals_owl').owlCarousel({
            rtl: true,
            autoplay: true,
            loop: true,
            dots: false,
            margin: 28,
            nav: true,
            navText: ["<img src='/imgs/trans_arrow_right.png'>", "<img src='/imgs/trans_arrow_left.png'>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                575: {
                    items: 2,
                    nav: false
                },
                991: {
                    items: 3,
                },
                1400: {
                    items: 4,
                }
            }
        });
        $('.special_offers_owl').owlCarousel({
            rtl: true,
            autoplay: true,
            loop: true,
            dots: false,
            margin: 28,
            nav: true,
            navText: ["<img src='/imgs/trans_arrow_right.png'>", "<img src='/imgs/trans_arrow_left.png'>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                575: {
                    items: 2,
                    nav: false
                },
                991: {
                    items: 3,

                },
                1400: {
                    items: 4,
                }
            }
        });
        $('.partners_owl').owlCarousel({
            rtl: true,
            autoplay: true,
            loop: true,
            dots: false,
            margin: 60,
            nav: true,
            navText: ["<img src='/imgs/trans_arrow_right.png'>", "<img src='/imgs/trans_arrow_left.png'>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                575: {
                    items: 2,
                    nav: false
                },
                991: {
                    items: 3,
                },
                1400: {
                    items: 4,
                },
                1600: {
                    items: 5,
                },
                1900: {
                    items: 6,
                }
            }
        });
    });

    let counterValue = 2;
    const updateCounterDisplay = () => {
        $('#counter').val(counterValue);
    };
    $('#increment').on('click', function () {
        counterValue++;
        updateCounterDisplay();
    });
    $('#decrement').on('click', function () {
        if (counterValue > 0) {
            counterValue--;
            updateCounterDisplay();
        }
    });

    updateCounterDisplay();

    $('input[name="offer"]').on('click', function () {
        // Remove 'active' class from all li elements
        $('ul.list-unstyled li').removeClass('active');

        // Add 'active' class to the parent li of the clicked radio
        $(this).closest('li').addClass('active');
    });
})