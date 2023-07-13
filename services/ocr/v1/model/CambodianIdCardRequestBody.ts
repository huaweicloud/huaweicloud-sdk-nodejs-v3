

export class CambodianIdCardRequestBody {
    public image?: string;
    public url?: string;
    private 'return_portrait_image'?: boolean | undefined;
    private 'return_portrait_location'?: boolean | undefined;
    private 'return_idcard_type'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): CambodianIdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): CambodianIdCardRequestBody {
        this['url'] = url;
        return this;
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): CambodianIdCardRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage() {
        return this['return_portrait_image'];
    }
    public withReturnPortraitLocation(returnPortraitLocation: boolean): CambodianIdCardRequestBody {
        this['return_portrait_location'] = returnPortraitLocation;
        return this;
    }
    public set returnPortraitLocation(returnPortraitLocation: boolean | undefined) {
        this['return_portrait_location'] = returnPortraitLocation;
    }
    public get returnPortraitLocation() {
        return this['return_portrait_location'];
    }
    public withReturnIdcardType(returnIdcardType: boolean): CambodianIdCardRequestBody {
        this['return_idcard_type'] = returnIdcardType;
        return this;
    }
    public set returnIdcardType(returnIdcardType: boolean | undefined) {
        this['return_idcard_type'] = returnIdcardType;
    }
    public get returnIdcardType() {
        return this['return_idcard_type'];
    }
}