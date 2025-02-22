import { RouterModule, Routes } from '@angular/router';
import { ComponentPageComponent } from './components/pages/component-page/component-page.component';
import { SetupPageComponent } from './components/pages/setup-page/setup-page.component';
import { IntroPageComponent } from './components/pages/intro-page/intro-page.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { DirectivesComponent } from './components/pages/directives/directives.component';
import { Angular17Component } from './components/pages/angular-17/angular-17.component';

export const routes: Routes = [
    { path: '', component: IntroPageComponent, pathMatch: 'full' },
    {path:'introduction',component:IntroPageComponent},
    {path:'setup',component:SetupPageComponent},
    {path:'components',component:ComponentPageComponent},
    {path:'services',component:ServicePageComponent},
    {path:'faq',component:FaqComponent},
    {path:'directives-and-pipes',component:DirectivesComponent},
    {path:'angular-17',component:Angular17Component},
    {path:'**',redirectTo:'introduction'}
];

// export const AppRoutingModule= RouterModule.forRoot(routes,{
//     anchorScrolling:'enabled',
//     scrollPositionRestoration:'top'
// })