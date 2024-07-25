import { ImageDetectionReq } from './ImageDetectionReq';


export class CheckImageModerationRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: ImageDetectionReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CheckImageModerationRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: ImageDetectionReq): CheckImageModerationRequest {
        this['body'] = body;
        return this;
    }
}