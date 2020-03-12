import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { WebAudioModule } from "@ng-web-apis/audio/fesm2015/ng-web-apis-audio";

import { AppComponent } from "./app.component";
import { BeatComponent } from "./beat/beat.component";
// import { ChordsComponent } from "./chords/chords.component";
// import { LeadComponent } from "./lead/lead.component";
// import { SoloComponent } from "./solo/solo.component";

@NgModule({
  imports: [BrowserModule, FormsModule, WebAudioModule],
  declarations: [
    AppComponent,
    BeatComponent,
    // ChordsComponent,
    // LeadComponent,
    // SoloComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
