import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { Post } from '../../models/post'
import { UserService } from '../../services/user/user.service'
import { PostService } from '../../services/post/post.service'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'other-profile',
  templateUrl: './other-profile.page.html',
  styleUrls: ['./other-profile.page.scss'],
})
export class OtherProfilePage implements OnInit {

  public user: User;
  public posts: Post[];
  id: string;
  
  constructor(private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ionViewWillEnter() {
    this.loadUser();
    this.loadPosts();
  }


  private loadUser() {
    this.userService.load(this.id)
      .then((user: User) => {
        this.user = user;
      });
  }


  private loadPosts() {
    this.postService.userPosts(this.id)
      .then((posts: Post[]) => {
        this.posts = posts;
      });
  }
}
