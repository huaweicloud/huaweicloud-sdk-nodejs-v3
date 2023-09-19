import { VietnamIdCardRequestBody } from './VietnamIdCardRequestBody';


export class RecognizeVietnamIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: VietnamIdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeVietnamIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: VietnamIdCardRequestBody): RecognizeVietnamIdCardRequest {
        this['body'] = body;
        return this;
    }
}