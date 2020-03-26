import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user'
import { Router } from '@angular/router'


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  @Input() public user: User;
  @Input() public isMe = false;
  @Input() public isFollowing = false;
 
  @Output() public onFollow = new EventEmitter();
  @Output() public onUnfollow = new EventEmitter();

  constructor(private router: Router) {}

  checkFollow(following: boolean) {
    if(following) {
      this.onFollow.emit();
    } else {
      this.onUnfollow.emit();
    }
  }
 
  openFollowPage() {
    this.router.navigate(['FollowPage', { user: this.user }]);
  }
}
