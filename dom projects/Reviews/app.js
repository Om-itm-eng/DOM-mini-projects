let users = [
    {
        id : 1,
        name : "Om",
        job : 'Developer',
        image : 'utils\\om.jpg',
        review : "The pasta was absolutely delicious—clearly made fresh! The ambiance felt cozy and authentic, and the staff was attentive without being overbearing. Only knock is that the tiramisu was a bit too sweet for my taste. Will definitely return!" 
    },

    {
        id : 2,
        name : "Madhav",
        job : 'Student',
        image : 'utils\\madhav.jpg',
        review : "Decent sound quality for the price, and the battery lasts a solid 8 hours. However, the Bluetooth connection can be a bit finicky, especially when switching between devices. Comfortable fit, though!" 
    },

    {
        id : 3,
        name : "Krishna",
        job : 'Crickter',
        image : 'utils\\krishna.jpg',
        review : "Absolutely gripping from start to finish. Great visual effects, strong performances, and a twist ending I didn’t see coming. A sci-fi gem that deserves more attention." 
    },

    {
        id : 4,
        name : "Shivani",
        job : 'Lawyer',
        image : 'utils\\shivani.jpg',
        review : "A beautifully written story with deep characters and an emotional arc that sticks with you. The pacing was slow in the middle, but the ending made up for it. Nature descriptions were vivid and immersive." 
    },

    {
        id : 5,
        name : "Archana",
        job : 'IAS',
        image : "utils\\image1.jpg",
        review : "Tried it based on a friend's recommendation. While the UI is sleek, it’s missing some key features like calendar sync and recurring tasks. Hopefully, future updates improve functionality." 
    }

];

let obj = document.querySelector('.user-review'); 
let contents = obj.querySelectorAll(".linker"); //select only obj element.
let currentItem = 0;

//set inital review
setTimeout(()=>{
    contents[0].src = users[0].image;
    contents[1].innerText = users[0].name;
    contents[2].innerText = users[0].job;
    contents[3].innerText = users[0].review;
}, 0);

function forward(){
    currentItem++;
    if(currentItem > users.length - 1 ) currentItem = 0;
    contents[0].src = users[currentItem].image;
    contents[1].innerText = users[currentItem].name;
    contents[2].innerText = users[currentItem].job;
    contents[3].innerText = users[currentItem].review;
}

function backward(){
    currentItem--;
    if(currentItem < 0) currentItem = users.length - 1;
    contents[0].src = users[currentItem].image;
    contents[1].innerText = users[currentItem].name;
    contents[2].innerText = users[currentItem].job;
    contents[3].innerText = users[currentItem].review;
}