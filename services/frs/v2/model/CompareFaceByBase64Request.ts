import { FaceCompareBase64Req } from './FaceCompareBase64Req';


export class CompareFaceByBase64Request {
    private 'Enterprise-Project-Id'?: string;
    public body?: FaceCompareBase64Req;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CompareFaceByBase64Request {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FaceCompareBase64Req): CompareFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}