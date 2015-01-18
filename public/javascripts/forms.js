jQuery(document).ready(function(){
	jQuery('.submit').click(function(e) {

		console.log('Clicked!');

		// Keep the button from being clicked
		e.preventDefault();

		var $inputs = $('.addVideo :input'),
			form = {};

		$inputs.each(function() {
			form[this.name] = $(this).val();
		});

		console.log(form);

		// Make the ajax request with the form data.
		$.ajax({
			url: '/videos',
			data: form,
			type: 'POST',
			success: function(res) {
				console.log( res );
			}
		});

	});

});