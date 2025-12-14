// import { buildInputFile, execute } from 'wasm-imagemagick'

// const convertImage = async (imageName: string, imagePath: string, outputType: string) => {
  
//     console.log("Conversion has begun...");

//     const { outputFiles } = await execute({
//       inputFiles: [await buildInputFile(imagePath, imageName)],
//       commands: [
//         `convert ${imageName} output.${outputType}`,
//       ],
//     })

//     console.log("Conversion complete");
//     console.log(outputFiles[0]);
// }

// export default convertImage;

// import { buildInputFile, execute, loadImageElement } from 'wasm-imagemagick'

// const { outputFiles, exitCode} = await execute({
//   inputFiles: [await buildInputFile('http://some-cdn.com/foo/fn.png', 'image1.png')],
//   commands: [
//     'convert image1.png -rotate 70 image2.gif',
//     // heads up: the next command uses 'image2.gif' which was the output of previous command:
//     'convert image2.gif -scale 23% image3.jpg',
//   ],
// })