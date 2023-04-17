import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { properties } from '../../../assets/properties/properties';
import { ApiService } from '../../services/api.service';
import { ConstantUri } from '../../utils/constantUri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  logo=properties.logo;
  formLogin:FormGroup=new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private readonly apiService:ApiService<any>

  ){
    this.formLogin = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],


    })
  }

  ngOnInit(): void {

  }

  login(){
    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      for(const key in this.formLogin.controls){
        // console.log(key)
        this.formLogin.controls[key].markAsDirty();
      }
      return;
    }
    const {username, password} =this.formLogin.value;

    const body ={
      username,
      password,
      //request_token:sessionStorage.getItem("requestToken")
      "request_token":"4ad37ec53e5b5f9ae4c5775fe3c3fa9d"

    }

    const configPost={url:ConstantUri.validateWithLogin,params:{api_key:ConstantUri.apikey,body}};
    this.apiService.postService(configPost).subscribe(val=>{
      //console.log(val)
      const {request_token}=val;
      sessionStorage.setItem('requesToken',request_token)
    });
    console.log(this.formLogin.value);
  }

}
