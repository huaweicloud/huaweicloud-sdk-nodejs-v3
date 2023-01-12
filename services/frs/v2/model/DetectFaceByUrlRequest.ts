import { FaceDetectUrlReq } from './FaceDetectUrlReq';


export class DetectFaceByUrlRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: FaceDetectUrlReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectFaceByUrlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceDetectUrlReq): DetectFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}