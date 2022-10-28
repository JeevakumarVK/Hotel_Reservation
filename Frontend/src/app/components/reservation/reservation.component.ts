import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  type = [
    { id: 1, name: "Single" },
    { id: 2, name: "Double" },
    { id: 3, name: "Triple" },
    { id: 4, name: "Quad" },
  ];

  number = [
    { id: 1, name: "101" },
    { id: 2, name: "201" },
    { id: 3, name: "301" },
    { id: 4, name: "311" },
  ];

  value="Reserved successfully...";
  btnStyle:any='default';

  constructor() { }

  ngOnInit(): void {
  }

  private formatDate(date: string | number | Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }


  ReservationForm = new FormGroup({
    RoomType: new FormControl(''),
    RoomNumber: new FormControl(''),
    requestdate: new FormControl(''),
   
  }); 

  Submited() {
    console.log(this.ReservationForm);
  }

  get RoomType(): FormControl{
    return this.ReservationForm.get("RoomType") as FormControl;
  }
  get RoomNumber(): FormControl{
    return this.ReservationForm.get("RoomNumber") as FormControl;
  }
  get requestdate(): FormControl{
    return this.ReservationForm.get("requestdate") as FormControl;
  }

  onclick(){
    this.btnStyle='btnAfterSubmit';
    this.type.push();
  }
}
