import { loadPyodide } from "pyodide";

let pyodide = await loadPyodide({
  // packageCacheDir:"./public/pyodide",
});
await pyodide.loadPackage(["numpy"]);
