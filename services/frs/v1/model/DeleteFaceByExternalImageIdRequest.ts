

export class DeleteFaceByExternalImageIdRequest {
    private 'face_set_name': string | undefined;
    private 'external_image_id': string | undefined;
    public constructor(faceSetName?: any, externalImageId?: any) { 
        this['face_set_name'] = faceSetName;
        this['external_image_id'] = externalImageId;
    }
    public withFaceSetName(faceSetName: string): DeleteFaceByExternalImageIdRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withExternalImageId(externalImageId: string): DeleteFaceByExternalImageIdRequest {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId() {
        return this['external_image_id'];
    }
}