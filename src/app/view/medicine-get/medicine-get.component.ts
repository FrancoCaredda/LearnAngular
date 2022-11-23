import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/core/model/medicine';
import { MedicineService } from 'src/app/core/services/medicine.service';

@Component({
  selector: 'app-medicine-get',
  templateUrl: './medicine-get.component.html',
  styleUrls: ['./medicine-get.component.css']
})
export class MedicineGetComponent implements OnInit {
  public medicines: Array<Medicine> = [];

  constructor(private service: MedicineService) {

  }

  ngOnInit(): void {
    this.service.getMedicine().subscribe((data: any) => {
      this.medicines = Object.keys(data).map((key) => data[key])[1].map((obj: any) => new Medicine(obj.name, obj.type, obj.price));
    }, 
    (error: any) => {
      alert(error);
    });
  }
}
