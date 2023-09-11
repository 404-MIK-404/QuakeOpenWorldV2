import {Component, OnInit} from "@angular/core";
import {srcGalleryMainPicture} from "../../../picture/src-gallery-main/src-gallery-main.picture";
import {srcGalleryGameWorkPicture} from "../../../picture/src-gallery-game-work/src-gallery-game-work.picture";
import {WebManagerService} from "../../../service/web-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit {

  images: any[][] = [srcGalleryMainPicture,srcGalleryGameWorkPicture];

  constructor(
    private webManager:WebManagerService,
    private router: Router) {}

  ngOnInit(): void {
  }

  changeVisibleFormUser(){
    if (!this.webManager.getDataUserSession()){
      this.router.navigate(['authentication'])
    } else {
      this.router.navigate(['prof'])
    }
  }




}
