import React from "react";

export default function experiment1() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Experiment 1</h1>
      <main>
        <li>Check console.</li>
        <li>Create audio element.</li>
        <li>Test MP3/OGG/WAV with .canPlayType on the element.</li>
      </main>
    </div>
  );
}

if (typeof window !== "undefined") {
  // Determine the type
  const testAudioElement = document.createElement("audio");
  console.log(testAudioElement.canPlayType("audio/mp3"));
  console.log(testAudioElement.canPlayType("audio/ogg"));
  console.log(testAudioElement.canPlayType("audio/wav"));
}
