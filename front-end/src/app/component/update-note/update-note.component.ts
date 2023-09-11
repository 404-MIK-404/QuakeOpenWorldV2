import {Component, OnInit} from "@angular/core";
import {WebManagerService} from "../../../service/web-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'update-note-component',
  templateUrl: './update-note.component.html',
  styleUrls: ['update-note.component.css']
})
export class UpdateNoteComponent implements OnInit{

  public news: any

  constructor(private webManager:WebManagerService,
              private route: Router) {}

  ngOnInit(): void {
    this.webManager.getResultNews().subscribe(value => {
      this.news = value
    })
  }

  public seeNews(news: any){
    this.webManager.selectCurrentNews(news)
    this.route.navigate(['news'],{queryParams: {title: news.title}})
  }

  public changeVisibleFormUser(){
    this.webManager.setParamVisibleFormUser()
  }

}
