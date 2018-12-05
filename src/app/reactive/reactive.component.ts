import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {PrefecturesService} from '../prefectures.service';
import {UserService} from '../user.service';
import {UserFormValidatorsService} from '../user-form-validators.service';

@Component({
  selector: 'ft-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;
  prefectures: string[];

  constructor(private fb: FormBuilder, private prefs: PrefecturesService, private userService: UserService, private userValidators: UserFormValidatorsService) {
    this.prefectures = this.prefs.list();
    this.form = this.fb.group({
      name: ['', [Validators.required, this.userValidators.prefix('田中')]],
      address: this.fb.group({
        zipCode: '',
        prefecture: '',
        otherAddress: '',
      }),
      email: ['', Validators.email],
      emailConfirm: ['', Validators.email],
      mailingList: true
    }, {validators: this.userValidators.equalValue('email', 'emailConfirm')});
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.userService.addUser(this.form.value);
  }

}
