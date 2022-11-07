import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {


  reply:any;
  ReservationForm: any;
  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }

  CancelReservationForm= new FormGroup({
    reservationID:new FormControl(''),
  });
  doCancelation(){
    let Response= this.service.doCancellation(this.CancelReservationForm.value);
    Response.subscribe(res=>{
      if(res=='1')
      {
        console.warn(this.CancelReservationForm.value);
        Swal.fire({
          text: 'Successfully Cancelled your reservation...:)',
          icon: 'success'
        });
      }
     else{
      Swal.fire('Oops...', 'Try again!', 'error');
     }
    });
  }

}
