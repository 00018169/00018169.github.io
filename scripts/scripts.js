document.querySelectorAll('.trip-offer-card').forEach((card) => {
	card.addEventListener('mouseenter', () => {
		card.style.transform = 'translateY(-10px)'
	})

	card.addEventListener('mouseleave', () => {
		card.style.transform = 'translateY(0)'
	})
})

function showSuccessModal() {
	document.getElementById('successModal').style.display = 'block'
	document.getElementById('contactForm').reset()
}

function closeModal() {
	document.getElementById('successModal').style.display = 'none'
}
