import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productData:any;
  constructor(private router:ActivatedRoute,private apiService:ApiService){}

  ngOnInit(): void {
      this.router.params.subscribe((res:any)=>{
        const id=res.id
        console.log(id);
        this.grtProductById(id)
        
      })
  }

  grtProductById(id:any){
   this.apiService.getAllProductsById(id).subscribe({
   next:(res)=>{
    console.log("Products details");
    console.log(res);
    this.productData=res;
   },
   error:(res)=>{
    console.log(res);
   }
   })
  }

  addToWishlist(product:any){
    alert(product)

  }

  addToCart(product:any){
    alert(product)
  }

}
