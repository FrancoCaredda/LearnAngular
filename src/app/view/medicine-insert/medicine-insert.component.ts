import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/core/model/medicine';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  selector: 'app-medicine-insert',
  templateUrl: './medicine-insert.component.html',
  styleUrls: ['./medicine-insert.component.css']
})
export class MedicineInsertComponent implements OnInit {
  private medicine: Medicine = new Medicine("", "", 0);

  constructor(private service: MedicineService) {}

  ngOnInit(): void {
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.medicine);
    this.service.insertMedicine(this.medicine).subscribe();
  }

  onNameChange(e: Event): void {
    this.medicine.setName((<HTMLInputElement>e.target).value);
    console.log(this.medicine);
  }

  onTypeChange(e: Event): void {
    this.medicine.setType((<HTMLInputElement>e.target).value);
    console.log(this.medicine);
  }

  onPriceChange(e: Event): void {
    this.medicine.setPrice(parseFloat((<HTMLInputElement>e.target).value));
    console.log(this.medicine);
  }
}
