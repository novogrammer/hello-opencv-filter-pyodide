import { loadPyodide } from "pyodide";

let pyodide = await loadPyodide({
});
await pyodide.loadPackage(["numpy","opencv-python"]);
