import { Component } from '@angular/core';
import { PostService } from '../../services/post/post.service'
import { Post } from '../../models/post'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public posts: Post[] = [];

  constructor(private portService: PostService) { }

  ionViewWillEnter() {
    const homePosts = this.portService.homePosts();
    homePosts.then(response => {
      this.posts = <Post[]>response;
    })
  }
}
