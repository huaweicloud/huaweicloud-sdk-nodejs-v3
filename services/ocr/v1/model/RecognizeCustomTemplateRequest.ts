import { CustomTemplateRequestBody } from './CustomTemplateRequestBody';


export class RecognizeCustomTemplateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: CustomTemplateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeCustomTemplateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: CustomTemplateRequestBody): RecognizeCustomTemplateRequest {
        this['body'] = body;
        return this;
    }
}