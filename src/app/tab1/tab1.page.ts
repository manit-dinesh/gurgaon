import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { cocktaildata } from '../models/cocktaildata.model'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  arr;
  image;
  image1;
  alco;
  ing;
  name;
  inst; 

  cockTailData: Partial<cocktaildata>;
  ctDataObj: Partial<cocktaildata>;
  constructor(private apiServe: ApiService ) {}
  
  fun(){
    for(let item in this.cockTailData){
      console.log(item);
      console.log(this.cockTailData[item]);
      this.arr = this.cockTailData[item];
      console.log(this.arr[0]) ;
      this.ctDataObj = this.arr[0];
      this.image = this.ctDataObj.strDrinkThumb;
      this.alco = this.ctDataObj.strAlcoholic;
      this.ing = this.ctDataObj.strIngredient1;
      this.name = this.ctDataObj.strDrink;
      this.inst = this.ctDataObj.strInstructions;
      console.log(`${this.image}---${this.alco}---${this.ing}`)
      console.log(`${this.image}`)
      for(let i in this.ctDataObj){
        if(this.ctDataObj[i] != null )
        console.log(`----${i}-----${this.ctDataObj[i]}`)
      }
    }}
    
    
    ngOnInit(){
        this.apiServe.getApiData().subscribe(val=>{console.log(val);
         this.cockTailData = val;
        })
  }
}
