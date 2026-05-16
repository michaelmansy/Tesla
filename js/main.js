const topBar = document.querySelector('#top-bar');

const exteriorColorSelection = document.querySelector('#exterior-buttons');
const interiorColorSelection = document.querySelector('#interior-buttons');

const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');

const wheelButtonsSection = document.querySelector('#wheel-buttons');

const performanceBtn = document.querySelector('#performance-btn');


let selectedColor = 'Stealth Grey';
const selectOptions = {
    'Performance Wheels': false,
    'Performance Package': false,
    'Full Self-Driving': false,
};


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
            selectedColor = button.querySelector('img').alt;
            updateExteriorImage();
        }

        //change exterior image
        if(event.currentTarget === interiorColorSelection){
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color];
        }
    }
}


// Update exterior image based on color and wheels
const updateExteriorImage = () => {
    const performanceSuffix = selectOptions['Performance Wheels'] ? '-performance' : '';
    const colorKey = selectedColor in exteriorImages ? selectedColor : 'Stealth Grey';
    exteriorImage.src = exteriorImages[colorKey].replace('.jgp', `${performanceSuffix}.jpg`);
}


// function to handle wheel button selections
const handleWheelButtonClick = (event) => {
    if(event.target.tagName === 'BUTTON'){
        const buttons = document.querySelectorAll('#wheel-buttons button');
        buttons.forEach((btn) => btn.classList.remove('bg-gray-700', 'text-white'));
    }

    // Add selected styles to the clicked button
    event.target.classList.add('bg-gray-700', 'text-white');

    selectOptions['Performance Wheels'] = event.target.textContent.includes('Performance');

    updateExteriorImage()
}

//Performance Package
const handlePerformanceButtonClick = () => {
    performanceBtn.classList.toggle('bg-gray-700');
    performanceBtn.classList.toggle('text-white');
}




// Event Listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));

exteriorColorSelection.addEventListener('click', handleColorButtonClick);
interiorColorSelection.addEventListener('click', handleColorButtonClick);

wheelButtonsSection.addEventListener('click', handleWheelButtonClick);

performanceBtn.addEventListener('click', handlePerformanceButtonClick);