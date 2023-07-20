

export class ShowFacesByFaceIdRequest {
    private 'Enterprise-Project-Id'?: string;
    private 'face_set_name'?: string;
    private 'face_id'?: string;
    public constructor(faceSetName?: string, faceId?: string) { 
        this['face_set_name'] = faceSetName;
        this['face_id'] = faceId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowFacesByFaceIdRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withFaceSetName(faceSetName: string): ShowFacesByFaceIdRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withFaceId(faceId: string): ShowFacesByFaceIdRequest {
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