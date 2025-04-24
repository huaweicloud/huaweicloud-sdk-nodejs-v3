

export class ListImageMembersRequest {
    private 'image_id'?: string;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): ListImageMembersRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
}