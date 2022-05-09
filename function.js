import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

