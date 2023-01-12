import { UpdateFaceReq } from './UpdateFaceReq';


export class UpdateFaceRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    private 'face_set_name': string | undefined;
    public body?: UpdateFaceReq;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateFaceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withFaceSetName(faceSetName: string): UpdateFaceRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: UpdateFaceReq): UpdateFaceRequest {
        this['body'] = body;
        return this;
    }
}