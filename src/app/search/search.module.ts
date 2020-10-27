import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchGridComponent } from './search-grid/search-grid.component';
import { SearchRoutingModule } from './search-routing.module';
import { searchFeatureKey, searchReducer } from './@ngrx/search.reducer';
import { StoreModule } from '@ngrx/store';
import { SearchEffects } from './@ngrx/search.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [SearchComponent, SearchGridComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SearchEffects]),
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    SharedModule,
    StoreModule.forFeature(searchFeatureKey, searchReducer)
  ],
})

export class SearchModule {}
