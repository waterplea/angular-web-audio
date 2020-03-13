import { InjectionToken, inject } from "@angular/core";
import { animationFrameScheduler, interval, Observable } from "rxjs";
import { share } from "rxjs/operators";
import { AUDIO_CONTEXT } from "@ng-web-apis/audio";
import { decode } from "./decode";
import { RESPONSE } from "./response";

export const REVERB = new InjectionToken<Promise<AudioBuffer>>("Response", {
  factory: () => inject(AUDIO_CONTEXT).decodeAudioData(decode(RESPONSE))
});
