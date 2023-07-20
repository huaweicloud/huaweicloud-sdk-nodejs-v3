import { HandwritingRequestBody } from './HandwritingRequestBody';


export class RecognizeHandwritingRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: HandwritingRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeHandwritingRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: HandwritingRequestBody): RecognizeHandwritingRequest {
        this['body'] = body;
        return this;
    }
}