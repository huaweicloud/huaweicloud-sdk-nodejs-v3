

export class ShowFacesByFaceIdRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    private 'face_set_name': string | undefined;
    private 'face_id': string | undefined;
    public constructor(faceSetName?: any, faceId?: any) { 
        this['face_set_name'] = faceSetName;
        this['face_id'] = faceId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowFacesByFaceIdRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withFaceSetName(faceSetName: string): ShowFacesByFaceIdRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withFaceId(faceId: string): ShowFacesByFaceIdRequest {
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