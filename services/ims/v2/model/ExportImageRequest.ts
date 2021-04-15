import { ExportImageRequestBody } from './ExportImageRequestBody';


export class ExportImageRequest {
    private 'image_id': string | undefined;
    public body?: ExportImageRequestBody;
    public constructor(imageId?: any) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): ExportImageRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withBody(body: ExportImageRequestBody): ExportImageRequest {
        this['body'] = body;
        return this;
    }
}