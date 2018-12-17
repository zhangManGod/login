import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import "rxjs/Rx";
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataSource:Observable<any>;

  private formModel: FormGroup;

  private fb: FormBuilder = new FormBuilder;

  constructor(private http: HttpClient) {

    this.formModel = this.fb.group({

      userName: [[], [Validators.required]],

      userPassword: [[], [Validators.required]]
    })
  }

  ngOnInit() {
  }

  login() {

   if(this.formModel.valid){

    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );

    
   }

  }

}
