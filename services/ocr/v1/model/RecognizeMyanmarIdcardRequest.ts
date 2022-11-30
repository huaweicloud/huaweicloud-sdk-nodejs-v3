import { MyanmarIdcardRequestBody } from './MyanmarIdcardRequestBody';


export class RecognizeMyanmarIdcardRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: MyanmarIdcardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeMyanmarIdcardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: MyanmarIdcardRequestBody): RecognizeMyanmarIdcardRequest {
        this['body'] = body;
        return this;
    }
}