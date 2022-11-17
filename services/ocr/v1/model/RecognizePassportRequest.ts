import { PassportRequestBody } from './PassportRequestBody';


export class RecognizePassportRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: PassportRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizePassportRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: PassportRequestBody): RecognizePassportRequest {
        this['body'] = body;
        return this;
    }
}