import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewPost } from './new-post.page';
import { ExploreContainerComponentModule } from '../../app/explore-container/explore-container.module';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: NewPost }])
  ],
  declarations: [NewPost]
})
export class NewPostPageModule {}
