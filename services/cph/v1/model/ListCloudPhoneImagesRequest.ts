

export class ListCloudPhoneImagesRequest {
    private 'image_type'?: string;
    public constructor() { 
    }
    public withImageType(imageType: string): ListCloudPhoneImagesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
}