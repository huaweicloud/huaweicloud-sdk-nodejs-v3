import { FaceSearchUrlReq } from './FaceSearchUrlReq';


export class SearchFaceByUrlRequest {
    private 'face_set_name': string | undefined;
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: FaceSearchUrlReq;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByUrlRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SearchFaceByUrlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceSearchUrlReq): SearchFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}