$(document).ready( function(){
$('.js-back').hide();
 newPrints ();
 renderActivities(activities);
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

function newPrints (){
	$('.callout-news p').append('Nuevas recetas');
}


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0;i < recipesArray.length; i++){
		if (recipesArray[i].highlighted == true) {
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	for (var i = 0; i < recipesArray.length; i++) {
		var nameImg = recipesArray[i].name;
		var title = recipesArray[i].title;
		var autor = recipesArray[i].source.name;
		$('.list-recipes').append('<a class="item-recipe" href="#">'
		+ '<span class="attribution">'
		+ '<span class="title-recipe">'+ title +'</span>'
		+ '<span class="metadata-recipe">'
		+ '<span class="author-recipe">'+ autor + '</span>'
		+ '<span class="bookmarks-recipe">'
		+ '<span class="icon-bookmark"></span>'
		+ '</span>'
		+ '</span>'
		+ '</span>'
		+'<img src="img/recipes/320x350/' + nameImg +'.jpg" />'
		+ '</a>'
)
	}
	
	console.log('Voy a pintar la receta: ', recipe);
	
};
/*
* Función que se encarga de pintar todas las actividades
*/

var renderActivities = (function(activitiesArray) {
  for (var i = 0; i < activitiesArray.length; i++) {
    renderActivity(activitiesArray[i]);
  }
  if (activitiesArray.length > 0) {
    $(".wrapper-message").remove();
  }
  console.log('Activities: ', activitiesArray);
});

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	$('.list-recipes').append('<a href="#" class="item-activity">'
    +'<span class="attribution">'
    +'<span class="avatar">'
    +'<img src="' + recipe.userAvatar + '" class="image-avatar">'
    +'</span>'
    +'<span class="meta">'
    +'<span class="author">' + recipe.userName
    + '</span> made '
    +'<span class="recipe">' + recipe.recipeName 
    +'</span>:' + recipe.text 
    +'<span class="location">' + recipe.place
    +'</span></span>'
    +'</span>'
    +'<div class="bg-image" style="background-image: url(' + recipe.image + ');">'
    + '</div></a>'
    )console.log(recipe);
}


