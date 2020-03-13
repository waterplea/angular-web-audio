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
const LEAD = [
    70, 70, 70, 70, 70, 70, 70, 68,
    68, 68, 68, 68, 75, 79, 80, 87,
    87, 87, 87, 87, 87, 87, 87, 87,
    87, 87, 87, 87, 84, 80, 79, 75,
    80, 80, 80, 80, 80, 80, 80, 80,
    80, 80, 80, 80, 79, 75, 72, 70,
    70, 70, 70, 70, 70, 70, 70, 68,
    72, 75, 79, 80, 80, 79, 79, 75,
];

@Component({
  selector: "lead",
  templateUrl: "./lead.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadComponent {
  @Input() volume = 1;

  readonly notes$ = this.tick$.pipe(map(index => LEAD[index % 64]));

  constructor(
    @Inject(TICK) private readonly tick$: Observable<number>,
    @Inject(REVERB) readonly reverb: Promise<AudioBuffer>
  ) {}

  toFrequency(note: number): number {
    return toFrequency(note);
  }

  getVolume(note: number): number {
    const realVolume = 0.05;
    const changeForEachNote = note / 1000;

    return realVolume + changeForEachNote;
  }
}
