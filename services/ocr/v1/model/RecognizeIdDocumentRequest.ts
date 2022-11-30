import { IdDocumentRequestBody } from './IdDocumentRequestBody';


export class RecognizeIdDocumentRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: IdDocumentRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeIdDocumentRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: IdDocumentRequestBody): RecognizeIdDocumentRequest {
        this['body'] = body;
        return this;
    }
}