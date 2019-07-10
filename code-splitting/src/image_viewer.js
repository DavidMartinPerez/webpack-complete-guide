import '../styles/image_viewer.css';
import small from '../assets/small.jpg';

export default () => {
    const image_small = document.createElement('img');
    image_small.src = small;
    document.body.appendChild( image_small );
}