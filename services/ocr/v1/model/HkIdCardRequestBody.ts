

export class HkIdCardRequestBody {
    public image?: string;
    public url?: string;
    private 'return_portrait_image'?: boolean | undefined;
    private 'return_portrait_location'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): HkIdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): HkIdCardRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): HkIdCardRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage() {
        return this['return_portrait_image'];
    }
    public withReturnPortraitLocation(returnPortraitLocation: boolean): HkIdCardRequestBody {
        this['return_portrait_location'] = returnPortraitLocation;
        return this;
    }
    public set returnPortraitLocation(returnPortraitLocation: boolean | undefined) {
        this['return_portrait_location'] = returnPortraitLocation;
    }
    public get returnPortraitLocation() {
        return this['return_portrait_location'];
    }
}