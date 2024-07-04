

export class CambodianIdCardRequestBody {
    public image?: string;
    public url?: string;
    private 'return_portrait_image'?: boolean;
    private 'return_portrait_location'?: boolean;
    private 'return_idcard_type'?: boolean;
    private 'detect_border_integrity'?: boolean;
    private 'detect_blocking_within_border'?: boolean;
    private 'detect_blur'?: boolean;
    private 'detect_glare'?: boolean;
    private 'return_adjusted_image'?: boolean;
    private 'detect_tampering'?: boolean;
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
    public set returnPortraitImage(returnPortraitImage: boolean  | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage(): boolean | undefined {
        return this['return_portrait_image'];
    }
    public withReturnPortraitLocation(returnPortraitLocation: boolean): CambodianIdCardRequestBody {
        this['return_portrait_location'] = returnPortraitLocation;
        return this;
    }
    public set returnPortraitLocation(returnPortraitLocation: boolean  | undefined) {
        this['return_portrait_location'] = returnPortraitLocation;
    }
    public get returnPortraitLocation(): boolean | undefined {
        return this['return_portrait_location'];
    }
    public withReturnIdcardType(returnIdcardType: boolean): CambodianIdCardRequestBody {
        this['return_idcard_type'] = returnIdcardType;
        return this;
    }
    public set returnIdcardType(returnIdcardType: boolean  | undefined) {
        this['return_idcard_type'] = returnIdcardType;
    }
    public get returnIdcardType(): boolean | undefined {
        return this['return_idcard_type'];
    }
    public withDetectBorderIntegrity(detectBorderIntegrity: boolean): CambodianIdCardRequestBody {
        this['detect_border_integrity'] = detectBorderIntegrity;
        return this;
    }
    public set detectBorderIntegrity(detectBorderIntegrity: boolean  | undefined) {
        this['detect_border_integrity'] = detectBorderIntegrity;
    }
    public get detectBorderIntegrity(): boolean | undefined {
        return this['detect_border_integrity'];
    }
    public withDetectBlockingWithinBorder(detectBlockingWithinBorder: boolean): CambodianIdCardRequestBody {
        this['detect_blocking_within_border'] = detectBlockingWithinBorder;
        return this;
    }
    public set detectBlockingWithinBorder(detectBlockingWithinBorder: boolean  | undefined) {
        this['detect_blocking_within_border'] = detectBlockingWithinBorder;
    }
    public get detectBlockingWithinBorder(): boolean | undefined {
        return this['detect_blocking_within_border'];
    }
    public withDetectBlur(detectBlur: boolean): CambodianIdCardRequestBody {
        this['detect_blur'] = detectBlur;
        return this;
    }
    public set detectBlur(detectBlur: boolean  | undefined) {
        this['detect_blur'] = detectBlur;
    }
    public get detectBlur(): boolean | undefined {
        return this['detect_blur'];
    }
    public withDetectGlare(detectGlare: boolean): CambodianIdCardRequestBody {
        this['detect_glare'] = detectGlare;
        return this;
    }
    public set detectGlare(detectGlare: boolean  | undefined) {
        this['detect_glare'] = detectGlare;
    }
    public get detectGlare(): boolean | undefined {
        return this['detect_glare'];
    }
    public withReturnAdjustedImage(returnAdjustedImage: boolean): CambodianIdCardRequestBody {
        this['return_adjusted_image'] = returnAdjustedImage;
        return this;
    }
    public set returnAdjustedImage(returnAdjustedImage: boolean  | undefined) {
        this['return_adjusted_image'] = returnAdjustedImage;
    }
    public get returnAdjustedImage(): boolean | undefined {
        return this['return_adjusted_image'];
    }
    public withDetectTampering(detectTampering: boolean): CambodianIdCardRequestBody {
        this['detect_tampering'] = detectTampering;
        return this;
    }
    public set detectTampering(detectTampering: boolean  | undefined) {
        this['detect_tampering'] = detectTampering;
    }
    public get detectTampering(): boolean | undefined {
        return this['detect_tampering'];
    }
}