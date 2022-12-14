import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParNomOnKeyUpComponent } from './rechercheParNomOnKeyUp/rechercheParNomOnKeyUp.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'addProduit', component: AddProduitComponent },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: 'rechercheParCategorie', component: RechercheParCategorieComponent },
  { path: 'listeCategories', component: ListeCategoriesComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  {
    path: 'rechercheParNomOnKeyUp',
    component: RechercheParNomOnKeyUpComponent,
  },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
