import { TaxiInvoiceRequestBody } from './TaxiInvoiceRequestBody';


export class RecognizeTaxiInvoiceRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: TaxiInvoiceRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeTaxiInvoiceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: TaxiInvoiceRequestBody): RecognizeTaxiInvoiceRequest {
        this['body'] = body;
        return this;
    }
}