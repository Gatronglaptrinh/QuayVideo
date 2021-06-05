var player=document.querySelector('#player');
var playbutton=document.querySelector('#playbutton');
var volumebutton=document.querySelector('#volume');
var loopbutton=document.querySelector('#loop');
var progress=document.querySelector('#progress')
var progressbar=document.querySelector('#progressbar');
let asasa = document.getElementById('ad');
var duration=0; // đây là thời lượng nhạc

// Hé lo xin chào các bạn 
// phần này mình tiếp tục làm các chức năng đơn giản bằng JS thuần nhé
// Ok các bạn khai báo lấy mấy cái nút đồ ra để đập đá nha :)
// à mình quên chỉnh cái này
// ok bắt đầu thôi

loopbutton.addEventListener('click',function(){
    //player.loop=true;
    // cái này để cho nhạc nó loop khi hết bài
    // nhưng mà ở đây mình sẽ k làm loop mà làm phát lại từ 0s cho vui nha
    player.currentTime=0;
    player.play();
    playbutton.classList.replace('fa-play-circle','fa-pause-circle');
})
// vậy là ok nhé

playbutton.addEventListener('click',function(){
    // ở đây mình sẽ làm khi click vô thì sẽ biến đổi thành hình pause
    // khi nó là pause thì nó sẽ biến đổi ngược lại
    // và chơi nhạc (tổng cộng 3 yc)
    // classlist để lấy danh sách class của element đó
    // contains xem nó chứa class đó k
    if(this.classList.contains('fa-play-circle')){
        this.classList.replace('fa-play-circle','fa-pause-circle');
        // nếu nó là nút play thì đổi class để biến nó thành nút pause
        player.play();
    }else{
        this.classList.replace('fa-pause-circle','fa-play-circle');
        // nếu là nút pause thì đổi ngc lại
        player.pause();
    }
})
// ok v là xong nhưng hiện giờ mới nghe nhạc và pause nhạc mình tiếp tục nhé

volumebutton.addEventListener('click',function(){
    if(this.classList.contains('fa-volume-up')){
        this.classList.replace('fa-volume-up','fa-volume-mute');
        player.volume=0;
    }else{
        this.classList.replace('fa-volume-mute','fa-volume-up');
        player.volume=1;
    }
    // ở đây tương tự như nút play 
    // mình chỉ hướng dẫ cơ bản mute và bật volume còn phần tăng giảm âm lượng khi khác mình sẽ hướng dẫn
})
// ok dễ mà đúng k mình tiếp tục nhé
function sa() {
	duration=player.duration; // ở đây mình sẽ lấy dc lượng nhạc tuy nhiên các bạn sẽ gặp vấn đề
    let min=Math.floor(duration/60);
    let sec=Math.floor(duration%60);
    document.getElementById('durtime').innerText=(min<10?'0'+min:min)+':'+(sec<10?'0'+sec:sec);
}
player.onloadedmetadata=function(){
    // đây là sự kiện mà player load 
    sa();
}

player.addEventListener('timeupdate',function(){
    curtime=this.currentTime;
    var min=Math.floor(curtime/60);
    var sec=Math.floor(curtime%60);
    document.getElementById('curtime').innerText=(min<10?'0'+min:min)+':'+(sec<10?'0'+sec:sec);
    var percent=curtime*100/duration;
    progress.style.width=percent+'%';
    // này tương tự trên nhé nhưng làm cho curtime thời điểm hiện tại của nhạc
})
// ok rồi ^^ bây giờ làm cho các thanh chạy thôi

var down=false; //biến n để xem mình có nhấn chuột chưa
progressbar.addEventListener('click',function (e) {
    progress.style.width=e.offsetX+'px';
    // ở đây mình sẽ set cho thanh process là bằng khoảng cách của event so với thằng cha
    var percent=e.offsetX*100/progressbar.offsetWidth;// này là tính % so với thanh cha để set lại thời gian cho player
    player.currentTime=percent*duration/100;
  })
progressbar.addEventListener('mousedown',function(){
    down=true;
})
progressbar.addEventListener('mouseup',function(){
    down=false;
})
progressbar.addEventListener('mouseout',function(){
    down=false;
})
progressbar.addEventListener('mousemove',function(e){
    if(down==true){
        progress.style.width=e.offsetX+'px';
        var percent=e.offsetX*100/progressbar.offsetWidth;
        player.currentTime=percent*duration/100;
    }
})
