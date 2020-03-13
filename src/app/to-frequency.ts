export function toFrequency(note: number): number {
  return Math.pow(2, (note - 69) / 12) * 440;
}
