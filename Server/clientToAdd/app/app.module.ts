import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ImageService} from "./services/images.service";
import {ImageComponent} from "./image/image.component";
import {CapitalizePipe} from "./pipes/uppercase.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
