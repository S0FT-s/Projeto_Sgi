// Photo gallery for the product detail page.
const photos = [
	"../../images/SEGWAY-NINEBOT NINEBOT E2 Pro E/front.webp",
	"../../images/SEGWAY-NINEBOT NINEBOT E2 Pro E/folded.jpg",
	"../../images/SEGWAY-NINEBOT NINEBOT E2 Pro E/handlebar.png"
];

const img = document.getElementById("gallery-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

function show(i) {
	index = (i + photos.length) % photos.length;
	img.src = photos[index];
	img.alt = "Segway-Ninebot E2 Pro E electric scooter, photo " + (index + 1) + " of " + photos.length;
}

if (photos.length < 2) {
	prev.hidden = true;
  	next.hidden = true;
} else {
	prev.addEventListener("click", () => show(index - 1));
	next.addEventListener("click", () => show(index + 1));
	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") show(index - 1);
		if (e.key === "ArrowRight") show(index + 1);
	});
}