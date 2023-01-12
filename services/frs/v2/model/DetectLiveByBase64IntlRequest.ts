import { LiveDetectBase64Req } from './LiveDetectBase64Req';


export class DetectLiveByBase64IntlRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: LiveDetectBase64Req;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveByBase64IntlRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: LiveDetectBase64Req): DetectLiveByBase64IntlRequest {
        this['body'] = body;
        return this;
    }
}