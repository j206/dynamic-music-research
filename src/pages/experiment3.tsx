import React, { useEffect } from "react";
import { Howl, Howler } from "howler";

export default function Experiment3() {
  const btnFormat =
    "rounded bg-blue-500 p-2 font-bold text-white hover:bg-blue-700";

  function playCoreLoop() {
    const coreLoopFile = new Howl({
      src: ["00_core.mp3"],
      loop: true,
      preload:true
    });
    coreLoopFile.play();
  }
  function playElectroLoop() {
    const coreLoopFile = new Howl({
      src: ["01_electro.mp3"],
      loop: true,
      preload: true,
    });
    coreLoopFile.play();
  }
  function playMathRockLoop() {
    const coreLoopFile = new Howl({
      src: ["02_math_rock.mp3"],
      loop: true,
      preload: true,
    });
    coreLoopFile.play();
  }

  return (
    <div>
      <main className="p-8">
        <h1 className="text-xl font-bold">Experiment 3</h1>
        <li>Playing actual audio.</li>
        <div className="p-2" />
        <div className="flex">
          <button className={btnFormat} onClick={playCoreLoop}>
            CORE LOOP
          </button>
          <button className={btnFormat} onClick={playElectroLoop}>
            ELECTRO LOOP
          </button>
          <button className={btnFormat} onClick={playMathRockLoop}>
            MATH ROCK LOOP
          </button>
        </div>
      </main>
    </div>
  );
}
