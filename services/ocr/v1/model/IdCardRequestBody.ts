

export class IdCardRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_verification'?: boolean;
    private 'return_text_location'?: boolean;
    private 'detect_reproduce'?: boolean;
    private 'detect_copy'?: boolean;
    private 'return_portrait_location'?: boolean;
    private 'detect_tampering'?: boolean;
    private 'detect_border_integrity'?: boolean;
    private 'detect_blocking_within_border'?: boolean;
    private 'detect_blur'?: boolean;
    private 'detect_interim'?: boolean;
    private 'detect_glare'?: boolean;
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
    public withDetectTampering(detectTampering: boolean): IdCardRequestBody {
        this['detect_tampering'] = detectTampering;
        return this;
    }
    public set detectTampering(detectTampering: boolean  | undefined) {
        this['detect_tampering'] = detectTampering;
    }
    public get detectTampering(): boolean | undefined {
        return this['detect_tampering'];
    }
    public withDetectBorderIntegrity(detectBorderIntegrity: boolean): IdCardRequestBody {
        this['detect_border_integrity'] = detectBorderIntegrity;
        return this;
    }
    public set detectBorderIntegrity(detectBorderIntegrity: boolean  | undefined) {
        this['detect_border_integrity'] = detectBorderIntegrity;
    }
    public get detectBorderIntegrity(): boolean | undefined {
        return this['detect_border_integrity'];
    }
    public withDetectBlockingWithinBorder(detectBlockingWithinBorder: boolean): IdCardRequestBody {
        this['detect_blocking_within_border'] = detectBlockingWithinBorder;
        return this;
    }
    public set detectBlockingWithinBorder(detectBlockingWithinBorder: boolean  | undefined) {
        this['detect_blocking_within_border'] = detectBlockingWithinBorder;
    }
    public get detectBlockingWithinBorder(): boolean | undefined {
        return this['detect_blocking_within_border'];
    }
    public withDetectBlur(detectBlur: boolean): IdCardRequestBody {
        this['detect_blur'] = detectBlur;
        return this;
    }
    public set detectBlur(detectBlur: boolean  | undefined) {
        this['detect_blur'] = detectBlur;
    }
    public get detectBlur(): boolean | undefined {
        return this['detect_blur'];
    }
    public withDetectInterim(detectInterim: boolean): IdCardRequestBody {
        this['detect_interim'] = detectInterim;
        return this;
    }
    public set detectInterim(detectInterim: boolean  | undefined) {
        this['detect_interim'] = detectInterim;
    }
    public get detectInterim(): boolean | undefined {
        return this['detect_interim'];
    }
    public withDetectGlare(detectGlare: boolean): IdCardRequestBody {
        this['detect_glare'] = detectGlare;
        return this;
    }
    public set detectGlare(detectGlare: boolean  | undefined) {
        this['detect_glare'] = detectGlare;
    }
    public get detectGlare(): boolean | undefined {
        return this['detect_glare'];
    }
}