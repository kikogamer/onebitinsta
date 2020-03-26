import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss'],
})
export class FollowingComponent {

  @Input() isFollowing = false;
  @Output() followEvent = new EventEmitter();

}
