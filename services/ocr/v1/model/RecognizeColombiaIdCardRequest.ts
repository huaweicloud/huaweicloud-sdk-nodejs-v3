import { ColombiaIdCardRequestBody } from './ColombiaIdCardRequestBody';


export class RecognizeColombiaIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: ColombiaIdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeColombiaIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: ColombiaIdCardRequestBody): RecognizeColombiaIdCardRequest {
        this['body'] = body;
        return this;
    }
}