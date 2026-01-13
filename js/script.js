// ALL SCRIPTS WILL BE HERE

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

/*
 * FILTER EXERCISES
 */


const filterButtons = document.querySelectorAll('button[data-filter]');
const items = document.querySelectorAll('.item');

filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const filterValue = event.target.dataset.filter;

        items.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block'; // Or remove a 'hidden' class
            } else {
                item.style.display = 'none'; // Or add a 'hidden' class
            }
        });
    });
});