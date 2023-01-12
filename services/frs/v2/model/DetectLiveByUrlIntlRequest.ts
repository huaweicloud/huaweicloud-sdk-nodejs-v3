import { LiveDetectUrlReq } from './LiveDetectUrlReq';


export class DetectLiveByUrlIntlRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: LiveDetectUrlReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveByUrlIntlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: LiveDetectUrlReq): DetectLiveByUrlIntlRequest {
        this['body'] = body;
        return this;
    }
}