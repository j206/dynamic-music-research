import React from 'react'

export default function experiment2() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Experiment 2</h1>
      <main>
        <li>WIP</li>
      </main>
    </div>
  );
}

if (typeof window !== "undefined") {
  // Globals, for example
  let globalAudioContext = null;
  let inited = false;
  const sampleRate = 44100;
  let emptyBuffer = null;

  // Initialize buffer
  function initialize() {
    if (inited)
      return;
    inited = true;

    // Create audio context
    const AudioCtor = (window.AudioContext);
    globalAudioContext = AudioCtor ? new AudioCtor() : null;
    if (!globalAudioContext) return null;

    // Create empty buffer at the correct sample rate
    // https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBuffer
    emptyBuffer = globalAudioContext.createBuffer(1, 1, sampleRate);

    // Play once to set sample rate, and also unmute
    const source = globalAudioContext.createBufferSource();
    source.buffer = emptyBuffer;
    source.connect(globalAudioContext.destination);
    source.start(0, 0, 0);
    console.info("Sound enabled");
  }

  // Create events to enable playback
  document.addEventListener("mousedown", initialize, true);
  document.addEventListener("touchstart", initialize, true);
  window.addEventListener("touchend", initialize, true);

}

