import {Component, OnInit} from '@angular/core';
import {WebManagerService} from "../../../service/web-manager.service";
import {EventsManagerService} from "../../../service/events-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.css'],
})
export class NavigationComponent implements OnInit{

  userIsLog: boolean = false

  constructor(private webManager: WebManagerService,
              private eventsManager: EventsManagerService,
              private route: Router,) {}

  ngOnInit(): void {
    this.eventsManager.eventUpdateSession().subscribe(value => {
      this.userIsLog = !!value
    })
    this.userIsLog = !!this.webManager.getDataUserSession();
  }

  signOutUser(){
    this.webManager.clearSessionUser()
    this.route.navigate([''])
  }

}
