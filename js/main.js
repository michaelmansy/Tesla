const topBar = document.querySelector('#top-bar');

const exteriorColorSelection = document.querySelector('#exterior-buttons');
const interiorColorSelection = document.querySelector('#interior-buttons');

const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');



// Image Mapping
const exteriorImages = {
    'Stealth Grey': './images/model-y-stealth-grey.jpg',
    'Pearl White': './images/model-y-pearl-white.jpg',
    'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
    'Solid Black': './images/model-y-solid-black.jpg',
    'Ultra Red': './images/model-y-ultra-red.jpg',
    'Quicksilver': './images/model-y-quicksilver.jpg',
};

const interiorImages = {
    Dark: './images/model-y-interior-dark.jpg',
    Light: './images/model-y-interior-light.jpg',
};


// Handle the top bar on scroll
const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar' , atTop);
    topBar.classList.toggle('hidden-bar' , !atTop);
};



// handle the color selections
const handleColorButtonClick = (event) =>{
    let button;

    if(event.target.tagName === 'IMG'){
        button = event.target.closest('button');
    } else if(event.target.tagName === 'BUTTON'){
        button = event.target;
    }

    if(button){
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');

        //change exterior image
        if(event.currentTarget === exteriorColorSelection){
            const color = button.querySelector('img').alt;
            exteriorImage.src = exteriorImages[color];
        }

        //change exterior image
        if(event.currentTarget === interiorColorSelection){
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color];
        }
    }
}

// Event Listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));

exteriorColorSelection.addEventListener('click', handleColorButtonClick);
interiorColorSelection.addEventListener('click', handleColorButtonClick);