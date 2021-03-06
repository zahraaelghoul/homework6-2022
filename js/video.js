var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false

})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= 0.95
	console.log("Current speed is " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= 1.05
	console.log("Current speed is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime += 15
	}
	console.log("New location " + video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)

	if (video.muted === true) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else if (video.muted === false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}

	console.log("The value of mute is " + video.muted)
})

document.querySelector("#slider").addEventListener("input", function() {
	// video.volume = this.value / 100
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
	console.log(video.volume)
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
})


