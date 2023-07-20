import { HkIdCardRequestBody } from './HkIdCardRequestBody';


export class RecognizeHkIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: HkIdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeHkIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: HkIdCardRequestBody): RecognizeHkIdCardRequest {
        this['body'] = body;
        return this;
    }
}