import {Component, OnInit} from "@angular/core";
import {WebManagerService} from "../../../service/web-manager.service";
import {EventsManagerService} from "../../../service/events-manager.service";
import {NewsModel} from "../../../model/news.model";

@Component({
  selector: 'update-note-current',
  templateUrl: './update-note-current.component.html',
  styleUrls: ['update-note-current.component.css']
})
export class UpdateNoteCurrentComponent implements OnInit{

  public news: NewsModel;

  constructor(private webManager: WebManagerService,
              private eventsManager: EventsManagerService,) {}

  ngOnInit(): void {
    let val: NewsModel  = this.webManager.dataSelectedNews()!
    this.webManager.findScreenshotsCurrentNews(val).subscribe(value1 => {
      let screens: any[] = []
      value1.forEach((screen: any,index: any)=>{
        screens.push({itemImageSrc: screen.image,thumbnailImageSrc: screen.image, alt: '', title: '' })
      })
      val.image = screens
      this.news = val
    })
  }

  public changeVisibleFormUser(){
    this.webManager.setParamVisibleFormUser()
  }


}
