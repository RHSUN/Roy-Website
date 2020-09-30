import {Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
  enteredValue = "";
  posts = [
    { title: "First", content: "First Post" },
    { title: "Second", content: "Second Post" },
    { title: "Third", content: "Third Post" }
  ];
  onAddPost(){
  }
}
