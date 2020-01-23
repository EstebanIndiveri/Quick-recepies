import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private _recipes:Recipe[]=[
    {
      id:'1',
      title:'Hamburguesa',
      imageUrl:'https://279340-865961-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/01/receta-hamburguesa-americana-1024x588.jpeg',
      ingredients:['Pan','Cebolla','Pepino','Lechuga','Carne vacuna'],
    },
    {
      id:'2',
      title:'Spaghetti',
      imageUrl:'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg',
      ingredients:['Pasta','Salsa de tomate','Carne molida','Cebolla de verdeo'],
    },
    {
      id:'3',
      title:'Pizza',
      imageUrl:'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg',
      ingredients:['Harina de trigo','Harina de maíz','Agua tibia','Aceite de girasol o de oliva','lLevadura','Sémola de trigo (polenta)','Sal','Mozzarella','Pepperoni'],
    },
    {
      id:'4',
      title:'Milanesas',
      imageUrl:'https://www.196flavors.com/wp-content/uploads/2018/12/milanesa-7-FP.jpg',
      ingredients:['Solomillo de ternera','Huevos batidos','Pan rallado','Dientes de ajo picados','Perejil picado','Sal','Aceite vegetal'],
    },
    {
      id:'5',
      title:'Empanadas',
      imageUrl:'http://www.lasaltena.com.ar/Image/RecipeImage?imageId=494',
      ingredients:['Tapas de Empanadas Hojaldradas','Cebolla','Cebolla de verdeo','Carne picada','Comino','Huevos duros'],
    },
    {
      id:'6',
      title:'Fajitas',
      imageUrl:'https://okdiario.com/img/2015/10/05/fajitas-de-ternera-655x368.jpg',
      ingredients:['Tiritas de pollo','Pimiento verde','Pimiento rojo','Cebolla','Aceite de oliva','Sal','Pimienta molida']
    },
    {
      id:'7',
      title:'Ensalada Waldorf',
      imageUrl:'https://s1.eestatic.com/2015/04/25/cocinillas/Cocinillas_28507179_116163465_1024x576.jpg',
      ingredients:['Lechuga','Manzana verde','Ramas de apio','Nueces sin cáscara','Arándanos secos o pasas','Mayonesa','Mostaza francesa'],
    }
  ];

  constructor() {}

  getAllRecipes(){
    console.log(222)
    return [... this._recipes];
  }

  getRecipe(recipeID:String){
    return {
      ...this._recipes.find(recipe=>{
      return recipe.id===recipeID;
      })
    };
  };

  deleteRecipe(recipeId:String){
    this._recipes=this._recipes.filter(recipe=>{
      return recipe.id !== recipeId;
    })
  }

}


