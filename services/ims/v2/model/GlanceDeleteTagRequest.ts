

export class GlanceDeleteTagRequest {
    private 'image_id'?: string;
    public tag?: string;
    public constructor(imageId?: string, tag?: string) { 
        this['image_id'] = imageId;
        this['tag'] = tag;
    }
    public withImageId(imageId: string): GlanceDeleteTagRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withTag(tag: string): GlanceDeleteTagRequest {
        this['tag'] = tag;
        return this;
    }
}