

export class LiveDetectFaceBase64Req {
    private 'image_base64': string | undefined;
    public constructor(imageBase64?: any) { 
        this['image_base64'] = imageBase64;
    }
    public withImageBase64(imageBase64: string): LiveDetectFaceBase64Req {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
}