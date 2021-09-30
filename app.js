'use strict'

// images to vote on
// vote totals
// change images per click
// record clicks
// keep totals on the side
// url per image
// store the images

const allImages = [];
let totalClick = 0;
// variable to push data into chart
// need vote totals and which products
// find vote total loop
// find product loop
const chartData = [];

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

    leftImageEL.removeChild(leftImageEL.firstChild);
    centerImageEl.removeChild(centerImageEl.firstChild);
    rightImageEL.removeChild(rightImageEL.firstChild);

    let leftNumb = Math.floor(Math.random() * allImages.length);
    let centerNumb = Math.floor(Math.random() * allImages.length);
    let rightNumb = Math.floor(Math.random() * allImages.length);
    
    //anti repeat
    while (leftNumb === centerNumb)  {
        centerNumb = Math.floor(Math.random() * allImages.length);
    }
    while (rightNumb === centerNumb || rightNumb === leftNumb) {
        rightNumb = Math.floor(Math.random() * allImages.length);
    } 

    let leftImg = document.createElement('img');
    leftImg.setAttribute('src', `img/${allImages[leftNumb].url}`);
    leftImg.setAttribute('name', `${allImages[leftNumb].name}`)
    leftImageEL.appendChild(leftImg);
    allImages[leftNumb].timesShown++;

    let centerImg = document.createElement('img');
    centerImg.setAttribute('src', `img/${allImages[centerNumb].url}`);
    centerImg.setAttribute('name', `${allImages[centerNumb].name}`)
    centerImageEl.appendChild(centerImg);
    allImages[centerNumb].timesShown++;

    let rightImg = document.createElement('img');
    rightImg.setAttribute('src', `img/${allImages[rightNumb].url}`);
    rightImg.setAttribute('name', `${allImages[rightNumb].name}`)
    rightImageEL.appendChild(rightImg);
    allImages[rightNumb].timesShown++;
    totalClick++;
}


function clickCounter(event){
    event.preventDefault();
    console.log('it clicked');
    for (let i = 0; i < allImages.length; i++) {
        if (event.target.name === allImages[i].name) {
            allImages[i].clicks++;
            console.log(allImages[i]);
        }
    } 

    if (totalClick < 25){
    
        renderImages();
    } else {
        leftImageEL.removeEventListener('click', clickCounter)
        centerImageEl.removeEventListener('click', clickCounter)
        rightImageEL.removeEventListener('click', clickCounter)
        renderResults();
        renderChart()
                let dataString = JSON.stringify(allImages);
                localStorage.setItem('container', dataString);
    }
}

function renderResults(){
    for (let i = 0; i < allImages.length; i++) {
        let listElement = document.createElement('li');
        listElement.innerText = `${allImages[i].name}: was clicked ${allImages[i].clicks} times and was show ${allImages[i].timesShown} times `;
        document.getElementById("results").appendChild(listElement);
    }
    
}

function renderChart () {
    let chartEl = document.getElementById('myChart');
    chartEl.innerHTML = '';
  
    let ctx = chartEl.getContext('2d');
    const label = [];
    const clickData = [];
    const showData = [];
    for (let i = 0; i < allImages.length; i++){
      label.push(allImages[i].name);
      clickData.push(allImages[i].clicks);
      showData.push(allImages[i].timesShown);
    }
    
    let finalchart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: label,
        datasets:[{
          label: 'Number of Clicks',
          data: clickData,
          backgroundColor: 'rgba(130, 0, 67, 0.8)',
          borderColor: 'rgba(245, 40, 145, 0.8)',
          borderWidth: 1
        }, {
          label:'Number of Times Shown',
          data: showData,
          backgroundColor: 'rgba(147, 174, 139, 0.8)',
          borderColor: 'rgba(47, 192, 2, 0.8)',
          borderWidth: 3
        }],
      },
      options: {
        plugins: {title: {
          display: true,
          text: 'Results',
          padding: {
            top: 5,
            bottom: 15,
          },
          font: {
            size: 20,
          }
        }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
          }
        },
      }
    });
} 
//need to set a limit of rounds at 25
//need to track what is clicked
//need to store click info
//need to render click info 

leftImageEL.addEventListener('click', clickCounter);
centerImageEl.addEventListener('click', clickCounter)
rightImageEL.addEventListener('click', clickCounter)



let retrievedProducts = localStorage.getItem("");

if (retrievedProducts) {
  let parsedData = JSON.parse(retrievedProducts);
  allImages = parsedData;

} else {

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
}
renderImages()

console.log(allImages);




// what needs an event listener
// update the clicks
// name event