  $(document).ready(function() {
	 	$("a[rel='galerie']").click(function(event) {
 		event.preventDefault();
 		loadPhoto($(this));
	});

	$("body").on("click", ".ancreFleche", function(event) { 
			var recup = $(this).attr("rel");
			var maPhoto = $("a[rel='galerie']")[recup];
			loadPhoto(maPhoto);
	});
	
	$(".voile").click(function(){
		$(".voile").fadeOut();
 		$(".lightbox").fadeOut();
	});

});

  function loadPhoto(maPhoto)
{
  		var index = $("a[rel='galerie']").index($(maPhoto));
		var indexplus = index+1;
		var indexmoins = index-1;

 		var ancreflechegauche = "<a rel="+indexmoins+" class = 'ancreFleche'><span class = 'fleche'> &lsaquo; </span> </a>";
  		var ancreflechedroite = "<a rel="+indexplus+" class = 'ancreFleche ancredroite'><span class = 'fleche droite'> &rsaquo; </span> </a>";
  		var monimage = "<img src="+$(maPhoto).attr('href')+">";

  		if (index == 0)
  		{
			$(".lightbox").html(monimage + ancreflechedroite);
		}
		else if (index == ($("a[rel='galerie']").length)-1)
		{
			$(".lightbox").html(ancreflechegauche + monimage);
		}
		else
		{
			$(".lightbox").html(ancreflechegauche + monimage + ancreflechedroite);
		}
		$(".voile").fadeIn("slow");
 		$(".lightbox").fadeIn("slow");
}