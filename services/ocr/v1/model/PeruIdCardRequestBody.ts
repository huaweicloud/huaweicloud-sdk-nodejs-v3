

export class PeruIdCardRequestBody {
    public image?: string;
    public url?: string;
    private 'return_portrait_image'?: boolean;
    private 'return_portrait_location'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): PeruIdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): PeruIdCardRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): PeruIdCardRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean  | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage(): boolean | undefined {
        return this['return_portrait_image'];
    }
    public withReturnPortraitLocation(returnPortraitLocation: boolean): PeruIdCardRequestBody {
        this['return_portrait_location'] = returnPortraitLocation;
        return this;
    }
    public set returnPortraitLocation(returnPortraitLocation: boolean  | undefined) {
        this['return_portrait_location'] = returnPortraitLocation;
    }
    public get returnPortraitLocation(): boolean | undefined {
        return this['return_portrait_location'];
    }
}