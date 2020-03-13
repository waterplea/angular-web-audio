import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input
} from "@angular/core";
import { toFrequency } from "../to-frequency";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TICK } from "../tick.service";

const CHORDS = [41, 39, 37, 39];

@Component({
  selector: "chords",
  templateUrl: "./chords.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChordsComponent {
  @Input() volume = 1;

  readonly notes$ = this.tick$.pipe(
    map(index => toFrequency(CHORDS[Math.floor((index % 32) / 8)]))
  );

  constructor(@Inject(TICK) private readonly tick$: Observable<number>) {}
}
