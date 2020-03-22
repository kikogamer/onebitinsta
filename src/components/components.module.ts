import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component'
 
@NgModule({
	declarations: [HeaderComponent, PostListComponent],
	imports: [IonicModule, CommonModule],
	exports: [HeaderComponent, PostListComponent]
})
export class ComponentsModule {}