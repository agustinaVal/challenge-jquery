$(document).ready( function(){
$('.js-menu').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});
  $(".js-show-make").click(function() {
  $("#drop").addClass("make");
  $(".js-show-make").addClass("active");
  $(".js-show-recipe").removeClass("active");
  });

  $(".js-show-recipe").click(function() {
  $("#drop").removeClass("make");
  $(".js-show-make").removeClass("active");
  $(".js-show-recipe").addClass("active");
});