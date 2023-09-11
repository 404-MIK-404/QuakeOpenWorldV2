import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {nameUserForm, userFormValidation} from "../../../form/user-sign-in.form";
import {nameCreateUserForm, userCreateFormValidation} from "../../../form/user-create.form";
import {WebManagerService} from "../../../service/web-manager.service";



@Component({
  selector: 'enter-form-account',
  templateUrl: './enter-form-account.component.html',
  styleUrls: ['enter-form-account.component.css']
})
export class EnterFormAccountComponent implements OnInit{

  userForm!: FormGroup

  nameUserForm = nameUserForm

  isClickUserCreate: boolean = false

  hide : boolean = false;

  titleForm: string = "Authorization"

  constructor(private fb: FormBuilder,
              private webManager: WebManagerService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group(userFormValidation)
  }

  public signInUser(){
    this.webManager.sendSignInParam(this.userForm.value).subscribe(value => {
      if (value != null){
        this.webManager.setParamDataUserSession(value)
      }
    })
  }

  public registrationUser(){
    this.webManager.sendRegistrationInParam(this.userForm.value).subscribe(value => {
      console.log(value)
      //this.webManager.setParamDataUserSession(value)
    })
  }


  private clearValueForm(){
    this.userForm.reset()
  }

  private setUserFormAndName(formVal: any,formName: any,title: any){
    this.clearValueForm()
    this.titleForm = title
    this.hide = false;
    this.userForm = this.fb.group(formVal)
    this.nameUserForm = formName
    this.isClickUserCreate = !this.isClickUserCreate
  }


  setCreateUserFormValidation(){
    this.setUserFormAndName(userCreateFormValidation,nameCreateUserForm,"Create User")
  }

  setSignInUserFormValidation(){
    this.setUserFormAndName(userFormValidation,nameUserForm,"Authorization")
  }

  setVisiblePasswordType(tooglePassword: any,password:any){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.hide = !this.hide
  }


}
