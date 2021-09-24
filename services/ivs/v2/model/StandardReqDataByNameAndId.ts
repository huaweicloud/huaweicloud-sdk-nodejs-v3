

export class StandardReqDataByNameAndId {
    private 'verification_name': string | undefined;
    private 'verification_id': string | undefined;
    private 'face_image': string | undefined;
    public constructor(verificationName?: any, verificationId?: any, faceImage?: any) { 
        this['verification_name'] = verificationName;
        this['verification_id'] = verificationId;
        this['face_image'] = faceImage;
    }
    public withVerificationName(verificationName: string): StandardReqDataByNameAndId {
        this['verification_name'] = verificationName;
        return this;
    }
    public set verificationName(verificationName: string | undefined) {
        this['verification_name'] = verificationName;
    }
    public get verificationName() {
        return this['verification_name'];
    }
    public withVerificationId(verificationId: string): StandardReqDataByNameAndId {
        this['verification_id'] = verificationId;
        return this;
    }
    public set verificationId(verificationId: string | undefined) {
        this['verification_id'] = verificationId;
    }
    public get verificationId() {
        return this['verification_id'];
    }
    public withFaceImage(faceImage: string): StandardReqDataByNameAndId {
        this['face_image'] = faceImage;
        return this;
    }
    public set faceImage(faceImage: string | undefined) {
        this['face_image'] = faceImage;
    }
    public get faceImage() {
        return this['face_image'];
    }
}