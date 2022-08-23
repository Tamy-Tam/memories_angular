import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /*title = 'Memories';
  bookCategory!: Category;
  tvShowCategory!: Category;
  musicCategory!: Category;*/
  //categories!: Category[];


  ngOnInit() {
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
    ];
    */
    /*this.bookCategory = new Category(
      "Books",
      "All your books and more",
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vEdUoEfe8MzMKK7o__qUNwHaEc%26pid%3DApi&f=1',
      '🤍',
      new Date()
    );

    this.tvShowCategory = new Category(
      "TV Shows",
      "All your favourite TV Shows",
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8qpzXr38CjY5f6goqvYCXQAAAA%26pid%3DApi&f=1',
      '🤍',
      new Date()
    )

    this.musicCategory = new Category(
      "Music",
      "All your favourite songs and tunes",
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JKyUzruFLUx-lZW8LCuFjgHaE8%26pid%3DApi&f=1',
      '🤍',
      new Date()
    )
    */
  }
}
