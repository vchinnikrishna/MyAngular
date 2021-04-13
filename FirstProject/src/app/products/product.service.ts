import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./products";
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{

  private productUrl = 'api/files/products.json';

  constructor (private http: HttpClient){}

    private handleError(err: HttpErrorResponse){
      let errorMessage='';
      if(err.error instanceof ErrorEvent){
        errorMessage='An error occurred: $(err.error.message)' ;
      }
      else{
        errorMessage='Server returned code: $(err.status), error message is: $(err.message)';
        
      }
      // console.error(errorMessage);
      return throwError(errorMessage);
    }
    getProducts(): Observable<IProduct[]>
    {
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
        // return [
        //     {
        //       "productId": 1,
        //       "productName": "Leaf Rake",
        //       "productCode": "GDN-0011",
        //       "releaseDate": "March 19, 2019",
        //       "description": "Leaf rake with 48-inch wooden handle.",
        //       "price": 19.94455,
        //       "starRating": 3.2,
        //       "imageUrl": "assets/images/leaf_rake.png"
        //     },
        //     {
        //       "productId": 2,
        //       "productName": "Garden Cart",
        //       "productCode": "GDN-0023",
        //       "releaseDate": "March 18, 2019",
        //       "description": "15 gallon capacity rolling garden cart",
        //       "price": 32.895459,
        //       "starRating": 4.2,
        //       "imageUrl": "assets/images/garden_cart.png"
        //     },
        //     {
        //       "productId": 5,
        //       "productName": "Hammer",
        //       "productCode": "TBX-0048",
        //       "releaseDate": "May 21, 2019",
        //       "description": "Curved claw steel hammer",
        //       "price": 8.78649,
        //       "starRating": 4.8,
        //       "imageUrl": "assets/images/hammer.png"
        //     },
        //     {
        //       "productId": 8,
        //       "productName": "Saw",
        //       "productCode": "TBX-0022",
        //       "releaseDate": "May 15, 2019",
        //       "description": "15-inch steel blade hand saw",
        //       "price": 11.58885,
        //       "starRating": 3.7,
        //       "imageUrl": "assets/images/saw.png"
        //     },
        //     {
        //       "productId": 10,
        //       "productName": "Video Game Controller",
        //       "productCode": "GMG-0042",
        //       "releaseDate": "October 15, 2018",
        //       "description": "Standard two-button video game controller",
        //       "price": 35.94565,
        //       "starRating": 4.6,
        //       "imageUrl": "assets/images/xbox-controller.png"
        //     }
        //   ];
    }
}