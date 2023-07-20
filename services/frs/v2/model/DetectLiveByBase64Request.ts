import { LiveDetectBase64Req } from './LiveDetectBase64Req';


export class DetectLiveByBase64Request {
    private 'Enterprise-Project-Id'?: string;
    public body?: LiveDetectBase64Req;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveByBase64Request {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: LiveDetectBase64Req): DetectLiveByBase64Request {
        this['body'] = body;
        return this;
    }
}