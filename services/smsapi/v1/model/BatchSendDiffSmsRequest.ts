import { BatchSendDiffSmsRequestBody } from './BatchSendDiffSmsRequestBody';


export class BatchSendDiffSmsRequest {
    public body?: BatchSendDiffSmsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSendDiffSmsRequestBody): BatchSendDiffSmsRequest {
        this['body'] = body;
        return this;
    }
}