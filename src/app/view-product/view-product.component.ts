import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
      this.router.params.subscribe((res:any)=>{
        const id=res.id
        console.log(id);
        this.grtProductById(id)
        
      })
  }

  grtProductById(id:any){

  }

}
