import { MvsInvoiceRequestBody } from './MvsInvoiceRequestBody';


export class RecognizeMvsInvoiceRequest {
    public body?: MvsInvoiceRequestBody;
    public constructor() { 
    }
    public withBody(body: MvsInvoiceRequestBody): RecognizeMvsInvoiceRequest {
        this['body'] = body;
        return this;
    }
}