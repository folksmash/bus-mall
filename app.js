'use strict'

// images to vote on
// vote totals
// change images per click
// record clicks
// keep totals on the side
// url per image
// store the images

const allImages = [];
const totalClick = 0;

function Image(url, name) {
    this.name = name;
    this.clicks = 0;
    this.url = url;
    this.timesShown = 0;
    allImages.push(this);
}

let leftImageEL = document.getElementById('image1')
let centerImageEl = document.getElementById('image2')
let rightImageEL = document.getElementById('image3')


function renderImages() {


    let leftNumb = Math.floor(Math.random() * allImages.length);
    let centerNumb = Math.floor(Math.random() * allImages.length);
    let rightNumb = Math.floor(Math.random() * allImages.length);
    

    while (leftNumb === centerNumb)  {
        centerNumb = Math.floor(Math.random() * allImages.length);
    }
    while (rightNumb === centerNumb || rightNumb === leftNumb) {
        rightNumb = Math.floor(Math.random() * allImages.length);
    } 

    let leftImg = document.createElement('img');
    leftImg.setAttribute('src', `img/${allImages[leftNumb].url}`);
    
    leftImageEL.appendChild(leftImg);

    let centerImg = document.createElement('img');
    centerImg.setAttribute('src', `img/${allImages[centerNumb].url}`);
    
    centerImageEl.appendChild(centerImg);

    let rightImg = document.createElement('img');
    rightImg.setAttribute('src', `img/${allImages[rightNumb].url}`);
    
    rightImageEL.appendChild(rightImg);
    
    
}


function testClick(event){
    event.preventDefault();
    console.log('it clicked');
    for (let i = 0; i < allImages.length; i++) {
        if (image1.name === allImages[i].name) {
            allImages[i].clicks++;
            console.log(allImages[i]);
    }
    renderImages();
}
}

leftImageEL.addEventListener('click', testClick);
centerImageEl.addEventListener('click', testClick)
rightImageEL.addEventListener('click', testClick)

// how to render images
new Image('bag.jpg', 'bag');
new Image('banana.jpg', 'banana');
new Image('bathroom.jpg', 'bathroom');
new Image('boots.jpg', 'boots');
new Image('breakfast.jpg', 'breakfast');
new Image('bubblegum.jpg', 'bubblegum');
new Image('chair.jpg', 'chair');
new Image('cthulhu.jpg', 'cthulhu');
new Image('dog-duck.jpg', 'dog-duck');
new Image('dragon.jpg', 'dragon');
new Image('pen.jpg', 'pen');
new Image('pet-sweep.jpg', 'pet-sweep');
new Image('scissors.jpg', 'scissors');
new Image('shark.jpg', 'shark');
new Image('sweep.png', 'sweep');
new Image('tauntaun.jpg', 'tauntaun');
new Image('unicorn.jpg', 'unicorn');
new Image('water-can.jpg', 'water-can');
new Image('wine-glass.jpg', 'wine-glass');

renderImages()

console.log(allImages);




// what needs an event listener
// update the clicks
// name event