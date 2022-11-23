import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/core/model/medicine';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrls: ['./medicine-update.component.css']
})
export class MedicineUpdateComponent implements OnInit {
  private medicine: Medicine = new Medicine("", "", 0);
  private oldName: string = "";

  constructor(private service: MedicineService) {}

  ngOnInit(): void {
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.service.updateMedicine(this.oldName, this.medicine).subscribe((value) => {
      console.log(value);
    },(error) => {
      console.log(error);
    })
  }

  onOldNameChange(e: Event): void {
    this.oldName = (<HTMLInputElement>e.target).value;
  }

  onNameChange(e: Event): void {
    this.medicine.setName((<HTMLInputElement>e.target).value);
  }

  onTypeChange(e: Event): void {
    this.medicine.setType((<HTMLInputElement>e.target).value);
  }

  onPriceChange(e: Event): void {
    this.medicine.setPrice(parseFloat((<HTMLInputElement>e.target).value));
  }
}
