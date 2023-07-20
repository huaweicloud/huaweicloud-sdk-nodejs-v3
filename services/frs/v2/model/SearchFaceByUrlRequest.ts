import { FaceSearchUrlReq } from './FaceSearchUrlReq';


export class SearchFaceByUrlRequest {
    private 'face_set_name'?: string;
    private 'Enterprise-Project-Id'?: string;
    public body?: FaceSearchUrlReq;
    public constructor(faceSetName?: string) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByUrlRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SearchFaceByUrlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceSearchUrlReq): SearchFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}