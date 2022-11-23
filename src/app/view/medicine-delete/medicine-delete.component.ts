import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/core/model/medicine';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  selector: 'app-medicine-delete',
  templateUrl: './medicine-delete.component.html',
  styleUrls: ['./medicine-delete.component.css']
})
export class MedicineDeleteComponent implements OnInit {
  public medicine: Medicine = new Medicine("", "T", 0);
  
  constructor(private service: MedicineService) {}

  ngOnInit(): void {
  
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.service.deleteMedicine(this.medicine).subscribe((value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    });
  }

  setName(e: Event) {
    this.medicine.setName((<HTMLInputElement>e.target).value);
  }

}
