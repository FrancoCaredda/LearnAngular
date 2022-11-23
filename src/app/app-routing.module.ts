import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineDeleteComponent } from './view/medicine-delete/medicine-delete.component';
import { MedicineGetComponent } from './view/medicine-get/medicine-get.component';
import { MedicineInsertComponent } from './view/medicine-insert/medicine-insert.component';
import { MedicineUpdateComponent } from './view/medicine-update/medicine-update.component';

const routes: Routes = [
  {path: "", redirectTo: "medicine-get", pathMatch: "prefix"},
  {path: "medicine-get", component: MedicineGetComponent},
  {path: "medicine-update", component: MedicineUpdateComponent},
  {path: "medicine-delete", component: MedicineDeleteComponent},
  {path: "medicine-insert", component: MedicineInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
