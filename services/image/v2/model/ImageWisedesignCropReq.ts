

export class ImageWisedesignCropReq {
    private 'image_base64'?: string | undefined;
    private 'image_url'?: string | undefined;
    public constructor() { 
    }
    public withImageBase64(imageBase64: string): ImageWisedesignCropReq {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
    public withImageUrl(imageUrl: string): ImageWisedesignCropReq {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl() {
        return this['image_url'];
    }
}