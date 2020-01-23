import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  
  public recipes:Recipe[];
  constructor( 
    private _recipesService:RecipesService
    ) { }

  ngOnInit() {
   console.log('ngOninit');
   console.log(this.recipes);

  }
   ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.recipes= this._recipesService.getAllRecipes();
  }
  
  ionViewDidEnter(){
  console.log('ionViewDidEnter');
}

ionViewWillLeave(){
  console.log('ionViewWillLeave');
}
ionViewDidLeave(){
  console.log('ionViewDidLeave');
}
ngOnDestroy(){
  console.log("ngOnDestroy");
}
}