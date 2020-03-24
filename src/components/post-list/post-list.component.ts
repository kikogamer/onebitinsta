import { Component, Input } from '@angular/core';
import { Post } from '../../models/post'
import { User } from '../../models/user'
import { Router } from '@angular/router'

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {

  @Input() posts: Post[];
  @Input() currentList = "details";
  @Input() showToolbar = false;

  constructor (private router: Router) {}

  changeList(newList) {
    this.currentList = newList;
  }

  detailUser(user: User) {
    this.router.navigate(['/User-Page', user.id]);
  }

  writeDescriptionWithHashtags(description) {
    return description.replace(new RegExp(/#\w+/, "gi"), match => {
      return '<b>' + match + '</b>';
    });
  }
  
}
