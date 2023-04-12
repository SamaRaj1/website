"use strict";
$(document).ready(() => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	// move focus to Arrival date text box
	$('#arrival_date').focus();
	
	// handle form submission
	$('#reservation_form').submit((event) => {
	  // validate entries
	  const arrivalDate = $.trim($('#arrival_date').val());
	  const nights = $.trim($('#nights').val());
	  const name = $.trim($('#name').val());
	  const email = $.trim($('#email').val());
	  const phone = $.trim($('#phone').val());
	  
	  if (!arrivalDate || !nights || !name || !email || !phone) {
		alert('Please fill in all fields.');
		event.preventDefault(); // cancel form submission
		return;
	  }
	  
	  if (isNaN(nights)) {
		alert('Nights must be a number.');
		event.preventDefault(); // cancel form submission
		return;
	  }
	  
	  if (!emailPattern.test(email)) {
		alert('Invalid email address.');
		event.preventDefault(); // cancel form submission
		return;
	  }
	  
	  // put entries back into controls
	  $('#arrival_date').val(arrivalDate);
	  $('#nights').val(nights);
	  $('#name').val(name);
	  $('#email').val(email);
	  $('#phone').val(phone);
	});
  });
  