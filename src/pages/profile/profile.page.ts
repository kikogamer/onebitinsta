import { Component } from '@angular/core';
import { User } from '../../models/user'
import { Post } from '../../models/post'
import { Router } from '@angular/router'
import { UserService } from '../../services/user/user.service'
import { PostService } from '../../services/post/post.service'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  public currentUser: User;
  public posts: Post[];

  constructor(private userService: UserService,
    private postService: PostService,
    private auth: AuthService,
    private router: Router) { }

  ionViewWillEnter() {
    this.loadUser();
    this.loadPosts();
  }

  newPost() {
    this.router.navigateByUrl('Post');
  }

  private loadUser() {
    this.userService.load(this.auth.currentUser.id)
      .then((user: User) => {
        this.currentUser = user;
      });
  }

  private loadPosts() {
    this.postService.userPosts(this.auth.currentUser.id)
      .then((posts: Post[]) => {
        this.posts = posts;
      });
  }

}
