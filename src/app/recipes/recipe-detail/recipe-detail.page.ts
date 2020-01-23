import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  public loadRecipe:Recipe;

  constructor(

  private activatedRoute:ActivatedRoute,
  private recipesService:RecipesService,
  private router: Router,
  private alertCrtl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap){
        console.log('error')
        //redirect to 
      }
      const recipeID=paramMap.get('recipeId');
      this.loadRecipe= this.recipesService.getRecipe(recipeID);
      console.log(this.loadRecipe)
    });
  }
   deleteRecipe(){
     this.alertCrtl.create({
       header:'¿Estas seguro de eliminar la receta?',
       message:'La receta se eliminará definitivamente',
       buttons:[{
         text:'Cancelar',
         role:'cancel'
       },{
         text:'Eliminar',
         handler:()=>{

          this.recipesService.deleteRecipe(this.loadRecipe.id);
          this.router.navigate(['/recipes']);

         }
       }
      ]
     }).then(alertEl=>{
       alertEl.present()
     })
     
   
  }

  ngOnDestroy(){
    console.log('OnDestroy');
  }
}


// this.activatedRoute.paramMap.subscribe(paramMap=>{
//   if(!paramMap.has('recipeId')){
//     //redirect to 
//     return;
//   }
//   const recipeId=paramMap.get('recipeId');
//   this.loadRecipe= this.recipesService.getRecipe(recipeId);
// });
// }