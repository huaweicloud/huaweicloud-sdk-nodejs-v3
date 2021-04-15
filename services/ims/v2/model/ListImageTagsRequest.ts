

export class ListImageTagsRequest {
    private 'image_id': string | undefined;
    public constructor(imageId?: any) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): ListImageTagsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
}