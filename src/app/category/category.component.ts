import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;
  //likeIcon! : String;

  ngOnInit() {
//    this.likeIcon = '❤️'
   }

  onLike() {
    if (this.category.likeIcon === '🤍') {
      this.category.likeIcon = '❤️'
    } else {
      this.category.likeIcon = '🤍'
    }
  }

}
