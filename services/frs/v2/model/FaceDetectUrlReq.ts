

export class FaceDetectUrlReq {
    private 'image_url'?: string;
    public attributes?: string;
    public constructor(imageUrl?: string) { 
        this['image_url'] = imageUrl;
    }
    public withImageUrl(imageUrl: string): FaceDetectUrlReq {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withAttributes(attributes: string): FaceDetectUrlReq {
        this['attributes'] = attributes;
        return this;
    }
}