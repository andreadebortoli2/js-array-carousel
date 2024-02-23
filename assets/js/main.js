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


//++++++++thumbnails list++++++++

const thumbnailsList = [
    'bg_01',
    'bg_02',
    'bg_03',
    'bg_04',
    'bg_05',
];
// console.log(thumbnailsList);



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


//++++++++add thumbnails to the page++++++++

const thumbnails = document.querySelector('.thumbnails')

for (let i = 0; i < thumbnailsList.length; i++) {
    const thumbnailSlide = thumbnailsList[i];
    
    // console.log(thumbnailSlide);

    const thumbnailEnlighted = `<div class="thumbnail ${i === showIndex ? 'enlighted' : ''} ${thumbnailSlide}"></div>`;

    thumbnails.insertAdjacentHTML('beforeend', thumbnailEnlighted)

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
       

//++++++++enlight the thumbnail following the change of the image showed++++++++

// -select and remove the class enlighted from the thumbnail that currently has the class enlighted asigned
    const currentTumbnail = document.querySelector('.thumbnail.enlighted');
    currentTumbnail.classList.remove('enlighted');

// - select all the generated thumbnails
    const allThumbnails = document.querySelectorAll('.thumbnail')

// - set the class 'enlighted' to the thumbnail that has the showIndex incremented
    allThumbnails[showIndex].classList.add('enlighted');

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


//++++++++enlight the thumbnail following the change of the image showed++++++++

// - same as the nextBtn code
    const currentTumbnail = document.querySelector('.thumbnail.enlighted');
    currentTumbnail.classList.remove('enlighted');

    const allThumbnails = document.querySelectorAll('.thumbnail')

    allThumbnails[showIndex].classList.add('enlighted');

})









