import { InvoiceVerificationRequestBody } from './InvoiceVerificationRequestBody';


export class RecognizeInvoiceVerificationRequest {
    public body?: InvoiceVerificationRequestBody;
    public constructor() { 
    }
    public withBody(body: InvoiceVerificationRequestBody): RecognizeInvoiceVerificationRequest {
        this['body'] = body;
        return this;
    }
}