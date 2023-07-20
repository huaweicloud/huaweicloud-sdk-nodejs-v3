

export class ThailandIdcardRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_portrait_image'?: boolean;
    private 'return_portrait_location'?: boolean;
    private 'return_idcard_type'?: boolean;
    private 'return_text_location'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): ThailandIdcardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ThailandIdcardRequestBody {
        this['url'] = url;
        return this;
    }
    public withSide(side: string): ThailandIdcardRequestBody {
        this['side'] = side;
        return this;
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): ThailandIdcardRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean  | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage(): boolean | undefined {
        return this['return_portrait_image'];
    }
    public withReturnPortraitLocation(returnPortraitLocation: boolean): ThailandIdcardRequestBody {
        this['return_portrait_location'] = returnPortraitLocation;
        return this;
    }
    public set returnPortraitLocation(returnPortraitLocation: boolean  | undefined) {
        this['return_portrait_location'] = returnPortraitLocation;
    }
    public get returnPortraitLocation(): boolean | undefined {
        return this['return_portrait_location'];
    }
    public withReturnIdcardType(returnIdcardType: boolean): ThailandIdcardRequestBody {
        this['return_idcard_type'] = returnIdcardType;
        return this;
    }
    public set returnIdcardType(returnIdcardType: boolean  | undefined) {
        this['return_idcard_type'] = returnIdcardType;
    }
    public get returnIdcardType(): boolean | undefined {
        return this['return_idcard_type'];
    }
    public withReturnTextLocation(returnTextLocation: boolean): ThailandIdcardRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
}