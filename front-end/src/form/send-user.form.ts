import {FormControl, Validators} from "@angular/forms";

export const sendUserFormValidation =
  {
    login: ['',Validators.required],
    money: ['',Validators.required],
  }

export const sendUserForm = [
  {name: 'login', placeholder:"Enter username...",inputName: 'Login'},
  {name: 'money',placeholder:"Enter money...",inputName: 'Money'},
]
