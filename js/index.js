/*==============================*/
//     * author -> Print        //
//     * QQ -> 2662256509       //
/*=============================*/
require.config({
    paths : {
    	"swiper" : "./lib/swiper-3.4.2.min"
    },
    waitSeconds: 0
});
require(["swiper"], function(swiper){
	//swiper
	var mainSwiper = new Swiper("#main-swiper", {
		autoplay : 20000,
		autoplayDisableOnInteraction : false,
		//button
		prevButton : ".swiper-button-prev",
		nextButton : ".swiper-button-next",
		//progress
		pagination : ".swiper-pagination",
		paginationType : "progress"
	});
	
});
