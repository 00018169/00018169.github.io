// Fade in welcome content on page load
function fadeInWelcome() {
	const welcomeContent = document.getElementById('welcomeContent')
	welcomeContent.style.opacity = '0'
	setTimeout(() => {
		welcomeContent.style.transition = 'opacity 1.1s ease-in'
		welcomeContent.style.opacity = '1'
	}, 500)
}

// Parallax effect on scroll
function initParallax() {
	window.addEventListener('scroll', () => {
		const scrolled = window.pageYOffset
		const backgroundImage = document.getElementById('backgroundImage')
		backgroundImage.style.transform = `translateY(${scrolled * 0.5}px)`
	})
}

// Hover animations for nav links
function initNavAnimations() {
	const navLinks = document.querySelectorAll('.nav-link')
	navLinks.forEach((link) => {
		link.addEventListener('mouseenter', () => {
			link.style.transition = 'color 0.3s ease'
			link.style.color = '#007bff'
		})
		link.addEventListener('mouseleave', () => {
			link.style.color = ''
		})
	})
}

// Social icons hover effect
function initSocialIconAnimations() {
	const socialIcons = document.querySelectorAll('.social-icon')
	socialIcons.forEach((icon) => {
		icon.addEventListener('mouseenter', () => {
			icon.style.transition = 'transform 0.3s ease'
			icon.style.transform = 'scale(1.0)'
		})
		icon.addEventListener('mouseleave', () => {
			icon.style.transform = 'scale(1)'
		})
	})
}

// Initialize trip offer card animations
function initTripOfferCardAnimations() {
	document.querySelectorAll('.trip-offer-card').forEach((card) => {
		card.addEventListener('mouseenter', () => {
			card.style.transform = 'translateY(-10px)'
		})

		card.addEventListener('mouseleave', () => {
			card.style.transform = 'translateY(0)'
		})
	})
}

// Initialize all animations
function initAllAnimations() {
	fadeInWelcome()
	initParallax()
	initNavAnimations()
	initSocialIconAnimations()
	initTripOfferCardAnimations()
}

document.addEventListener('DOMContentLoaded', initAllAnimations)

function closeContactModal() {
	document.getElementById('errorModal').style.display = 'none'
	document.getElementById('contactForm').reset()
}

// Validate contact form fields
function validateContactName() {
	const name = document.getElementById('contactName').value
	if (name.length < 3) {
		document.getElementById('nameError').textContent =
			'Name must be at least 3 characters long'
	}
}

function validateContactEmail() {
	const email = document.getElementById('contactEmail').value
	if (!email.includes('@')) {
		document.getElementById('emailError').textContent = 'Invalid email address'
	}
}

function validateContactSubject() {
	const subject = document.getElementById('contactSubject').value
	if (subject === '') {
		document.getElementById('subjectError').textContent =
			'Please select a subject'
	}
}

function validateContactMessage() {
	const message = document.getElementById('contactMessage').value
	if (message.length < 10) {
		document.getElementById('messageError').textContent =
			'Message must be at least 10 characters long'
	}
}

// Validate and submit contact form
function validateAndSubmitContactForm(event) {
	event.preventDefault()

	document
		.querySelectorAll('.error-message')
		.forEach((el) => (el.textContent = ''))

	let isValid = true

	validateContactName()
	validateContactEmail()
	validateContactSubject()
	validateContactMessage()

	const errors = document.querySelectorAll('.error-message')
	for (let error of errors) {
		if (error.textContent !== '') {
			isValid = false
			break
		}
	}

	if (isValid) {
		const successModal = document.getElementById('successModal')
		successModal.style.display = 'block'
		document.getElementById('contactForm').reset()
	}

	return false
}

// Close success modal
function closeSuccessModal() {
	document.getElementById('successModal').style.display = 'none'
	document.getElementById('contactForm').reset()
}
