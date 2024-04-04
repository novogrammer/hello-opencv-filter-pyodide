import './style.css'

// import filterCanny from "./filter_canny";
// import Runner from "./Runner";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <video id="player" playsinline muted autoplay></video>
  <canvas id="before"></canvas>
  <canvas id="after"></canvas>
`
// const player=document.querySelector<HTMLVideoElement>("#player")!;
// const before=document.querySelector<HTMLCanvasElement>("#before")!;
// const after=document.querySelector<HTMLCanvasElement>("#after")!;

// new Runner({
//   player,
//   before,
//   after,
//   filter:filterCanny
// });

import { loadPyodide } from "pyodide";

async function hello_python() {
  let pyodide = await loadPyodide({
  });
  // await pyodide.loadPackage("micropip");
  // const micropip = pyodide.pyimport("micropip");
  // await micropip.install('numpy');
  await pyodide.loadPackage(["numpy"],{
    checkIntegrity:false,
  });

  await pyodide.runPythonAsync(`import numpy as np`);
  return pyodide.runPythonAsync(`x = np.array([1, 2, 3])`);
}

hello_python().then((result) => {
  console.log("Python says that 1+1 =", result);
});

