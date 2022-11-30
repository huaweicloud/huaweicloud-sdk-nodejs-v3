

export class GlanceCreateTagRequest {
    private 'image_id': string | undefined;
    public tag: string;
    public constructor(imageId?: any, tag?: any) { 
        this['image_id'] = imageId;
        this['tag'] = tag;
    }
    public withImageId(imageId: string): GlanceCreateTagRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withTag(tag: string): GlanceCreateTagRequest {
        this['tag'] = tag;
        return this;
    }
}