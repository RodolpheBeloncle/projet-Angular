import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits?: Produit[];

  constructor(private produitService: ProduitService) {
    // each initialization of produits by produit service
    // this.produits = this.produitService.listeProduit();
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  // get list of produit
  chargerProduits() {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(produitId: number) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerProduit(produitId).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduits();
      });
  }
}
