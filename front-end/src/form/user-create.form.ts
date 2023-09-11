import {Validators} from "@angular/forms";

export const userCreateFormValidation = {
  userName: ['',Validators.required],
  password: ['',Validators.required],
  repeatPassword: ['',Validators.required],
  email: ['',Validators.required],
}

export const nameCreateUserForm = [
  {name: 'userName',placeholder: "Enter username...",inputName: 'Login'},
  {name: 'password',placeholder: "Enter password...",inputName: 'Password'},
  {name: 'repeatPassword',placeholder: "Repeat password...",inputName: 'Repeat password'},
  {name: 'email',placeholder: "Enter email...",inputName: 'Email'},
]
