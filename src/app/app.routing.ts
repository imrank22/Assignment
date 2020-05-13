import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'language-list',
        loadChildren: () => import('./views/language/language.module').then(m => m.LanguageModule)
      }
      ,
      {
        path: 'currency-list',
        loadChildren: () => import('./views/currency/currency.module').then(m => m.CurrencyModule)
      }
    ]
  },
  { path: '**', redirectTo:'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
