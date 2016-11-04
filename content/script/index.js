
var bannerIndex = 3;
var showBanner = function (index) {
		index = index > 3 ? 0 : index;
		var l = index == 0 ? '0' : '-' + index + '00%';
		//console.log(l);
		$("#banner-tab" + bannerIndex).css("background-color","#eeefff");
		$("#banner-tab" + index).css("background-color","#00eeff");
		$(".banner-img").velocity({left:l},{ easing: "ease-in-out" });
		bannerIndex = index;
};

$(function() {
	setInterval(function() {showBanner(bannerIndex + 1);},5000);
});
