import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/videoPlayer';
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Form from './modules/form';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesPageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulesPageSlider.render();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.slick-next',
        prev: '.slick-prev',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active',
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();
    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});