import FileSaver from 'file-saver'
export async function downloadImage(id,photo){
    FileSaver.saveAs(photo,`downlaod-${id}.jpg`);
}