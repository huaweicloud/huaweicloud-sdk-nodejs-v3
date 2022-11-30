

export class UpdateFaceReq {
    private 'external_fields'?: object | undefined;
    private 'external_image_id'?: string | undefined;
    private 'face_id': string | undefined;
    public constructor(faceId?: any) { 
        this['face_id'] = faceId;
    }
    public withExternalFields(externalFields: object): UpdateFaceReq {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields() {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): UpdateFaceReq {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId() {
        return this['external_image_id'];
    }
    public withFaceId(faceId: string): UpdateFaceReq {
        this['face_id'] = faceId;
        return this;
    }
    public set faceId(faceId: string | undefined) {
        this['face_id'] = faceId;
    }
    public get faceId() {
        return this['face_id'];
    }
}