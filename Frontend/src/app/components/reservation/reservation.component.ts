import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  type = [
    { id: "Single", name: "Single" },
    { id: "Double", name: "Double" },
    { id: "Triple", name: "Triple" },
    { id: "Quad", name: "Quad" },
  ];

  number = [
    { id: "101", name: "101" },
    { id: "201", name: "201" },
    { id: "301", name: "301" },
    { id: "311", name: "311" },
  ];

  value="Reserved successfully...";
  btnStyle:any='default';

  constructor(private service:AuthService) { }

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
    roomType: new FormControl(''),
    roomID: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
  }); 

  Submited() {
    console.log(this.ReservationForm);
  }

  get roomType(): FormControl{
    return this.ReservationForm.get("roomType") as FormControl;
  }
  get roomID(): FormControl{
    return this.ReservationForm.get("roomID") as FormControl;
  }
  get fromDate(): FormControl{
    return this.ReservationForm.get("fromDate") as FormControl;
  }
  get toDate(): FormControl{
    return this.ReservationForm.get("toDate") as FormControl;
  }

  onclick(){
    let response=this.service.doReservation(this.ReservationForm.value);
    response.subscribe(data=>{
      if(data==1)
      {
        console.warn(this.ReservationForm.value);
        Swal.fire({
          text: 'Successfully reserved...',
          icon: 'success'
        });
      }
      else{
        Swal.fire('Oops...', 'Try reservering again!', 'error');
      }
    })
  }

}
