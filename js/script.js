  $(document).ready(function() {
	 	$("a[rel='galerie']").click(function(event) {
 		event.preventDefault();
 		loadPhoto($(this));
	});
	 /*	On cache les paragraphes pour les demarches*/
	 	$("#famille").hide();
	 	$("#sante").hide();
	  	$("#travail").hide();
	  	$("#papiers").hide();
	  	$("#logement").hide();

	$("body").on("click", ".ancreFleche", function(event) { 
			var recup = $(this).attr("rel");
			var maPhoto = $("a[rel='galerie']")[recup];
			loadPhoto(maPhoto);
	});
	
	$(".voile").click(function(){
		$(".voile").fadeOut();
 		$(".lightbox").fadeOut();
	});
	/*	---------------DEMARCHES ----------------------	*/

	$("#familleB").click(function() {
		$("#famille").fadeIn();
	});

	$("#familleB2").click(function() {
		$("#famille").fadeOut();
	});

	$("#santeB").click(function() {
		$("#sante").fadeIn();
	});

	$("#santeB2").click(function() {
		$("#sante").fadeOut();
	});

	$("#travailB").click(function() {
		$("#travail").fadeIn();
	});

	$("#travailB2").click(function() {
		$("#travail").fadeOut();
	});

	$("#papiersB").click(function() {
		$("#papiers").fadeIn();
	});

	$("#papiersB2").click(function() {
		$("#papiers").fadeOut();
	});

	$("#logementB").click(function() {
		$("#logement").fadeIn();
	});

	$("#logementB2").click(function() {
		$("#logement").fadeOut();
	});

	$("#allshow").click(function() {
		$("#famille").fadeIn();
		$("#sante").fadeIn();
		$("#travail").fadeIn();
		$("#papiers").fadeIn();
		$("#logement").fadeIn();
	});

	$("#allhide").click(function() {
		$("#famille").fadeOut();
		$("#sante").fadeOut();
		$("#travail").fadeOut();
		$("#papiers").fadeOut();
		$("#logement").fadeOut();
	});

	/*	---------------FIN DEMARCHES ----------------------	*/
});

  function loadPhoto(maPhoto)
{
  		var index = $("a[rel='galerie']").index($(maPhoto));
		var indexplus = index+1;
		var indexmoins = index-1;

 		var ancreflechegauche = "<a rel="+indexmoins+" class = 'ancreFleche'><span class = 'fleche'> &lsaquo; </span> </a>";
  		var ancreflechedroite = "<a rel="+indexplus+" class = 'ancreFleche ancredroite'><span class = 'fleche droite'> &rsaquo; </span> </a>";
  		var monimage = "<img src="+$(maPhoto).attr('href')+" class='photofiltre' >";

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