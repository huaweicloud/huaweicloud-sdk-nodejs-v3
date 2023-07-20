

export class DeleteImageTagRequest {
    private 'image_id'?: string;
    public key?: string;
    public constructor(imageId?: string, key?: string) { 
        this['image_id'] = imageId;
        this['key'] = key;
    }
    public withImageId(imageId: string): DeleteImageTagRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withKey(key: string): DeleteImageTagRequest {
        this['key'] = key;
        return this;
    }
}