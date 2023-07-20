import { GeneralTextRequestBody } from './GeneralTextRequestBody';


export class RecognizeGeneralTextRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: GeneralTextRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeGeneralTextRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: GeneralTextRequestBody): RecognizeGeneralTextRequest {
        this['body'] = body;
        return this;
    }
}