import { BatchDeleteListenersRequestBody } from './BatchDeleteListenersRequestBody';


export class BatchDeleteListenersRequest {
    public body?: BatchDeleteListenersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteListenersRequestBody): BatchDeleteListenersRequest {
        this['body'] = body;
        return this;
    }
}