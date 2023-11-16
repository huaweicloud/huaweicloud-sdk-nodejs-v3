import { PeruIdCardRequestBody } from './PeruIdCardRequestBody';


export class RecognizePeruIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: PeruIdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizePeruIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: PeruIdCardRequestBody): RecognizePeruIdCardRequest {
        this['body'] = body;
        return this;
    }
}