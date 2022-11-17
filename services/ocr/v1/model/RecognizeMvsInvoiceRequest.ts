import { MvsInvoiceRequestBody } from './MvsInvoiceRequestBody';


export class RecognizeMvsInvoiceRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: MvsInvoiceRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeMvsInvoiceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: MvsInvoiceRequestBody): RecognizeMvsInvoiceRequest {
        this['body'] = body;
        return this;
    }
}