import { Routes } from '@angular/router';
import { authGuard } from './core/guards/guards/auth-guard';

export const routes: Routes = [
   {
    path:"",
    loadComponent: ()=>
        import('./features/landing/landing-page/landing-page')
    .then(c=>c.LandingPage),
     children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login')
            .then(c => c.Login)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register')
            .then(c => c.Register)
      },
     
    ]
    
   },
    {
        path: 'dashboard',
        canActivate:[authGuard],
        loadChildren: ()=>
          import('./features/user-dashboard/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
      },
    
    

   {
        path: '**',
        redirectTo: ''
   }
  
];
