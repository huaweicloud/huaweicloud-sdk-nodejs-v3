import { PcrTestRecordRequestBody } from './PcrTestRecordRequestBody';


export class RecognizePcrTestRecordRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: PcrTestRecordRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizePcrTestRecordRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: PcrTestRecordRequestBody): RecognizePcrTestRecordRequest {
        this['body'] = body;
        return this;
    }
}