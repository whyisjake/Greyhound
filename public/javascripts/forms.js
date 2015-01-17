jQuery(document).ready(function(){
	console.log('Jake was here.');
	jQuery('.submit').click(function(e) {

		console.log('Clicked!');

		// Keep the button from being clicked
		e.preventDefault();

		var $inputs = $('.addVideo :input'),
			form = {
				action : 'add_video'
			};

		$inputs.each(function() {
			form[this.name] = $(this).val();
		});

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