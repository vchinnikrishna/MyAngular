import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './products';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string  = "Product Details"
  product: IProduct | undefined;
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const Id =Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${Id}`;
    this.product ={
      'productId' : Id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 09, 2021',
      'description': 'Leaf rake with 48 inch wooden handle',
      'price':19.95,
      'starRating':3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    };
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
