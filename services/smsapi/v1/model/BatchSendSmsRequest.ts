import { BatchSendSmsRequestBody } from './BatchSendSmsRequestBody';


export class BatchSendSmsRequest {
    public body?: BatchSendSmsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSendSmsRequestBody): BatchSendSmsRequest {
        this['body'] = body;
        return this;
    }
}