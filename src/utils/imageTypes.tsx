import { getSupportedFormats, getTypeDescriptions } from '../service';

export const getImageFormatInformation = async() => {
    const types: string[] = await getSupportedFormats();
    const descriptions: string[] = await getTypeDescriptions();
    const formatInfo: string[][] = [];

    for (let i = 0; i < types.length; i++) {
        formatInfo.push([types[i].toUpperCase(), descriptions[i] || types[i]]);
    }

    return formatInfo;
}