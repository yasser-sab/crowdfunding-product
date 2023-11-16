const hamburger = document.querySelector('.hero__hamburger'),
		overlay = document.querySelector('.overlay');

console.log();

hamburger.addEventListener('click',event=>{
	let element = event.target,
		parent = hamburger.parentElement,
		helper = 'isActive';
	parent.classList.toggle(helper);
	// !overlay.classList.contains(helper)?overlay.classList.add(helper):overlay.classList.remove(helper);
});