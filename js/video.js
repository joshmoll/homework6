var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = "100%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down" + video.playbackRate);
	video.playbackRate = video.playbackRate * .9;
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up" + video.playbackRate);
	video.playbackRate /= .9;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead" + video.currentTime);
	if (video.currentTime < video.duration - 5) {
		video.currentTime += 5;
	}
	else {
		video.currentTime = 0;
		console.log("Back to beginning")
	}
	video.play()
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted) {
		this.innerHTML = "mute";
		video.muted = false;
	} else { 
		this.innerHTML = "unmute";
		video.muted = true;
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Current Value" + this.value);
	video.volume = this.value / 100;

document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; 
});

document.querySelector("#old").addEventListener("click", function () {
	video.classList.add("oldTime"); 
});

document.querySelector("#original").addEventListener("click", function () {
	video.classList.remove("oldTime");
});