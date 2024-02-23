// console.log('HI');

    // -set the array with images
const imagesList = [
    './assets/img/carousel-imgs/01.webp',
    './assets/img/carousel-imgs/02.webp',
    './assets/img/carousel-imgs/03.webp',
    './assets/img/carousel-imgs/04.webp',
    './assets/img/carousel-imgs/05.webp'
];

// console.log(imagesList);


// - index of the image that has to be show
let showIndex = 0


const slider = document.querySelector('.slider');

// - show the image with the for loop

for (let i = 0; i < imagesList.length; i++) {
    const slide = imagesList[i];
    // console.log(slide);
    
// -set the markup that has to be print with text interpolatio for:
//      - the class wit conditions wrote with ternary operators
//      - url of the image
    const image = `<img class="${i === showIndex ? 'active' : ''}" src="${slide}" alt="">`
    
    // console.log(image);
    
    slider.insertAdjacentHTML('beforeend', image)
}

// - display only one image

// -button
const nextBtn = document.querySelector('.next')

nextBtn.addEventListener('click', function(){
    // console.log('next');
    
// - increment the index of the image that has to be show
    showIndex++

// - if showIndex incremet over the array length (-1 cause of the index starting from 0) set it back to 0 (! set the conditions for loop the array before the operations)
    if (showIndex > imagesList.length-1){
        showIndex = 0;
    }

// -select and remove the class active from the image that currently has the class active asigned
    const currentImage = document.querySelector('img.active');
    currentImage.classList.remove('active');
    
// - select all the generated images
    const allImages = document.querySelectorAll('img')
    
    // console.log(imagesList, allImages);
    // console.log(allImages[showIndex]);
    
// - set the class 'active' to the image that has the showIndex incremented
    allImages[showIndex].classList.add('active');
       
})


// - copy the nextBtn adjusting for the decrement
const prevBtn = document.querySelector('.prev')

prevBtn.addEventListener('click', function(){
   
    showIndex--

    if (showIndex < 0){
        showIndex = imagesList.length-1;
    }

    const currentImage = document.querySelector('img.active');
    currentImage.classList.remove('active');

    const allImages = document.querySelectorAll('img')

    allImages[showIndex].classList.add('active');

})