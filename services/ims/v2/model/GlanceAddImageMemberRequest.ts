import { GlanceAddImageMemberRequestBody } from './GlanceAddImageMemberRequestBody';


export class GlanceAddImageMemberRequest {
    private 'image_id'?: string;
    public body?: GlanceAddImageMemberRequestBody;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): GlanceAddImageMemberRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withBody(body: GlanceAddImageMemberRequestBody): GlanceAddImageMemberRequest {
        this['body'] = body;
        return this;
    }
}