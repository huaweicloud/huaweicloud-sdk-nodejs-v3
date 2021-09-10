import { QuotaInvoiceRequestBody } from './QuotaInvoiceRequestBody';


export class RecognizeQuotaInvoiceRequest {
    public body?: QuotaInvoiceRequestBody;
    public constructor() { 
    }
    public withBody(body: QuotaInvoiceRequestBody): RecognizeQuotaInvoiceRequest {
        this['body'] = body;
        return this;
    }
}