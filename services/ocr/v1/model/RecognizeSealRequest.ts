import { SealRequestBody } from './SealRequestBody';


export class RecognizeSealRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: SealRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeSealRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: SealRequestBody): RecognizeSealRequest {
        this['body'] = body;
        return this;
    }
}