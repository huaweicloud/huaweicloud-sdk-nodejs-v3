import { GlanceDeleteImageRequestBody } from './GlanceDeleteImageRequestBody';


export class GlanceDeleteImageRequest {
    private 'image_id'?: string;
    public body?: GlanceDeleteImageRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): GlanceDeleteImageRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: GlanceDeleteImageRequestBody): GlanceDeleteImageRequest {
        this['body'] = body;
        return this;
    }
}