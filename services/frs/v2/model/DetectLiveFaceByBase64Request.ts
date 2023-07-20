import { LiveDetectFaceBase64Req } from './LiveDetectFaceBase64Req';


export class DetectLiveFaceByBase64Request {
    private 'Enterprise-Project-Id'?: string;
    public body?: LiveDetectFaceBase64Req;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DetectLiveFaceByBase64Request {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: LiveDetectFaceBase64Req): DetectLiveFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}