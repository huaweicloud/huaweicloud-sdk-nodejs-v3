

export class IdCardRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_verification'?: boolean;
    private 'return_text_location'?: boolean;
    private 'detect_reproduce'?: boolean;
    private 'detect_copy'?: boolean;
    private 'return_portrait_location'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): IdCardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): IdCardRequestBody {
        this['url'] = url;
        return this;
    }
    public withSide(side: string): IdCardRequestBody {
        this['side'] = side;
        return this;
    }
    public withReturnVerification(returnVerification: boolean): IdCardRequestBody {
        this['return_verification'] = returnVerification;
        return this;
    }
    public set returnVerification(returnVerification: boolean  | undefined) {
        this['return_verification'] = returnVerification;
    }
    public get returnVerification(): boolean | undefined {
        return this['return_verification'];
    }
    public withReturnTextLocation(returnTextLocation: boolean): IdCardRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
    public withDetectReproduce(detectReproduce: boolean): IdCardRequestBody {
        this['detect_reproduce'] = detectReproduce;
        return this;
    }
    public set detectReproduce(detectReproduce: boolean  | undefined) {
        this['detect_reproduce'] = detectReproduce;
    }
    public get detectReproduce(): boolean | undefined {
        return this['detect_reproduce'];
    }
    public withDetectCopy(detectCopy: boolean): IdCardRequestBody {
        this['detect_copy'] = detectCopy;
        return this;
    }
    public set detectCopy(detectCopy: boolean  | undefined) {
        this['detect_copy'] = detectCopy;
    }
    public get detectCopy(): boolean | undefined {
        return this['detect_copy'];
    }
    public withReturnPortraitLocation(returnPortraitLocation: boolean): IdCardRequestBody {
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