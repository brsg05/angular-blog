import { Routes, RouterModule  } from '@angular/router';

import { ContentComponent } from './pages/content/content.component';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';




export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: 'content/:id',
        component:ContentComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }