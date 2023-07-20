import { CambodianIdCardRequestBody } from './CambodianIdCardRequestBody';


export class RecognizeCambodianIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: CambodianIdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeCambodianIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: CambodianIdCardRequestBody): RecognizeCambodianIdCardRequest {
        this['body'] = body;
        return this;
    }
}