$(function() {
	var bannerIndex = 3;
	var showBanner = function (index) {
			index = index > 3 ? 0 : index;
			var l = index == 0 ? '0' : '-' + index + '00%';
			console.log(l);
			$(".banner-img").velocity({left:l},{ easing: "ease-in-out" });
			bannerIndex = index;
	};
	setInterval(function() {showBanner(bannerIndex + 1);},5000);
});
