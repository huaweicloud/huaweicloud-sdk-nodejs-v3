import { CinderExportToImageOption } from './CinderExportToImageOption';


export class CinderExportToImageRequestBody {
    private 'os-volume_upload_image': CinderExportToImageOption | undefined;
    public constructor(osVolumeUploadImage?: any) { 
        this['os-volume_upload_image'] = osVolumeUploadImage;
    }
    public withOsVolumeUploadImage(osVolumeUploadImage: CinderExportToImageOption): CinderExportToImageRequestBody {
        this['os-volume_upload_image'] = osVolumeUploadImage;
        return this;
    }
    public set osVolumeUploadImage(osVolumeUploadImage: CinderExportToImageOption | undefined) {
        this['os-volume_upload_image'] = osVolumeUploadImage;
    }
    public get osVolumeUploadImage() {
        return this['os-volume_upload_image'];
    }
}