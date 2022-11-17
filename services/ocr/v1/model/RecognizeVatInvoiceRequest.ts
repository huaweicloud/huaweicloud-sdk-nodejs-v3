import { VatInvoiceRequestBody } from './VatInvoiceRequestBody';


export class RecognizeVatInvoiceRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: VatInvoiceRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeVatInvoiceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: VatInvoiceRequestBody): RecognizeVatInvoiceRequest {
        this['body'] = body;
        return this;
    }
}