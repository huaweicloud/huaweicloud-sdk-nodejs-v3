import { LiveDetectFaceUrlReq } from './LiveDetectFaceUrlReq';


export class DetectLiveFaceByUrlRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: LiveDetectFaceUrlReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveFaceByUrlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: LiveDetectFaceUrlReq): DetectLiveFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}