import { useRef, useState } from "react";

export function useMetronome() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(120);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const nextNoteTimeRef = useRef<number>(0.0);
  const timerIdRef = useRef<number | null>(null);

  const scheduleAheadTime = 0.1;
  const lookahead = 25.0;

  const start = () => {
    if (isPlaying) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
    }

    setIsPlaying(true);
    nextNoteTimeRef.current = audioCtxRef.current.currentTime + 0.05;

    timerIdRef.current = window.setInterval(() => scheduler(), lookahead);
  };

  const stop = () => {
    if (!isPlaying) return;
    setIsPlaying(false);
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }
  };

  const scheduler = () => {
    if (!audioCtxRef.current) return;

    while (
      nextNoteTimeRef.current <
      audioCtxRef.current.currentTime + scheduleAheadTime
    ) {
      scheduleNote(nextNoteTimeRef.current);
      advanceNote();
    }
  };

  const advanceNote = () => {
    const secondsPerBeat = 60.0 / bpm;
    nextNoteTimeRef.current += secondsPerBeat;
  };

  const scheduleNote = (time: number) => {
    if (!audioCtxRef.current) return;

    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();

    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);

    osc.frequency.setValueAtTime(880, time);

    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    osc.start(time);
    osc.stop(time + 0.05);
  };

  return { isPlaying, start, stop, bpm, setBpm };
}
