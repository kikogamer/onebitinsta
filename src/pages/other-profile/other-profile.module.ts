import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherProfilePageRoutingModule } from './other-profile-routing.module';

import { OtherProfilePage } from './other-profile.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherProfilePageRoutingModule,
    ComponentsModule
  ],
  declarations: [OtherProfilePage],
  entryComponents: [OtherProfilePage]
})
export class OtherProfilePageModule {}
