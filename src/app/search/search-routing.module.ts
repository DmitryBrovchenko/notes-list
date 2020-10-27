import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const Routes = [{
  path: '',
  component: SearchComponent
}];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
