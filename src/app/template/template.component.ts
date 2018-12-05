import {Component, OnInit} from '@angular/core';
import {PrefecturesService} from '../prefectures.service';
import {Address, UserService} from '../user.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ft-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  name: string;
  address: Address = {
    zipCode: '',
    prefecture: '',
    otherAddress: '',
  };
  email: string;
  emailConfirm: string;
  mailingList: boolean;

  prefectures: string[];

  constructor(private prefs: PrefecturesService, private userService: UserService) {
    this.prefectures = this.prefs.list();

  }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(form);

    if(form.invalid) {
      alert('エラーがあります');
      return;
    }

    this.userService.addUser({
      name: form.value['name'],
      address: {
        zipCode: form.value['zipCode'],
        prefecture: form.value['prefecture'],
        otherAddress: form.value['otherAddress'],
      },
      email: form.value['email'],
      mailingList: form.value['mailingList']
    });
  }

}

