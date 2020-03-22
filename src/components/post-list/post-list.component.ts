import { Component, Input } from '@angular/core';
import { Post } from '../../models/post'

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {

  @Input() posts: Post[];
  @Input() currentList = "details";
  @Input() showToolbar = false;

  changeList(newList) {
    this.currentList = newList;
  }

  writeDescriptionWithHashtags(description) {
    return description.replace(new RegExp(/#\w+/, "gi"), match => {
      return '<b>' + match + '</b>';
    });
  }
  
}
