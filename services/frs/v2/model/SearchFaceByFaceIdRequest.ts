import { FaceSearchFaceIdReq } from './FaceSearchFaceIdReq';


export class SearchFaceByFaceIdRequest {
    private 'face_set_name'?: string;
    private 'Enterprise-Project-Id'?: string;
    public body?: FaceSearchFaceIdReq;
    public constructor(faceSetName?: string) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByFaceIdRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SearchFaceByFaceIdRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceSearchFaceIdReq): SearchFaceByFaceIdRequest {
        this['body'] = body;
        return this;
    }
}