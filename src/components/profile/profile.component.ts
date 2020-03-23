import { Component, Input } from '@angular/core';
import { User } from '../../models/user'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  @Input() public user: User
  @Input() public isMe: false

}
