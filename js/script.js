$(document).ready(function () {

	// Adding a "JavaScript is Enabled" Body Class
	$("body").addClass("js");


	// Manipulation of Presentation Interaction

	/* Video Control */

	/* Play Video on Click */
	function playVideo() {
		$("#guestVideo")[0].play();
		console.log("Video resumed.");
	}

	/* Pause Video on Click */
	function pauseVideo() {
		$("#guestVideo")[0].pause();
		console.log("Video paused.");
	}

	/* Resize Video X2 on Click */
	function resizeVideoLarger() {
		$("#guestVideo")[0].width = 1000;
		console.log("Video width 1000.");
	}

	/* Resize Video Back to Normal on Click */
	function resizeVideoNormal() {
		$("#guestVideo")[0].width = 500;
		console.log("Video width 500.");
	}

	/* Room Type Quiz */
	function runQuiz(event) {

		/* Question One Form Input */
		var questionOne = $('input[name="room"]');
		console.log("Question One: " + questionOne);

		/* Question Two Form Input */
		var questionTwo = $('input[name="luxury"]');
		console.log("Question Two: " + questionTwo);

		/* Question Three Form Input */
		var questionThree = $('input[name="people"]');
		console.log("Question Three: " + questionThree);

		/* Room Type Message to be displayed */
		var roomType = "";

		/* Question One Form Input Value */
		var questionOneAnswer = "";

		/* Question Two Form Input Value */
		var questionTwoAnswer = "";

		/* Question Three Form Input Value */
		var questionThreeAnswer = "";

		/* For each radio box in a question, find the checked box and set value*/
		for (var i = 0; i < 4; i++) {
			if (questionOne[i].checked) {
				questionOneAnswer = questionOne[i].value;
			}

			if (questionTwo[i].checked) {
				questionTwoAnswer = questionTwo[i].value;
			}

			if (questionThree[i].checked) {
				questionThreeAnswer = questionThree[i].value;
			}
		}

		/* Display suite as option if  matches suite criteria and change HTML to match */
		if ((questionOneAnswer == "view" || questionOneAnswer == "luxury" || questionOneAnswer == "space")
			&& (questionTwoAnswer == "yes" || questionTwoAnswer == "maybe") && questionThreeAnswer != "") {

			roomType = "It's a match! Our Athena's Suites would be perfect for you."
			$("#room-quiz .results").html(roomType);

		} else if (questionOneAnswer == "" || questionTwoAnswer == "" || questionThreeAnswer == "") {

			/* Change button text if quiz is not completed */
			$('button[type="submit"]').html("Try Again");

		} else { /* Display room as option otherwise and change html to match */

			roomType = "You should definitely check out our Erichthonius Suites! They are spacious and come in one and two bedroom sizes."
			$("#room-quiz .results").html(roomType);

		}

		/* Remove button default proccess */
		event.preventDefault();

	}

	// Creation of Content Interaction

	/* Modal Images */

	/* Allow user to view images in larger size with greater detail*/
	function openModalImage() {

		/* Show modal display */
		$('.modal')[0].style.display = "block";

		/* Set and show modal image */
		$("#image")[0].src = this.src;

		/* Set and show modal caption as alt */
		$("#caption")[0].innerHTML = this.alt;

		/* Remove default proccess */
		event.preventDefault();

	}

	function closeModalImage() {

		/* Hide modal display */
		$('.modal')[0].style.display = "none";

		/* Remove default proccess */
		event.preventDefault();

	}

	// Dynamic Navigation Interaction

	/* Allow for expansion and closure of all accordion menus */
	function toggleAccordionMenu() {

		/* Toggle expanded class to accordion menu  for icon changes*/
		this.classList.toggle("expanded");

		/* Allow for expansion and closure of accordion menu */
		var dropdown = this.nextElementSibling;

		/* Open and close (display) accordion menus */
		if (dropdown.style.display != "block") {
			dropdown.style.display = "block";
		} else {
			dropdown.style.display = "none";
		}

		console.log("Accordion menu clicked.");
	}

	/* Hamburger Mobile Menu that opens/closes (toggle) when someone clicks on hamburger menu icon */
	function toggleMobileNav() {

		/* Toggle opening and closing mobile nav */
		$("#mobileNav").toggle();

		var iconClass = $(".icon i");

		/* Show a cross icon if mobile menu is open to signify that menu can be closed */
		if ($("#mobileNav")[0].style.display == "block") {
			iconClass.removeClass("fa fa-bars");
			iconClass.addClass("fa fa-times");
			iconClass.innerHTML = "Swapped text!";
		} else {
			iconClass.removeClass("fa fa-times");
			iconClass.addClass("fa fa-bars");
		}

		console.log("Mobile menu clicked.");
	}


	// Manipulation of Content Interaction

	/* Booking Form Validation */
	function submitBookingForm(event) {

		/* Name Form Input */
		var fullName = $("#form-full-name").val();

		/* Email Form Input */
		var email = $("#form-email").val();

		/* Validation Boolean */
		var validated = new Boolean(false);

		/* Phone Form Input */
		var phone = $("#form-phone").val();

		/* Country Form Input */
		var country = $("#form-country").val();

		/* Arrival Form Option */
		var arrival = $('input[type="date"]').val();

		/* Departure Form Option */
		var departure = $("#form-departure").val();

		/* Card Name Form Input */
		var cardName = $("#form-card-name").val();

		/* Card Number Form Input */
		var cardNumber = $("#form-card-number").val();

		/* Expiry Month Form Option */
		var expMonth = $("#form-exp-month").val();

		/* CVC Form Input */
		var cvc = $("#form-card-cvc").val();

		/* Discount Code Input */
		var code = $("#form-code").val();

		/* Email ID Format */
		var emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		/* Validate form based on important personal and booking information */
		if (fullName != "" && email != "" && phone != "" && country != "" && cardName != "" && cardNumber != ""
			&& cvc != "" && arrival != "" && departure != "" && expMonth != ""
			&& (arrival < departure) && emailForm.test(email) == true && (cvc.length <= 5 && cvc.length >= 3)
			&& (cardNumber.length <= 19 && cardNumber.length >= 8) && (code == "" || code == "ATHENA20" || code == "BOOKING10")) {

			/* Validate boolean true when form validation conditions are met */
			validated = true;

			/* Disable button if form is validated and show booking confirmation text */
			$('button[type="submit"]').html("Thank you! Your booking has been confirmed!");
			$('button[type="submit"]').attr("disabled", true);

		} else {

			/* Change button text if form is not validated */
			$('button[type="submit"]').html("Please Check Highlighted Field");

		}

		/* Print to console if form is or is not validated */
		if (validated == true) {
			console.log("Validate Form");
		} else {
			console.log("Form Not Validated");
		}

		/* Add error class if form input/option is not completed */
		if (fullName == "") {
			$("#form-full-name").addClass("error");
			$("#form-full-name").closest().addClass("error");
		} else if (emailForm.test(email) != true) {
			$("#form-email").addClass("error");
			$("#form-email").closest().addClass("error");

			/* Alert user if email is invalid */
			alert("Please enter a valid email address. (i.e. info@athenaresort.gr, in.fo@athenaresort.gr or info@athenaresort.com.au)");

		} else if (phone == "") {
			$("#form-phone").addClass("error");
			$("#form-phone").closest().addClass("error");
		} else if (country == "") {
			$("#form-country").addClass("error");
			$("#form-country").closest().addClass("error");
		} else if (arrival == "") {
			$("#form-arrival").addClass("error");
			$("#form-arrival").closest().addClass("error");
		} else if (arrival > departure) {
			$("#form-departure").addClass("error");
			$("#form-departure").closest().addClass("error");

			/* Alert user if departure date is earlier than arrival date */
			alert("Departure date cannot be before arrival date.");

		} else if (code != "" && code != "ATHENA20" && code != "BOOKING10") {
			$("#form-code").addClass("error");
			$("#form-code").closest().addClass("error");

			/* Alert user if they have entered an invalid discount code */
			alert("Please enter a valid discount code.");

		} else if (cardName == "") {
			$("#form-card-name").addClass("error");
			$("#form-card-name").closest().addClass("error");
		} else if ((cardNumber.length > 19 || cardNumber.length < 8)) {
			$("#form-card-number").addClass("error");
			$("#form-card-number").closest().addClass("error");

			/* Alert user if card number is invalid (between 8 and 19 digits) */
			alert("Card number is " + cardNumber.length + " digits long. Please enter a valid card number between 8 and 19 digits.");

		} else if (expMonth == "") {
			$("#form-exp-month").addClass("error");
			$("#form-exp-month").closest().addClass("error");
		} else if ((cvc.length > 5 || cvc.length < 3)) {
			$("#form-card-cvc").addClass("error");
			$("#form-card-cvc").closest().addClass("error");

			/*Alert user if CVC is invalid (between 3 and 5 digits) */
			alert("CVC number is " + cvc.length + " digits long. Please enter a valid CVC of between 3 and 5 digits.");
		}

		/* Remove button default proccess */
		event.preventDefault();
	}

	/* Contact Form Validation */
	function submitContactForm(event) {

		/* Validation Boolean */
		var validated = new Boolean(false);

		/* Name Form Input */
		var fullName = $("#form-full-name").val();

		/* Email Form Input */
		var email = $("#form-email").val();

		/* Message Form Input */
		var message = $("#form-comments").val();

		/* Email ID Format */
		var emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		/* Validate form based on important personal and booking information */
		if (fullName != "" && email != "" && emailForm.test(email) == true && message != "") {

			/* Validate boolean true when form validation conditions are met */
			validated = true;

			/* Disable button if form is validated and show message confirmation text */
			$('button[type="submit"]').html("Thank you! Your message has been sent!");
			$('button[type="submit"]').attr("disabled", true);

		} else {

			/* Change button text if form is not validated */
			$('button[type="submit"]').html("Please Check Highlighted Field");

		}

		/* Print to console if form is or is not validated */
		if (validated == true) {
			console.log("Validate Form");
		} else {
			console.log("Form Not Validated");
		}

		/* Add error class if form input is not completed */
		if (fullName == "") {
			$("#form-full-name").addClass("error");
			$("#form-full-name").closest().addClass("error");
		} else if (emailForm.test(email) == false) {
			$("#form-email").addClass("error");
			$("#form-email").closest().addClass("error");

			/* Alert user if email is invalid */
			alert("Please enter a valid email address. (i.e. info@athenaresort.gr, in.fo@athenaresort.gr or info@athenaresort.com.au)");

		} else if (message == "") {
			$("#form-comments").addClass("error");
			$("#form-comments").closest().addClass("error");
		}
		/* Remove button default proccess */
		event.preventDefault();
	}

	// Creation of Content: Coupon PopUp

	/* Show Coupon Pop-Up */
	function showPopUp() {
		$("#popup")[0].style.display = "block";
		console.log("Popup opened.");
	}

	/* Show Coupon Pop-Up after 2 seconds*/
	function showTimedPopUp() {
		setTimeout(showPopUp, 2000);
	}

	/* Close Coupon Pop-Up */
	function closePopUp() {
		$("#popup")[0].style.display = "none";
		console.log("Popup closed.");
	}

	// On click, show timed pop-up as an easter egg after clicking main home page logo, enlarging tour video or enlarging the Athena's suite photo
	$(".banner-title, .video-controls #coupon, #athenas-suite-img").click(showTimedPopUp);

	// Close pop-up by clicking the cross
	$(".exit").click(closePopUp);

	// On click, open modal image or slideshow image
	$("#main-info img, #slideshow img").click(openModalImage);

	// On click, close modal image
	$(".close").click(closeModalImage);

	// On click, play video
	$("#video .video-controls button:first-child").click(playVideo);

	// On click, pause video
	$("#video .video-controls button:nth-child(2)").click(pauseVideo);

	// On click, resize video larger
	$("#video .video-controls button:nth-child(3)").click(resizeVideoLarger);

	// On click, return video back to original size
	$("#video .video-controls button:nth-child(4)").click(resizeVideoNormal);

	// On click, toggle mobile menu
	$("#main-menu .icon").click(toggleMobileNav);

	// On click, submit quiz answers
	$("#room-quiz").submit(runQuiz);

	// On click, submit contact form
	$(".contact-form").submit(submitContactForm);

	// On click, submit booking form
	$("#booking-info").submit(submitBookingForm);

	// On click, open or close accordion menu
	$(".accordion-button").click(toggleAccordionMenu);

	// Remove error class if form input has keydown and return to original button message
	$("#form-full-name, #form-email, #form-comments, #form-phone, #form-country, #form-code, #form-card-name, #form-card-number, #form-card-cvc").keydown(function () {
		$(this).removeClass("error").closest("label").removeClass("error");
		$('button[type="submit"]').html("Submit");
	});

	// Remove error class if form selection has keydown and return to original button message
	$("#form-arrival, #form-departure, #form-exp-month").change(function () {
		$(this).removeClass("error").closest("label").removeClass("error");
		$('button[type="submit"]').html("Submit");
	});

});