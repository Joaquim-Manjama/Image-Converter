import Benefit from "./components/Benefit"
import Format from "./components/Format";
import { useState } from "react";

function App() {

  const [supportedImageTypes, setSupportedImageTypes] = useState([
    ["BMP", "Uncompressed", false],
    ["GIF", "Animation Support", false],
    ["JPG", "Small file size", false],
    ["PNG", "Lossless, transparent", false],
    ["PPM", "Binary", false],
    ["WEBP", "Modern, efficient", false],
    
    
  ]);

  const handleFormatChoice = (imageType: string | boolean): void => {
    setSupportedImageTypes(prev => [prev.map(type => imageType == type[0] ? type[2] = true : type[2] = false)]);
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
          <div className="pt-10 pb-10 border-2 border-gray-600 border-dotted w-[90%] rounded-2xl flex flex-col justify-center items-center gap-[10px]">
            <div className="rounded-lg bg-gray-700 w-[90px] h-[90px] flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400 scale-200">upload</span>
            </div>
            <h2 className="text-white text-xl font-bold">Drag & drop your image</h2>
            <p className="text-gray-400 text-lg">or <span className="text-[#3dd6c6] font-bold">browse</span> to choose a file</p>
          </div>

          {/*Choose Output Format*/}
          <span className="w-[100%] flex flex-row justify-between mt-[20px] mb-[20px]"><p className="text-m text-white font-bold">Output Format</p> <p className="text-sm text-gray-400">Select your target format</p></span>
          <div className="w-[100%] flex flex-row flex-wrap gap-[30px] justify-center">
            {supportedImageTypes.map(((imageType, key: number) => (
              <span onClick={() => handleFormatChoice(imageType[0])}>
                <Format key={key} type={imageType[0]} description={imageType[1]} active={imageType[2]}/>   
              </span>         
            )))}
          </div>


          {/*Conversion Button*/}
          <button className="flex flex-row text-lg bg-[#1e6b63] p-[15px] rounded-xl mt-[30px]">Convert Now <span className="material-symbols-outlined ml-[5px] mt-[3px] scale-80"> arrow_forward </span></button>

        </div>
        <p className="text-gray-400 text-sm">Your files are processed locally and never uploaded to any server</p>
      </div>
    </div>
  )
}

export default App
