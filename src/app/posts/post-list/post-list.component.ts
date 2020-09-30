import {Component} from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
  posts = [
    { title: "First", content: "First Post" },
    { title: "Second", content: "Second Post" },
    { title: "Third", content: "Third Post" }
  ];
}
