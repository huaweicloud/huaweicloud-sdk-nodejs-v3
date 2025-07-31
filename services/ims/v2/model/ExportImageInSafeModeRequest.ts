import { ExportImageRequestBody } from './ExportImageRequestBody';


export class ExportImageInSafeModeRequest {
    private 'image_id'?: string;
    public body?: ExportImageRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): ExportImageInSafeModeRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: ExportImageRequestBody): ExportImageInSafeModeRequest {
        this['body'] = body;
        return this;
    }
}