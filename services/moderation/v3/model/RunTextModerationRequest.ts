import { TextDetectionReq } from './TextDetectionReq';


export class RunTextModerationRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: TextDetectionReq;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RunTextModerationRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: TextDetectionReq): RunTextModerationRequest {
        this['body'] = body;
        return this;
    }
}