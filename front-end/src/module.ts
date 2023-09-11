import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {NavigationComponent} from "./app/component/navigantion/navigation.component";
import {EnterFormAccountComponent} from "./app/component/enter-form-account/enter-form-account.component";
import {MainComponent} from "./app/component/main/main.component";
import {HttpClientModule} from "@angular/common/http";
import {SidebarModule} from "primeng/sidebar";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {KeyFilterModule} from "primeng/keyfilter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GalleriaModule} from "primeng/galleria";
import {ScrollMainDirective} from "./app/component/main/directive/scroll-main.directive";
import {StartWebSiteComponent} from "./app/component/start-web-site/start-web-site.component";
import {RouterModule, Routes} from "@angular/router";
import {UpdateNoteComponent} from "./app/component/update-note/update-note.component";
import {ProfileComponent} from "./app/component/profile/profile.component";
import {DxButtonModule, DxNumberBoxModule, DxTextBoxModule} from "devextreme-angular";
import {UpdateNoteCurrentComponent} from "./app/component/update-note-current/update-note-current.component";
import {FieldsetModule} from "primeng/fieldset";
import {HowToPlayComponent} from "./app/component/how-to-play/how-to-play.component";
import {SupportUsComponent} from "./app/component/support-us/support-us.component";


const appRoutes: Routes =[
  { path: '', component: MainComponent, pathMatch: "full"},
  { path: 'authentication', component: EnterFormAccountComponent},
  { path: 'update-note', component: UpdateNoteComponent},
  { path: 'how-to-play',component: HowToPlayComponent},
  { path: 'support-page',component: SupportUsComponent},
  { path: 'prof', component: ProfileComponent},
  { path: 'news', component: UpdateNoteCurrentComponent},
  { path: '**', redirectTo: ''},
];


@NgModule({

  declarations: [
    AppComponent,

    NavigationComponent,

    StartWebSiteComponent,

    //main-route
    MainComponent,
    EnterFormAccountComponent,

    //update-note-route
    UpdateNoteComponent,
    UpdateNoteCurrentComponent,

    ProfileComponent,

    HowToPlayComponent,
    SupportUsComponent,

    //Directive
    ScrollMainDirective,
  ],

    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        SidebarModule,
        CommonModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        KeyFilterModule,
        ReactiveFormsModule,
        FormsModule,
        GalleriaModule,

        RouterModule.forRoot(appRoutes),
        DxButtonModule,
        DxTextBoxModule,
        DxNumberBoxModule,
        FieldsetModule

    ],

  providers: [],

  bootstrap: [StartWebSiteComponent]

})
export class Module { }
