import { TaxiInvoiceRequestBody } from './TaxiInvoiceRequestBody';


export class RecognizeTaxiInvoiceRequest {
    public body?: TaxiInvoiceRequestBody;
    public constructor() { 
    }
    public withBody(body: TaxiInvoiceRequestBody): RecognizeTaxiInvoiceRequest {
        this['body'] = body;
        return this;
    }
}