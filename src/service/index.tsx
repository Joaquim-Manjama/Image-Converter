export const convertImage = async(imageFile: File, outputFormat: string) => {

    const formData = new FormData();

    formData.append('image', imageFile);
    formData.append('format', outputFormat);

    const response = await fetch('http://localhost:8080/convert-image', {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Image conversion failed');
    }

    return await response.blob();
}

export const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

