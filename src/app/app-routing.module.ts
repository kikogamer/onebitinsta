import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'Sign-Up',
    loadChildren: () => import('../pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'User-Page/:id',
    loadChildren: () => import('../pages/other-profile/other-profile.module').then( m => m.OtherProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
