

export class UpdateFaceReq {
    private 'external_fields'?: object;
    private 'external_image_id'?: string;
    private 'face_id'?: string;
    public constructor(faceId?: string) { 
        this['face_id'] = faceId;
    }
    public withExternalFields(externalFields: object): UpdateFaceReq {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object  | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields(): object | undefined {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): UpdateFaceReq {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string  | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId(): string | undefined {
        return this['external_image_id'];
    }
    public withFaceId(faceId: string): UpdateFaceReq {
        this['face_id'] = faceId;
        return this;
    }
    public set faceId(faceId: string  | undefined) {
        this['face_id'] = faceId;
    }
    public get faceId(): string | undefined {
        return this['face_id'];
    }
}