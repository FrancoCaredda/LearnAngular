import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineGetComponent } from 'src/app/view/medicine-get/medicine-get.component';
import { MedicineDeleteComponent } from 'src/app/view/medicine-delete/medicine-delete.component';
import { MedicineInsertComponent } from 'src/app/view/medicine-insert/medicine-insert.component';
import { MedicineUpdateComponent } from 'src/app/view/medicine-update/medicine-update.component';
import { MedicineService } from '../services/medicine.service';
import { CheckTableDirective } from 'src/app/directive/check-table.directive';

@NgModule({
  declarations: [
    MedicineGetComponent,
    MedicineDeleteComponent,
    MedicineInsertComponent,
    MedicineUpdateComponent,
    CheckTableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MedicineGetComponent,
    MedicineDeleteComponent,
    MedicineInsertComponent,
    MedicineUpdateComponent,
    CheckTableDirective
  ],
  providers: [
    MedicineService
  ]
})
export class MedicineModule { }
