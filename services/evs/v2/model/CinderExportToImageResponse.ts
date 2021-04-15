import { Image } from './Image';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CinderExportToImageResponse extends SdkResponse {
    private 'os-volume_upload_image'?: Image | undefined;
    public constructor() { 
        super();
    }
    public withOsVolumeUploadImage(osVolumeUploadImage: Image): CinderExportToImageResponse {
        this['os-volume_upload_image'] = osVolumeUploadImage;
        return this;
    }
    public set osVolumeUploadImage(osVolumeUploadImage: Image | undefined) {
        this['os-volume_upload_image'] = osVolumeUploadImage;
    }
    public get osVolumeUploadImage() {
        return this['os-volume_upload_image'];
    }
}