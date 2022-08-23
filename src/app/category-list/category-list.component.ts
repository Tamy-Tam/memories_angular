import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { MemoriesService } from '../services/memories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories!: Category[];

  constructor(private memoriesService: MemoriesService) { }

  ngOnInit() {
    this.categories = this.memoriesService.categories
   /* this.categories = [
      {
        title: "Books",
        description: "All your books and more",
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vEdUoEfe8MzMKK7o__qUNwHaEc%26pid%3DApi&f=1',
        likeIcon: '🤍',
        createdDate: new Date()
      },
      {
        title: "TV Shows",
        description: "All your favourite TV Shows",
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8qpzXr38CjY5f6goqvYCXQAAAA%26pid%3DApi&f=1',
        likeIcon: '🤍',
        createdDate: new Date()
      },
      {
        title: "Music",
        description: "All your favourite songs and tunes",
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JKyUzruFLUx-lZW8LCuFjgHaE8%26pid%3DApi&f=1',
        likeIcon: '🤍',
        createdDate: new Date()
      } 
    ];*/
  }

}
