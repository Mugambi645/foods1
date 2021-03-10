import { Component, OnInit } from '@angular/core';
import { Food } from '../../model/food';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  public food: Food;
  constructor() { }

  ngOnInit(): void {
     this.food = new Food(
       "Beans",
       100,
       "/assets/images/beans.jpg",
       "rice",
       80,
       "/assets/images/rice.jpeg"
     )
  }

}
