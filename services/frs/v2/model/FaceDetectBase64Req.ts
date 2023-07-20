

export class FaceDetectBase64Req {
    private 'image_base64'?: string;
    public attributes?: string;
    public constructor(imageBase64?: string) { 
        this['image_base64'] = imageBase64;
    }
    public withImageBase64(imageBase64: string): FaceDetectBase64Req {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string  | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64(): string | undefined {
        return this['image_base64'];
    }
    public withAttributes(attributes: string): FaceDetectBase64Req {
        this['attributes'] = attributes;
        return this;
    }
}