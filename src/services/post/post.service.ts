import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../../services/auth/auth.service'
import { API_URL } from '../../constants'
import { Post } from '../../models/post'
import { PostFormatter } from './post_formatter'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  async homePosts() {
    const data: any = await this.http.get(`${API_URL}/api/v1/home`, { headers: this.auth.authHeader() }).toPromise();
    return this.formatPost(data);
  }

  async userPosts(userId) {
    const response: any = await this.http.get(`${API_URL}/api/v1/users/${userId}/posts`, { headers: this.auth.authHeader() }).toPromise();
    return this.formatPost(response);
  }

  private formatPost(data) {
    let posts: Post[] = [];
    for (let post of data.data.reverse()) {
      const postFormatter = new PostFormatter(post, data.included);
      posts.push(postFormatter.call());
    }
    return posts;
  }
}
