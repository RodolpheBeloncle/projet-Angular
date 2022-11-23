import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-rechercheParNomOnKeyUp',
  templateUrl: './rechercheParNomOnKeyUp.component.html',
  styles: [],
})
export class RechercheParNomOnKeyUpComponent implements OnInit {
  produits!: Produit[];
  IdCategorie!: number;
  categories!: Categorie[];
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService: ProduitService) {
    // each initialization of produits by produit service
    // this.produits = this.produitService.listeProduit();
  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.allProduits = prods;
    });
    this.chargerProduits();
  }

  // get list of produit (refresh page )
  chargerProduits() {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.produits = prods;
    });
  }

  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter((item) =>
      item.nomProduit.toLowerCase().includes(filterText)
    );
  }
}
