import { BusinessCardRequestBody } from './BusinessCardRequestBody';


export class RecognizeBusinessCardRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: BusinessCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeBusinessCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: BusinessCardRequestBody): RecognizeBusinessCardRequest {
        this['body'] = body;
        return this;
    }
}