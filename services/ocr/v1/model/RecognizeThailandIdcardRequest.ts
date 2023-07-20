import { ThailandIdcardRequestBody } from './ThailandIdcardRequestBody';


export class RecognizeThailandIdcardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: ThailandIdcardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeThailandIdcardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: ThailandIdcardRequestBody): RecognizeThailandIdcardRequest {
        this['body'] = body;
        return this;
    }
}