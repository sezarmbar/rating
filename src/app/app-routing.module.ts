import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingPageComponent } from "./pages/rating";






const routes: Routes = [
    {path: ':id', component: RatingPageComponent},




    {path: '**', redirectTo: 'hauspark', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class ServiceAppRoutingModule { }
