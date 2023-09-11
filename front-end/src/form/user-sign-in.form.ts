import {FormControl, Validators} from "@angular/forms";

export const userFormValidation =
{
  login: ['',Validators.required],
  password: ['',Validators.required],
}

export const nameUserForm = [
  {name: 'login',placeholder:"Enter username...",inputName: 'Login'},
  {name: 'password',placeholder:"Enter password...",inputName: 'Password'},
]

