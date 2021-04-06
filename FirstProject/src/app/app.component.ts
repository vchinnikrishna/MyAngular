import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template:`
    <div>
     <h3> {{pageTitle}} </h3>
     <!--<div>My First Component</div>-->
    <pm-products></pm-products>
  </div>
  `
})

export class AppComponent{
  pageTitle: string = "My First Angular Project";
  showImage: boolean = false;
  toggleImage():void{
    this.showImage=true;
  }
}