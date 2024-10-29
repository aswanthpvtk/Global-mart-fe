import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  constructor(private apiService:ApiService){}
  allProducts:any=[];
  ngOnInit() {
      this.apiService.getAllProducts().subscribe({
        next:(res)=>{
          console.log("all products");
          console.log(res);
          this.allProducts=res;
        },
        error:(res)=>{
          console.log(res);
          
        }
      })
  }

  addToWishList(product:any){
    alert(product)

  }

  addToCart(product:any){
    alert(product)
  }


}
