import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListcomponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean =false;
    
    // listFilter: string = "cart";
    private _listfilter : string = '';
    get listFilter(): string{
        return this._listfilter;
    }

    set listFilter(value : string){
        this._listfilter = value;
        console.log("setter value = "+this._listfilter);
        this.filteredProducts = this.preformFilter(value);
    }

    constructor(private productService: ProductService ){}

    filteredProducts: IProduct[] = [];
    products: IProduct[]=[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        // console.log("In OnInit");
        //this.listFilter = "cart";
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    preformFilter(filterBy: string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onRatingClicked(message: string): void{
      this.pageTitle = 'Product List: ' + message;
    }
}