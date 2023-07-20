import { BankcardRequestBody } from './BankcardRequestBody';


export class RecognizeBankcardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: BankcardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeBankcardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: BankcardRequestBody): RecognizeBankcardRequest {
        this['body'] = body;
        return this;
    }
}