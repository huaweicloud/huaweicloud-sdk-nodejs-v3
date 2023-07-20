import { MacaoIdCardRequestBody } from './MacaoIdCardRequestBody';


export class RecognizeMacaoIdCardRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: MacaoIdCardRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeMacaoIdCardRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: MacaoIdCardRequestBody): RecognizeMacaoIdCardRequest {
        this['body'] = body;
        return this;
    }
}