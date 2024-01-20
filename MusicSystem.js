let pausebtn=document.querySelector(".fa-pause");
let playbtn=document.querySelector(".fa-play");
let forwardbtn=document.querySelector(".fa-forward");
let backwardbtn=document.querySelector(".fa-backward");
let myprogress=document.querySelector("#track");
let songlist=Array.from(document.getElementsByClassName("song_list"));
let trackname=document.querySelector(".track_name");
let name=document.querySelectorAll(".song_name");
let videoplayer=document.getElementById("vd");
let cont=document.querySelector("#cont");
let index=0;
//songs
let audio=[
   {songname:" Jamal Kudu (From 'ANIMAL') ",songpath:"./songs/song1.mp3",imagepath:"./covers/1.jpg"},
   {songname:"Satranga (From 'ANIMAL')",songpath:"./songs/song2.mp3",imagepath:"./covers/2.jpg"},
   {songname:"Lutt Putt Gaya Dunki",songpath:"./songs/song3.mp3",imagepath:"./covers/3.jpg"},
   {songname:"Qissonmein (From 'Salaar')",songpath:"./songs/song4.mp3",imagepath:"./covers/4.jpg"},
   {songname:"Leke Prabhu Ka Naam",songpath:"./songs/song5.mp3",imagepath:"./covers/5.jpg"},
   {songname:"Chaleya (Jawan)",songpath:"./songs/song6.mp3",imagepath:"./covers/6.jpg"},
   {songname:"Ishq Jaisa Kuch ('Fighter')",songpath:"./songs/song7.mp3",imagepath:"./covers/7.jpg"},
   {songname:"Tu hai kahan",songpath:"./songs/song8.mp3",imagepath:"./covers/8.jpg"},
];

//video array

let video=[
    {video:"./images/video/video1.mp4"},
    {video:"./images/video/video2.mp4"},
    {video:"./images/video/video3.mp4"},
    {video:"./images/video/video4.mp4"},
    {video:"./images/video/video5.mp4"},
    {video:"./images/video/video6.mp4"},
    {video:"./images/video/video7.mp4"},
    {video:"./images/video/video8.mp4"},
]
//audio object

let audioElement=new Audio("./songs/song1.mp3");
//setting images and names
songlist.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=audio[i].imagepath;
   element.querySelectorAll(".song_name")[0].innerHTML=audio[i].songname;
})
///sick bar
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogress.value = progress;
})

myprogress.addEventListener("change",()=>{
    audioElement.currentTime = myprogress.value * audioElement.duration/100;
})

//video progress
videoplayer.addEventListener("timeupdate",()=>{
    progress = parseInt((videoplayer.currentTime/videoplayer.duration)* 100);
    videoplayer.value=progress;
    console.log(progress);
})
videoplayer.addEventListener("change",()=>{
    videoplayer.currentTime=videoplayer.value * videoplayer.duration/100;
    console.log( videoplayer.currentTime);
})
trackname.innerHTML=audio[index].songname;
videoplayer.src=video[index].video;

pausebtn.style.display="none";
//play
function play(){
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    playbtn.style.display="none";
    pausebtn.style.display="inline"
    videoplayer.play();
  //  cont.style.opacity=0.99;
    }
}
playbtn.addEventListener("click",play)
//pause
pausebtn.addEventListener("click",()=>{
    audioElement.pause();
    pausebtn.style.display="none";
    playbtn.style.display="inline";
    videoplayer.pause();
   // cont.style.opacity=1;
})

//next

console.log(forwardbtn);

forwardbtn.addEventListener("click",(e)=>{
    if(index>=7){
        index=0;
    }
    else{
        index+=1;
    }
    audioElement.src=`./songs/song${index+1}.mp3`;
    trackname.innerHTML=audio[index].songname;
    videoplayer.src=video[index].video;
    videoplayer.play();
    audioElement.play();
   // cont.style.opacity=0.99;
    playbtn.style.display="none";
    pausebtn.style.display="inline";
    console.log(index);
})

//previous song

console.log(backwardbtn);

backwardbtn.addEventListener("click",()=>{
    if(index<=0){
       index=7;
    }
    else{
        index-=1;
    }
    audioElement.src=`./songs/song${index+1}.mp3`;
    trackname.innerHTML=audio[index].songname;
    audioElement.play();
    videoplayer.src=video[index].video;
    videoplayer.play();
   // cont.style.opacity=0.99;
    playbtn.style.display="none";
    pausebtn.style.display="inline";
    console.log(index);
})

//click play

songlist.forEach((element)=>{
     console.log(element);
     element.addEventListener("click",(e)=>{
        console.log(e);;
        let id=element.getAttribute("id");
        console.log(id);
        audioElement.src=`./songs/song${id}.mp3`;
        trackname.innerHTML=audio[id-1].songname;
        videoplayer.src=video[id-1].video;
        videoplayer.play();
        audioElement.play();
       // cont.style.opacity=0.99;
        playbtn.style.display="none";
        pausebtn.style.display="inline";
     })
})
