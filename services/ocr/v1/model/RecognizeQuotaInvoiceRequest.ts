import { QuotaInvoiceRequestBody } from './QuotaInvoiceRequestBody';


export class RecognizeQuotaInvoiceRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: QuotaInvoiceRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeQuotaInvoiceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: QuotaInvoiceRequestBody): RecognizeQuotaInvoiceRequest {
        this['body'] = body;
        return this;
    }
}