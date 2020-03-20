import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMisionComponent } from './components/mision/edit-mision/edit-mision.component';
import { EditVisionComponent } from './components/vision/edit-vision/edit-vision.component';
import { EditObjetivoComponent } from './components/objetivo/edit-objetivo/edit-objetivo.component';

const routes: Routes = [
  {path: 'edit_mision', component:EditMisionComponent},
  {path: 'edit_vision', component:EditVisionComponent},
  {path: 'edit_objetivos', component:EditObjetivoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
