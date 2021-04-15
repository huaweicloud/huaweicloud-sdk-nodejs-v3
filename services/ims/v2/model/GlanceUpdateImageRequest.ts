import { GlanceUpdateImageRequestBody } from './GlanceUpdateImageRequestBody';


export class GlanceUpdateImageRequest {
    private 'image_id': string | undefined;
    public body?: Array<GlanceUpdateImageRequestBody>;
    public constructor(imageId?: any) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): GlanceUpdateImageRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withBody(body: Array<GlanceUpdateImageRequestBody>): GlanceUpdateImageRequest {
        this['body'] = body;
        return this;
    }
}