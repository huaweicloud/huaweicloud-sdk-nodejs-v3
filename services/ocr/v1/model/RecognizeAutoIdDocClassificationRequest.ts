import { AutoIdDocClassificationRequestBody } from './AutoIdDocClassificationRequestBody';


export class RecognizeAutoIdDocClassificationRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: AutoIdDocClassificationRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeAutoIdDocClassificationRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: AutoIdDocClassificationRequestBody): RecognizeAutoIdDocClassificationRequest {
        this['body'] = body;
        return this;
    }
}