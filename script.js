// set language
var _lang = "en";
 
// define translations
var title = {
  en: "Save Me", 
  ko: "Save Me", 
  ro: "Cupcakes"};
 
var lyrics = {
  en: "I want to breathe, I hate this night<br>I want to wake up, I hate this dream<br>I’m trapped inside of myself and I’m dead<br>Don’t wanna be lonely<br>Just wanna be yours<br>Why is it so dark where you’re not here<br>It’s dangerous how wrecked I am<br>Save me because I can’t get a grip on myself<br>Listen to my heartbeat<br>It calls you whenever it wants to<br>Because within this pitch black darkness<br>You are shining so brightly<br>Give me your hand save me save me<br>I need your love before I fall, fall<br>Give me your hand save me save me<br>I need your love before I fall, fall<br>Give me your hand save me save me<br>Give me your hand save me save me<br>Save me, save me<br>Today the moon shines brighter on the blank spot in my memories<br>It swallowed me, this lunatic, please save me tonight<br>(Please save me tonight, please save me tonight)<br>Within this childish madness you will save me tonight<br>I knew that your salvation<br>Is a part of my life and the only helping hand that will embrase my pain<br>The best of me, you’re the only thing I have<br>Please raise your voice so that I can laugh again<br>Play on <br>Listen to my heartbeat, it calls you whenever it wants to<br> Because within this pitch black darkness, you are shining so brightly<br>Give me your hand save me save me<br>I need your love before I fall, fall<br>Give me your hand save me save me<br>I need your love before I fall, fall<br>Give me your hand save me save me<br>Give me your hand save me save me<br>Thank you for letting me be me<br>For helping me fly<br>For giving me wings<br>For straightening me out<br>For waking me from being suffocated<br>For waking me from a dream which was all I was living in<br>When I think of you the sun comes out<br>So I gave my sadness to the dog<br>(Thank you. For being ‘us’)<br>Give me your hand save me save me<br>I need your love before I fall, fall<br>Give me your hand save me save me<br>I need your love before I fall, fall",
  ko: "난 숨쉬고 싶어 이 밤이 싫어<br>이젠 깨고 싶어 꿈속이 싫어<br>내 안에 갇혀서 난 죽어있어<br>Don’t wanna be lonely<br>Just wanna be yours<br>왜 이리 깜깜한 건지 <br>니가 없는 이 곳은<br>위험하잖아 망가진 내 모습<br>구해줘 날 나도 날 잡을 수 없어<br>내 심장소릴 들어봐<br>제멋대로 널 부르잖아<br>이 까만 어둠 속에서<br>너는 이렇게 빛나니까<br>그 손을 내밀어줘 save me save me<br>I need your love before I fall fall<br>그 손을 내밀어줘 save me save me<br>I need your love before I fall fall<br>그 손을 내밀어줘 save me save me<br>그 손을 내밀어줘 save me save me<br>Save me save me<br>오늘따라 달이 빛나 내 기억 속의 빈칸<br>날 삼켜버린 이 lunatic <br>please save me tonight<br>Please save me tonight <br>please save me tonight<br>이 치기 어린 광기 속 <br>나를 구원해줄 이 밤<br>난 알았지 너란 구원이 <br>내 삶의 일부며 아픔을 <br>감싸줄 유일한 손길 <br>The best of me 난 너밖에 없지 <br>나 다시 웃을 수 있도록 더 높여줘 <br>니 목소릴<br>Play on<br>내 심장소릴 들어봐 <br>제멋대로 널 부르잖아<br>이 까만 어둠 속에서 <br>너는 이렇게 빛나니까<br>그 손을 내밀어줘 save me save me<br>I need your love before I fall fall<br>그 손을 내밀어줘 save me save me<br>I need your love before I fall fall<br>그 손을 내밀어줘 save me save me<br>그 손을 내밀어줘 save me save me<br>고마워 내가 나이게 해줘서<br>이 내가 날게 해줘서<br>이런 내게 날갤 줘서<br>꼬깃하던 날 개 줘서<br>답답하던 날 깨줘서<br>꿈 속에만 살던 날 깨워줘서<br>널 생각하면 날 개어서<br>슬픔 따윈 나 개 줬어<br>Thank you 우리가 돼 줘서<br>그 손을 내밀어줘 save me save me<br>I need your love before I fall fall<br>그 손을 내밀어줘 save me save me<br>I need your love before I fall fall<br>", 
  ro: "Cupcake ipsum dolor sit amet. Toffee icing fruitcake dessert tart donut. Carrot cake tiramisu pudding. Lollipop cotton candy candy gummi bears cupcake pastry brownie. Powder candy canes cookie icing chocolate bar sesame snaps. Pudding sweet dessert cake. Cookie soufflé muffin. Cookie tiramisu gingerbread bear claw croissant gummies dessert sweet roll caramels. Soufflé jelly beans wafer macaroon. Cookie halvah sweet. Oat cake dessert sesame snaps. Liquorice cake wafer fruitcake gummies. Gummies jelly beans halvah candy canes bonbon."};
function start() {
 document.getElementById("Title").innerHTML = title[_lang];
 document.getElementById("Lyrics").innerHTML = lyrics[_lang];
}

 function LangKo() {
	_lang = "ko";
	if(_lang == "ko") {
	 document.getElementById("Title").innerHTML = title[_lang];
 	 document.getElementById("Lyrics").innerHTML = lyrics[_lang];
	}
}

 function LangEn() {
	_lang = "en";
	if(_lang == "en") {
	 document.getElementById("Title").innerHTML = title[_lang];
 	 document.getElementById("Lyrics").innerHTML = lyrics[_lang];
	}
}

 function LangRo() {
	_lang = "ro";
	if(_lang == "ro") {
	 document.getElementById("Title").innerHTML = title[_lang];
 	 document.getElementById("Lyrics").innerHTML = lyrics[_lang];
	}
}

// document.getElementById("en").onclick = LangEn();
// document.getElementById("ko").onclick = LangKo();
// document.getElementById("ro").onclick = LangRo();

// document.getElementById("en").onclick = Lang("en");
// document.getElementById("ko").onclick =Lang("ko");
// document.getElementById("ro").onclick = Lang("ro");


