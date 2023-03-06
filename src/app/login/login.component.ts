import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Your Perfect Banking Partner"
  data1="Account Number"
  // acno:any
  // pas:any
  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1002:{username:"amal",acno:1002,password:"abc123",balance:0},
    1003:{username:"arun",acno:1003,password:"abc123",balance:0},
    1004:{username:"abhi",acno:1004,password:"abc123",balance:0},
  }



  
  login(acn:any,psw:any){
    // alert('Login worked')
    var acn=acn.value
    var psw=psw.value
   
    var userDetails=this.userDetails
    if(acn in userDetails){

    if(psw==userDetails[acn]["password"]){
      alert('login success')
    }
    else{
      alert('incorret password')
    }
  }
    else{
      alert('incorrect acont num')
    }
  
  }
}
