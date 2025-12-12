import Benefit from "./components/Benefit"
import Format from "./components/Format";
import { useState } from "react";

function App() {

  const [selectedOutputFormat, setSelectedOutputFormat] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  const supportedImageTypes: string[][] = [
    ["BMP", "Uncompressed"],
    ["GIF", "Animation Support"],
    ["JPG", "Small file size"],
    ["PNG", "Lossless, transparent"],
    ["PPM", "Binary"],
    ["WEBP", "Modern, efficient"],
  ];

  const handleFormatChoice = (imageType: string): void => {
    setSelectedOutputFormat(imageType);
  }

  return (
    <div className="background w-[100%] h-[100%] flex justify-center">
      {/*Main Container*/}
      <div className="w-[60%] h-[100%] flex items-center flex-col gap-[30px]">
        
        {/*Title*/}
        <h1 className="text-6xl font-bold text-white pt-20"><span className="text-[#3dd6c6]">Image</span> Converter</h1>
        
        {/*Subtitle*/}
        <p className="text-gray-400 text-lg">Transform your images instantly. Fast, secure, and completely free.</p>

        {/*The Tree boxes*/}
        <div className="flex flex-row w-[80%] h-[60px] justify-between">
          <Benefit label="Lightning Fast" icon="bolt"/>
          <Benefit label="100% Secure" icon="shield"/>
          <Benefit label="High Quality" icon="star_shine"/>
        </div>

        {/*Conversion Box*/}
        <div className="p-10 bg-[#111111] border-2 border-gray-800 w-[90%] rounded-2xl mt-[40px] border flex flex-col items-center gap-[10px]">

          {/*Drag and Drop*/}
          <div className="pt-10 pb-10 border-2 border-gray-600 border-dotted w-[90%] rounded-2xl flex flex-col justify-center items-center gap-[10px] cursor-pointer transition-all duration-300 hover:border-[#3dd6c6] hover:bg-[#151515]">
            <div className="rounded-lg bg-[#222233] w-[65px] h-[65px] flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400 scale-180">upload</span>
            </div>
            <h2 className="text-white text-lg font-bold">Drag & drop your image</h2>
            <p className="text-gray-400 text-m">or <span className="text-[#3dd6c6] font-bold">browse</span> to choose a file</p>
          </div>

          {/*Choose Output Format*/}
          <span className="w-[100%] flex flex-row justify-between mt-[20px] mb-[20px]"><p className="text-m text-white font-bold">Output Format</p> <p className="text-sm text-gray-400">Select your target format</p></span>
          <div className="w-[100%] flex flex-row flex-wrap gap-[30px] justify-center">
            {supportedImageTypes.map(((imageType, key: number) => (
              <span onClick={() => handleFormatChoice(imageType[0])}>
                <Format key={key} type={imageType[0]} description={imageType[1]} active={imageType[0] === selectedOutputFormat}/>   
              </span>         
            )))}
          </div>


          {/*Conversion Button*/}
          <button className={`flex flex-row text-lg ${fileUploaded && selectedOutputFormat != "" ? "bg-[#3dd6c6] cursor-pointers" : "bg-[#1e6b63] cursor-not-allowed"} p-[15px] rounded-xl mt-[30px]`}>Convert Now <span className="material-symbols-outlined ml-[5px] mt-[3px] scale-80"> arrow_forward </span></button>

        </div>
        <p className="text-gray-400 text-sm">Your files are processed locally and never uploaded to any server</p>
      </div>
    </div>
  )
}

export default App