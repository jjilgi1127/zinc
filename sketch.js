var mySound;
function setup() {
  createCanvas(1000,800);
    mySound.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySound);
  background(0);
    textSize(80);
     fill(255);
     text('To.바부바가연', 250,370);

}
function preload() {
  mySound = loadSound('123.mp3');
}


function draw() {
  fill(random(255),190,random(200,255));
  textSize(30);
  text('ZINC를 천천히 입력하세요.(컴퓨터 키보드)',220,420);
}

function keyPressed(){
   if (keyCode === 90) {
     textSize(30);
      fill(160,161,157);
      text('헤이 걸~ 광주 잘 갔남? 나 빼고 다 본가갔엉',100,100);
      textSize(50);
      fill(232,236,229);
      text('나두 곧 갈!거!야! 집밥 먹!을!거!야!',130,150);
      textSize(25);
      fill(79,84,88);
      text('참고로 우리 엄마요리는 콩나물찜이랑 오징어덮밥이랑 해물탕이 정말 마시썽 냠냠',40,700);
      } else if (keyCode === 73) {
    textSize(30);
     fill(179,157,207);
     text('암튼 정말 메리메리구리수마수야~',400,200);
            textSize(20);
     fill(100,161,157);
     text('기념으로 노래를 불러 보았어 너.만. 들으렴 깔깔깔 브금은 내 피아노 기말 과제야',100,250);

  }else if (keyCode === 68) {


  }else if (keyCode === 78) {
    textSize(20);
     fill(106,123,139);
     text('뭐라구?! 재활용 하는 거냐구?! 맞아. 내 초딩 실력을 뽐내고 싶었어',80,490);
     fill(179,197,207);
     textSize(35);
     text('우리 좀 괜찮아지면 강릉에 가자 인턴 화이팅이야이야~~~',50,550);
  }else if (keyCode === 67) {
    textSize(67);
     fill(229,44,35);
     text('♥Merry Christmas♥',120,620);
     textSize(40);
      fill(34,82,27);
      text('From.가영',620,660);

}
}
