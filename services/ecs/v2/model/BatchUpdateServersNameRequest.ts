import { BatchUpdateServersNameRequestBody } from './BatchUpdateServersNameRequestBody';


export class BatchUpdateServersNameRequest {
    public body?: BatchUpdateServersNameRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdateServersNameRequestBody): BatchUpdateServersNameRequest {
        this['body'] = body;
        return this;
    }
}