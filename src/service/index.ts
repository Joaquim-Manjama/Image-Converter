const BASE_URL = "https://image-converter-backend-latest.onrender.com/";

export const getSupportedFormats = async(): Promise<string[]> => {
    try  {
        const response = await fetch(`${BASE_URL}/supported-types`);
        const data = await response.json();
        return data;
    } 
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (error) {
        alert("Failed to comunicate with the server. Please try again later. ");
        return [];
    }

}

export const getTypeDescriptions = async(): Promise<string[]> => {
    const response = await fetch(`${BASE_URL}/type-descriptions`);

    const data = await response.json();
    return data;
}

export const convertImage = async(imageFile: File, outputFormat: string): Promise<Blob | null> => {

    const formData = new FormData();

    formData.append('image', imageFile);
    formData.append('format', outputFormat);

    const response = await fetch(`${BASE_URL}/convert-image`, {
        method: 'POST',
        body: formData
    });


    if (!response.ok) {
        if (response.status === 500) {
            alert(`Error occurred during conversion. Please try again later. "Cannot convert to the specified format (${outputFormat})."`);
        }

        return null;
    }

    return await response.blob();
}

export const downloadBlob = (blob: Blob, filename: string):void => {
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
