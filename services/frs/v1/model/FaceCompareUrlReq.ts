

export class FaceCompareUrlReq {
    private 'image1_url': string | undefined;
    private 'image2_url': string | undefined;
    public constructor(image1Url?: any, image2Url?: any) { 
        this['image1_url'] = image1Url;
        this['image2_url'] = image2Url;
    }
    public withImage1Url(image1Url: string): FaceCompareUrlReq {
        this['image1_url'] = image1Url;
        return this;
    }
    public set image1Url(image1Url: string | undefined) {
        this['image1_url'] = image1Url;
    }
    public get image1Url() {
        return this['image1_url'];
    }
    public withImage2Url(image2Url: string): FaceCompareUrlReq {
        this['image2_url'] = image2Url;
        return this;
    }
    public set image2Url(image2Url: string | undefined) {
        this['image2_url'] = image2Url;
    }
    public get image2Url() {
        return this['image2_url'];
    }
}