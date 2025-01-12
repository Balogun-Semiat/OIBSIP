const heroContents = [
    {
        title: 'A Culinary Experience Like No Other',
        text: 'Delight your senses with the finest dishes, crafted with passion and served with love.'
    },
    {
        title: "Welcome to Culinary Excellence",
        text: "A celebration of flavors, where every dish tells a story.",
      },
      {
        title: "Savor Our Signature Dishes",
        text: "Indulge in our chef's signature creations made from the finest ingredients.",
      },
      {
        title: "Celebrate Life’s Moments Here",
        text: "Host your special occasions with us—where memories are made over meals.",
      },
      {
        title: "Fresh, Local, and Delicious",
        text: "We partner with local farmers to bring you the freshest flavors of the season.",
      }
]

const heroTitle = document.getElementById('heroTitle');
const heroText = document.getElementById('heroText');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

function displayHeroText() {
    heroTitle.textContent = heroContents[currentIndex].title;
    heroText.textContent = heroContents[currentIndex].text;
}

// displayHeroText()

nextBtn.addEventListener('click', function() {
    if(currentIndex === heroContents.length - 1){
        currentIndex = 0;
    } else{
        currentIndex++  
    }
    displayHeroText()
    // console.log(currentIndex)
})

prevBtn.addEventListener('click', function() {
    if(currentIndex === 0){
        currentIndex = heroContents.length - 1;
    } else{
        currentIndex--  
    }
    displayHeroText()
    // console.log(currentIndex)
})
