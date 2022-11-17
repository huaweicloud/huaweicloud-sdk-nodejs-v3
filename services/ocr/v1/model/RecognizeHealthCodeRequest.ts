import { HealthCodeRequestBody } from './HealthCodeRequestBody';


export class RecognizeHealthCodeRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: HealthCodeRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeHealthCodeRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: HealthCodeRequestBody): RecognizeHealthCodeRequest {
        this['body'] = body;
        return this;
    }
}