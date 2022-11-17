import { InvoiceVerificationRequestBody } from './InvoiceVerificationRequestBody';


export class RecognizeInvoiceVerificationRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: InvoiceVerificationRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeInvoiceVerificationRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: InvoiceVerificationRequestBody): RecognizeInvoiceVerificationRequest {
        this['body'] = body;
        return this;
    }
}