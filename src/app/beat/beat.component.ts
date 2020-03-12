import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input
} from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TICK } from "../tick.service";

@Component({
  selector: "beat",
  templateUrl: "./beat.template.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeatComponent {
  @Input() volume = 1;

  readonly kick$ = this.tick$.pipe(map(tick => !(tick % 4)));

  readonly snare$ = this.tick$.pipe(map(tick => !((tick % 4) - 2)));

  constructor(@Inject(TICK) private readonly tick$: Observable<number>) {}
}
