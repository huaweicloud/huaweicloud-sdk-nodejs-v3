import { AutoClassificationRequestBody } from './AutoClassificationRequestBody';


export class RecognizeAutoClassificationRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: AutoClassificationRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeAutoClassificationRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: AutoClassificationRequestBody): RecognizeAutoClassificationRequest {
        this['body'] = body;
        return this;
    }
}