import { IdCardRequestBody } from './IdCardRequestBody';


export class RecognizeIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: IdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IdCardRequestBody): RecognizeIdCardRequest {
        this['body'] = body;
        return this;
    }
}