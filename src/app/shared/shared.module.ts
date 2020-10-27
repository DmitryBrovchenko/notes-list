import { NgModule } from '@angular/core';
import { XCardComponent } from './x-card/x-card.component';
import { XCardTitleComponent } from './x-card/widgets/x-card-title/x-card-title.component';
import { XCardContentComponent } from './x-card/widgets/x-card-content/x-card-content.component';
import { XCardActionsComponent } from './x-card/widgets/x-card-actions/x-card-actions.component';

@NgModule({
  declarations: [XCardComponent, XCardTitleComponent, XCardContentComponent, XCardActionsComponent],
  exports: [XCardComponent]
})

export class SharedModule {}
