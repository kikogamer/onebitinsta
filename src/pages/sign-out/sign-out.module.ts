import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignOutPage } from './sign-out.page';
import { ExploreContainerComponentModule } from '../../app/explore-container/explore-container.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SignOutPage }])
  ],
  declarations: [SignOutPage]
})
export class SignOutPageModule {}
