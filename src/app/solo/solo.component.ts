import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input
} from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TICK } from "../tick.service";
import { toFrequency } from "../to-frequency";
import { REVERB } from "../assets/reverb";

// prettier-ignore
const SOLO = [
    87, 87, 87, 87, 87, 87, 87, 82,
    82, 82, 82, 82, 82, 82, 82, 87,
    87, 87, 87, 87, 87, 87, 89, 84,
    84, 84, 84, 84, 84, 84, 84, 87,
    87, 87, 87, 87, 87, 87, 87, 82,
    82, 82, 82, 82, 82, 82, 82, 80,
    80, 80, 80, 80, 80, 80, 80, 80,
    80, 80, 80, 80, 82, 82, 82, 87,
];

@Component({
  selector: "solo",
  templateUrl: "./solo.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoloComponent {
  @Input() volume = 1;

  readonly notes$ = this.tick$.pipe(map(index => SOLO[index % 64]));

  constructor(
    @Inject(TICK) private readonly tick$: Observable<number>,
    @Inject(REVERB) readonly reverb: Promise<AudioBuffer>
  ) {}

  toFrequency(note: number): number {
    return toFrequency(note);
  }

  getModulatedNote(note: number): number {
    return note === 80 ? note - 8 : note - 7;
  }

  getVolume(note: number): number {
    const realVolume = 0.05;
    const changeForEachNote = note / 1000;

    return realVolume + changeForEachNote;
  }
}
