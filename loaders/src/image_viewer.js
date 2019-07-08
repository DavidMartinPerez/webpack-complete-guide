import '../styles/image_viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const image_small = document.createElement('img');
const image_big = document.createElement('img');

image_small.src = small;
image_big.src = big;

document.body.appendChild( image_small );
document.body.appendChild( image_big );