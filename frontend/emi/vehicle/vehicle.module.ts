import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { DatePipe } from '@angular/common';
import { FuseWidgetModule } from '../../../core/components/widget/widget.module';

import { VehicleService } from './vehicle.service';
import { VehicleListService } from './vehicle-list/vehicle-list.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailService } from './vehicle-detail/vehicle-detail.service';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleDetailGeneralInfoComponent } from './vehicle-detail/general-info/vehicle-general-info.component';
import { ToolbarService } from '../../toolbar/toolbar.service';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleListComponent,
  },
  {
    path: ':id',
    component: VehicleDetailComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FuseWidgetModule
  ],
  declarations: [
    DialogComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    VehicleDetailGeneralInfoComponent
  ],
  entryComponents: [DialogComponent],
  providers: [ VehicleService, VehicleListService, VehicleDetailService, DatePipe]
})

export class VehicleModule {}
