const music = new Audio("Music/Chaleya_320(PagalWorld.com.pe).mp3");
// music.play();



// const song = [
//     {
//         id: "1",
//         Name: ` Ae Dil Hai Mushkil<br>
//         <div class="subtitle">Arijit Singh</div>`,
//         poster: "Music Icons/1.jpg"
//     },
//     {
//         id: "2",
//         Name: `Jeene Bhi De<br>
//                 <div class="subtitle">Yasser Desai</div>`,
//         poster: "Music Icons/2.jpg"
//     },

//     {
//         id: "3",
//         Name: `Chaleya<br>
//                 <div class="subtitle">Arijit Singh</div>`,
//         poster: "Music Icons/2.jpg"
//     },

//     {
//         id: "4",
//         Name: `Dil Ibaadat<br>
//                 <div class="subtitle">KK</div>`,
//         poster: "Music Icons/4.jpg"
//     },

//     {
//         id: "5",
//         Name: `Hale Dil<br>
//                 <div class="subtitle">KK</div>`,
//         poster: "Music Icons/5.jpg"
//     },

//     {
//         id: "6",
//         Name: `Hua Main</h5><br>
//                 <div class="subtitle"></div>`,
//         poster: "Music Icons/6.jpg"
//     },

//     {
//         id: "7",
//         Name: `Janiye<br>
//                 <div class="subtitle">Yasser Desai</div>`,
//         poster: "Music Icons/7.jpg"
//     },

//     {
//         id: "8",
//         Name: `pehle Bhi Main<br>
//                 <div class="subtitle">Yasser Desai</div>`,
//         poster: `Music Icons/8.jpg`
//     },

//     {
//         id: "9",
//         Name: `Ruaan<br>
//                 <div class="subtitle">Arijit Singh</div>`,
//         poster: "Music Icons/9.jpg"
//     },

//     {
//         id: "10",
//         Name: `Safar<br>
//              <div class="subtitle">Arijit Singh</div>`,
//         poster: "Music Icons/10.jpg"
//     },

// ]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = song[i].poster;
    i.getElementsByTagName('h5')[0].innerHTML = song[i].song;
})



let left = document.getElementById('left');
let right = document.getElementById('right');
let pop_song = document.getElementsByClassName('pop_song')[0];

left.addEventListener('click', () => {
    pop_song.scrollLeft += 100;
})

right.addEventListener('click', () => {
    pop_song.scrollLeft -= 100;
})



let pop_singer_left =  document.getElementById('pop_singer_left');
let pop_singer_right =  document.getElementById('pop_singer_right');
let Item = document.getElementsByClassName('Item')[0];

pop_singer_right.addEventListener('click' ,() =>{
    Item.scrollLeft += 100;
});

pop_singer_left.addEventListener('click' ,() =>{
    Item.scrollLeft -= 100;
});

let masterPlay = document.getElementById('masterPlay');

// masterPlay.addEventListener('click', () => {
//    if (music.paused || music.currentTime <= 0) {
//     music.play();
//    } else {
    
//    }
// })






