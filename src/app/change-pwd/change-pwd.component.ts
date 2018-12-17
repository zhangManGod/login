import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as validatorCheck from '../Validators/Validator';


@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {

  private changeFormModel: FormGroup;

  private fb: FormBuilder = new FormBuilder;

  constructor(private route: Router) {

    this.changeFormModel = this.fb.group({

      changeUserName: [[], [Validators.required]],

      changeUserPassword: [[], [Validators.required]],

      pwds: this.fb.group({
              newChangePassword: [],

              changePasswordConfirm: []

          }, { Validator: validatorCheck.psdGroupCheck })

    })
  }

  ngOnInit() {
  }
  

  changePwd(){

    console.log(this.changeFormModel.get('pwds').get('newChangePassword').untouched)

  }

  returnLogin(){



    this.route.navigateByUrl('/login');
  }

}
