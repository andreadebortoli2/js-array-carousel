// console.log('HI');

//-set the array

const imageList = [
    "./assets/img/4U8SybbIccwhTEZMs4KT7qefN7N.jpg",
    "./assets/img/bEGfjpRDXdHFz6gDkBS51kanLNY.jpg",
    "./assets/img/gCCLUYIe6gWGy5AxphqFibBVPTt.jpg",
    "./assets/img/l3Rr26K18Jtx3bZkmvKDkpzaijf.jpg",
    "./assets/img/lcGp2uYc2CG4BIBkSSv375AnCn2.jpg",
    "./assets/img/ngUaHgSZGkKy1Izwjk7qwZLOC5A.jpg",
    "./assets/img/xBUggE2z6dpKYO0ba00DZC11iOE.jpg",
    "./assets/img/zNhbUDdlJSymHFgEyOKF7QaUo9I.jpg"
]

// console.log(imageList);

// ------- show images -------
/*
// - take the slider to print images inside
const slider = document.querySelector('.slider')

for (let i = 0; i < imageList.length; i++) {
    const image = imageList[i];
    
console.log(image);

// - image is the src adress so i hate to put it in the html code

const imageSrc = `<img src="${image}" alt=""></img>`;

console.log(imageSrc);

// - print the image on page

slider.insertAdjacentHTML('beforeend', imageSrc);

};
*/

// ------- show only one image -------

// - select a position in the array to be shown
// const showIndex = 0;
// - change const to let so the comands can change it to change image+
let showIndex = 0;

const slider = document.querySelector('.slider')

//////// ------- thumbnails -------
////////  - set as variable the thumbnails area and print inside the placeholders
    const thumbnails = document.querySelector('.thumbnails');


for (let i = 0; i < imageList.length; i++) {
    const image = imageList[i];
    
// console.log(image);

/*
// - image is the src adress so i have to put it in the html code

const imageSrc = `<img src="${image}" alt="">`;

// console.log(imageSrc);

// - print the images on page

slider.insertAdjacentHTML('beforeend', imageSrc);
*/

// - but i want to print only the active image so i'll add the class='active' to the image i want to show, the image that i want to show is the one with the showIndex i set so i need to give a condition, to set the condition inside the imageFullCode i have to write it inline so i need the "ternary operators syntax" (condition ? exprIfTrue : exprIfFalse)

const imageFullCode = `<img class="${i === showIndex ? 'active' : ''}" src="${image}" alt="">`;

slider.insertAdjacentHTML('beforeend', imageFullCode);

//////// - create the thumbnail placeholder and add to thumbnails
    const thumbnailPlaceholder = document.createElement('div');
    thumbnailPlaceholder.classList.add('thumbnail_placeholder');
//////// - with calc on the imageList.length so if i'll add images to the element the length automatically adjust itself
    thumbnailPlaceholder.style.width = `calc(90% / ${imageList.length})`;
    if (i === showIndex) {
        thumbnailPlaceholder.classList.add('active_thumbnail')
    };
    // console.log(thumbnailPlaceholder);
    thumbnails.append(thumbnailPlaceholder)
};

// ------- add commands -------

// - first create the logic for the forward command

// - select the next command
const nextBtn = document.querySelector('.next_btn')
// console.log(nextBtn);

nextBtn.addEventListener('click', function(){
    
// - every click the showIndex has to increase to change the image, to change has to be a let instead of a const
    showIndex++
    // console.log(showIndex);
    
// - maki the array as a loop so when you arrive at the end of the array the next click bring you back to the begin of the array
    // - when the showIndex pass over the last element(= array.length-1 cause the index start from 0 instead of 1 as the measure of the length) of the array has to become '0'

    if (showIndex > imageList.length-1) {
        showIndex = 0
    };


// - to change the image shown i have to change the image that has the class="active"so:
    //   - first i have to remove the class from the image that already has it
    
    const activeImage = document.querySelector('img.active');
    activeImage.classList.remove('active');
    // console.log(activeImage);

// - than i add the class to the image that has the array position equal to the showIndex (increased by the click)
    // - select all the images that can receive the class

    const allImages = document.querySelectorAll('img');

    // - add the class utilizing the showIndex as variable of discrimination cause is just a number and can compare with the order number of the array allImages
    allImages[showIndex].classList.add('active');
    
////////  - set rules for the tumbnails as for the images
        const activeTumbnail = document.querySelector('.active_thumbnail');
        activeTumbnail.classList.remove('active_thumbnail');

        const allThumbnailsPlaceholders = document.querySelectorAll('.thumbnail_placeholder');
        allThumbnailsPlaceholders[showIndex].classList.add('active_thumbnail');

});



// - same concepts of the forward command but edited for backward logic

const prevBtn = document.querySelector('.prev_btn')

prevBtn.addEventListener('click', function(){

    showIndex--

    if (showIndex < 0) {
        showIndex = imageList.length-1
    };

    const activeImage = document.querySelector('img.active');
    activeImage.classList.remove('active');

    const allImages = document.querySelectorAll('img');
    allImages[showIndex].classList.add('active');

////////  - set rules for the tumbnails as for the images
        const activeTumbnail = document.querySelector('.active_thumbnail');
        activeTumbnail.classList.remove('active_thumbnail');

        const allThumbnailsPlaceholders = document.querySelectorAll('.thumbnail_placeholder');
        allThumbnailsPlaceholders[showIndex].classList.add('active_thumbnail');
    
});