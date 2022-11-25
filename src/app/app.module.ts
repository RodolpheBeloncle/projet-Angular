import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParNomOnKeyUpComponent } from './rechercheParNomOnKeyUp/rechercheParNomOnKeyUp.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    RechercheParNomOnKeyUpComponent,
    SearchFilterPipe,
    ListeCategoriesComponent,
    UpdateCategorieComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
