import { ChileIdCardRequestBody } from './ChileIdCardRequestBody';


export class RecognizeChileIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: ChileIdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeChileIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: ChileIdCardRequestBody): RecognizeChileIdCardRequest {
        this['body'] = body;
        return this;
    }
}