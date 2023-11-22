import { downloadCVFile } from "../utils/cvFilePathDateTime";

const HandleDownloadCV = () => {
  return <button
  onClick={downloadCVFile}
  className={`px-4 py-2 rounded-2xl transition-colors duration-700 border border-black hover:bg-slate-500 dark:border-white  dark:hover:bg-gray-700 ` }>
  Descargar CV
</button>
};

export default HandleDownloadCV;