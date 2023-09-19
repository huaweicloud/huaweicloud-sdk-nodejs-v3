import { AcceptanceBillRequestBody } from './AcceptanceBillRequestBody';


export class RecognizeAcceptanceBillRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: AcceptanceBillRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeAcceptanceBillRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: AcceptanceBillRequestBody): RecognizeAcceptanceBillRequest {
        this['body'] = body;
        return this;
    }
}