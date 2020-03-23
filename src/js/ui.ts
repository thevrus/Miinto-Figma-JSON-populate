import '../scss/figma-plugin-ds.scss';
import './products';
import './product';

document.querySelector('.tabs').addEventListener('click', function() {
    this.querySelectorAll('.tabs__link').forEach(item => {
        item.classList.toggle('tabs__link--active');
    });
    document.querySelectorAll('.products').forEach(item => {
        item.classList.toggle('products--active');
    });
});
