import { TollInvoiceRequestBody } from './TollInvoiceRequestBody';


export class RecognizeTollInvoiceRequest {
    public body?: TollInvoiceRequestBody;
    public constructor() { 
    }
    public withBody(body: TollInvoiceRequestBody): RecognizeTollInvoiceRequest {
        this['body'] = body;
        return this;
    }
}