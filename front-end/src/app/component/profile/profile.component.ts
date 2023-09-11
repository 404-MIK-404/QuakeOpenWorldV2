import {Component, OnDestroy, OnInit} from "@angular/core";
import {WebManagerService} from "../../../service/web-manager.service";
import {UserModel} from "../../../model/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {sendUserForm, sendUserFormValidation} from "../../../form/send-user.form";
import {styleSideBar} from "../../../style/style";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {

  public infoUser: UserModel

  public sendMoneyForm: FormGroup

  public nameSendForm = sendUserForm

  constructor(private fb: FormBuilder,
              private webManager: WebManagerService) {}

  ngOnInit(): void {
    this.sendMoneyForm = this.fb.group(sendUserFormValidation)
    this.webManager.infoUser().subscribe(value => {
      this.infoUser = value
    })
  }

  ngOnDestroy(): void {

  }


  public sendMoneyAnotherUser(){
    this.webManager.sendMoneyToAnotherUser(this.sendMoneyForm.value).subscribe(value => {
      this.infoUser = value
    })
  }


}
