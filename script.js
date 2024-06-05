const menuIcon = document.querySelectorAll('.menu-icons'),
	navLinks = document.querySelectorAll('.nav-links'),
	year = document.querySelector('.year');

const thisYear = new Date().getFullYear();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

for (const icon of menuIcon) {
	icon.addEventListener('click', () => {
		navLinks.forEach(e => {
			e.classList.toggle('show');
		});
	});
}
