import { ImageUploadItem } from './ImageUploadItem';


export class PresignUploadUrlBody {
    public images?: Array<ImageUploadItem>;
    public constructor(images?: Array<ImageUploadItem>) { 
        this['images'] = images;
    }
    public withImages(images: Array<ImageUploadItem>): PresignUploadUrlBody {
        this['images'] = images;
        return this;
    }
}