

export class StandardReqDataByNameAndId {
    private 'verification_name'?: string;
    private 'verification_id'?: string;
    private 'face_image'?: string;
    public detail?: boolean;
    public crop?: boolean;
    public constructor(verificationName?: string, verificationId?: string, faceImage?: string) { 
        this['verification_name'] = verificationName;
        this['verification_id'] = verificationId;
        this['face_image'] = faceImage;
    }
    public withVerificationName(verificationName: string): StandardReqDataByNameAndId {
        this['verification_name'] = verificationName;
        return this;
    }
    public set verificationName(verificationName: string  | undefined) {
        this['verification_name'] = verificationName;
    }
    public get verificationName(): string | undefined {
        return this['verification_name'];
    }
    public withVerificationId(verificationId: string): StandardReqDataByNameAndId {
        this['verification_id'] = verificationId;
        return this;
    }
    public set verificationId(verificationId: string  | undefined) {
        this['verification_id'] = verificationId;
    }
    public get verificationId(): string | undefined {
        return this['verification_id'];
    }
    public withFaceImage(faceImage: string): StandardReqDataByNameAndId {
        this['face_image'] = faceImage;
        return this;
    }
    public set faceImage(faceImage: string  | undefined) {
        this['face_image'] = faceImage;
    }
    public get faceImage(): string | undefined {
        return this['face_image'];
    }
    public withDetail(detail: boolean): StandardReqDataByNameAndId {
        this['detail'] = detail;
        return this;
    }
    public withCrop(crop: boolean): StandardReqDataByNameAndId {
        this['crop'] = crop;
        return this;
    }
}