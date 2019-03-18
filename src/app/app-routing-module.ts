import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SneakerCatalogComponent } from './sneaker-posts/sneaker-catalog/sneaker-catalog.component';
import { SneakerPostCreateComponent } from './sneaker-posts/sneaker-post-create/sneaker-post-create.component';

const routes: Routes = [
    {path: '', component: SneakerCatalogComponent},
    {path: 'create', component : SneakerPostCreateComponent},
    {path: 'edit/:sneakerId', component: SneakerPostCreateComponent}
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}