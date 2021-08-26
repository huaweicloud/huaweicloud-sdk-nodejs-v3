

export class FaceCompareBase64Req {
    private 'image2_base64': string | undefined;
    private 'image1_base64': string | undefined;
    public constructor(image2Base64?: any, image1Base64?: any) { 
        this['image2_base64'] = image2Base64;
        this['image1_base64'] = image1Base64;
    }
    public withImage2Base64(image2Base64: string): FaceCompareBase64Req {
        this['image2_base64'] = image2Base64;
        return this;
    }
    public set image2Base64(image2Base64: string | undefined) {
        this['image2_base64'] = image2Base64;
    }
    public get image2Base64() {
        return this['image2_base64'];
    }
    public withImage1Base64(image1Base64: string): FaceCompareBase64Req {
        this['image1_base64'] = image1Base64;
        return this;
    }
    public set image1Base64(image1Base64: string | undefined) {
        this['image1_base64'] = image1Base64;
    }
    public get image1Base64() {
        return this['image1_base64'];
    }
}