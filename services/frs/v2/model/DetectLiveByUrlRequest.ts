import { LiveDetectUrlReq } from './LiveDetectUrlReq';


export class DetectLiveByUrlRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: LiveDetectUrlReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveByUrlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: LiveDetectUrlReq): DetectLiveByUrlRequest {
        this['body'] = body;
        return this;
    }
}