$(document).ready( function(){
$('.js-back').hide();
 newPrints ()
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
	var nombreImg = recipesArray[i].name
	var titulo = recipesArray[i].title
	var source =  recipesArray[i].source.name
	$('.title-message').append('<a class="item-recipe" href="#">'
    +'<span class="attribution">'
    +'<span class="title-recipe">'+ titulo +' </span>'
    +'<span class="metadata-recipe">'
    +'<span class="author-recipe">'
    + source + ' </span>'
    +'<span class="bookmarks-recipe">'
    +'<span class="icon-bookmark"></span>' 
    +'</span>'
    +'</span>'
    +'</span>'
    +'<img src="img/recipes/320x350/' + nombreImg + '.jpg" />'
    +'</a>'
    )
  }console.log('Voy a pintar la receta: ', recipe);
}	




/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


