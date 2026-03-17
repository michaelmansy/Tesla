const topBar = document.querySelector('#top-bar');

const exteriorColorSelection = document.querySelector('#exterior-buttons');
const interiorColorSelection = document.querySelector('#interior-buttons');

const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');


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
    }
}

// Event Listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));

exteriorColorSelection.addEventListener('click', handleColorButtonClick);
interiorColorSelection.addEventListener('click', handleColorButtonClick);