import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component'
import { ProfileComponent } from './profile/profile.component'
import { FollowingComponent } from './following/following.component'
 
@NgModule({
	declarations: [HeaderComponent, PostListComponent, ProfileComponent, FollowingComponent],
	imports: [IonicModule, CommonModule],
	exports: [HeaderComponent, PostListComponent, ProfileComponent, FollowingComponent]
})
export class ComponentsModule {}