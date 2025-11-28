import { HttpClient } from '@angular/common/http';
import { Component, inject,ChangeDetectorRef } from '@angular/core';
import { CategoryModule } from '../../models/category/category-module';
import { CartModule } from '../../models/cart/cart-module';
 
 
@Component({
  selector: 'app-cakes',
  imports: [],
  templateUrl: './cakes.html',
  styleUrl: './cakes.css',
})
 
export class Cakes {
  private http = inject(HttpClient);
  categories: CategoryModule[] = [];
  cakes: any[] = [];
  model: CartModule = new CartModule(); 
constructor(private cd: ChangeDetectorRef) {
  this.getCategories();
  this.getCakes();
}
   
   getCategory(categoryId?: number): void  {
    debugger;
    if(categoryId){
      this.http
        .get<any[]>('https://lalitcakeshop.up.railway.app/api/cakes/category/' + categoryId)   
        .subscribe((data: any) => {
            this.cakes = data;
            this.cd.detectChanges();   // FIX
        }); 
    } else {
      this.getCakes();
    }
    
  }

  getCategories() {
    this.http
      .get<any[]>('https://lalitcakeshop.up.railway.app/api/categories')
      .subscribe((data: any) => {
        this.categories = data.items;
        const allCate = new CategoryModule();
        allCate.categoryId = 0;
        allCate.categoryName = "All";
        this.categories.unshift(allCate);     
         this.cd.detectChanges();   // FIX
      }); 
    
  }

  getCakes() {
    this.http
      .get<any[]>('https://lalitcakeshop.up.railway.app/api/cakes')
      .subscribe((data: any) => {
        this.cakes = data.items;
        console.log(this.cakes);
        this.cd.detectChanges();   // FIX
      }); 
    
  }

  addToCart() {
    return this.http
      .post('https://lalitcakeshop.up.railway.app/api/cakes/add',this.model).subscribe({
         next: (response) => {
        console.log("Saved!", response);
        alert("Added to Cart Successfully!");
      },
      error: (err) => {
        console.error("Error:", err);
      }
      });
    
  }
}
