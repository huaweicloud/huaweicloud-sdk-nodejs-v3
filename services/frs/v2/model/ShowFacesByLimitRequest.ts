

export class ShowFacesByLimitRequest {
    private 'Enterprise-Project-Id'?: string;
    private 'face_set_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(faceSetName?: string, offset?: number, limit?: number) { 
        this['face_set_name'] = faceSetName;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowFacesByLimitRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withFaceSetName(faceSetName: string): ShowFacesByLimitRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withOffset(offset: number): ShowFacesByLimitRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowFacesByLimitRequest {
        this['limit'] = limit;
        return this;
    }
}