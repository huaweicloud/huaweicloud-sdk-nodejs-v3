import { BatchSendEmailRequestBody } from './BatchSendEmailRequestBody';


export class BatchSendEmailRequest {
    public body?: BatchSendEmailRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSendEmailRequestBody): BatchSendEmailRequest {
        this['body'] = body;
        return this;
    }
}