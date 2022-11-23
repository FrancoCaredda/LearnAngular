import { Injectable } from '@angular/core';
import { Medicine } from '../model/medicine';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class MedicineService {
  constructor(private httpClient: HttpClient) { }

  private convertToJSON(medicine: Medicine): Object {
    return {
      name: medicine.getName(),
      type: medicine.getType(),
      price: medicine.getPrice()
    };
  }

  public deleteMedicine(medicine: Medicine): Observable<Object> {
    return this.httpClient.delete("https://localhost:7181/api/Medicine", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: this.convertToJSON(medicine)
    });
  }

  public insertMedicine(medicine: Medicine): Observable<Object> {
    return this.httpClient.post("https://localhost:7181/api/Medicine", this.convertToJSON(medicine), {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  public updateMedicine(oldName: string, medicine: Medicine): Observable<Object> {
    return this.httpClient.put("https://localhost:7181/api/Medicine/" + oldName, this.convertToJSON(medicine), {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  public getMedicine(): Observable<Object>{
    return this.httpClient.get("https://localhost:7181/api/Medicine");
  }
}
