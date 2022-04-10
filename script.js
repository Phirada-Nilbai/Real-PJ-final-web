// NOW I CLICK album-poster TO GET CURRENT SONG ID
$(".album-poster").on('click', function(e){
    var dataSwitchId = $(this).attr('data-switch');
    //console.log(dataSwitchId);

    // and now i use aplayer switch function see
    ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

    // aplayer play function
    // when i click any song to play
    ap.play();

    // click to slideUp player see
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
    {
        name: 'O.O',
        artist: 'NMIXX',
        url: 'source/O.O.mp3',
        cover: 'images/O.O.jpg'
    },
    {
        name: 'Feel my rhythm', 
        artist: 'Red velvet', 
        url: 'source/Feel-my-rhythm.mp3', 
        cover: 'images/Feel-my-rhythm.png' 
    },
    {
        name: 'Paint the town',
        artist: 'Loona',
        url: 'source/PTT.mp3',
        cover: 'images/PTT.jpg',
    },
    {
        name: 'Super yuppers',
        artist: 'WJSN Chocome',
        url: 'source/Super yuppers.mp3',
        cover: 'images/super yuppers.jpg',
    },
    {
        name: 'LOVE DIVE',
        artist: 'IVE',
        url: 'source/LOVE DIVE.mp3',
        cover: 'images/love dive.jpg',
    },
    {
        name: 'UNNATURAL',
        artist: 'WJSN',
        url: 'source/UNNATURAL.mp3',
        cover: 'images/Unnatural.jpg',
    },

    ]
});