

export class ImageData {
    private 'image_id'?: string | undefined;
    public constructor() { 
    }
    public withImageId(imageId: string): ImageData {
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