import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { MemoriesService } from '../services/memories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;

  constructor(private memoriesService: MemoriesService) { }

  ngOnInit() { }

  onLike() {
    if (this.category.likeIcon === '🤍') {
      //this.category.likeIcon = '❤️'
      this.memoriesService.likeCategoryById(this.category.id, 'like');
    } else {
      this.memoriesService.likeCategoryById(this.category.id, 'unlike');
    }
  }

}
