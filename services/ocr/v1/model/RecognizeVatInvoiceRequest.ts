import { VatInvoiceRequestBody } from './VatInvoiceRequestBody';


export class RecognizeVatInvoiceRequest {
    public body?: VatInvoiceRequestBody;
    public constructor() { 
    }
    public withBody(body: VatInvoiceRequestBody): RecognizeVatInvoiceRequest {
        this['body'] = body;
        return this;
    }
}