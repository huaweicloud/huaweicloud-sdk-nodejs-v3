import { InsurancePolicyRequestBody } from './InsurancePolicyRequestBody';


export class RecognizeInsurancePolicyRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: InsurancePolicyRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeInsurancePolicyRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: InsurancePolicyRequestBody): RecognizeInsurancePolicyRequest {
        this['body'] = body;
        return this;
    }
}