import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  started = false;

  beat = 1;
  solo = 1;
  chords = 1;
  lead = 1;

  get text(): string {
    return this.started ? 'Stop' : 'Start AudioContext';
  }

  toggle() {
    this.started = !this.started;
  }
}
