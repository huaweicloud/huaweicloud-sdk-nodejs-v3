import { BatchDeleteConnectionNewRequestBody } from './BatchDeleteConnectionNewRequestBody';


export class BatchDeleteConnectionNewRequest {
    public body?: BatchDeleteConnectionNewRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteConnectionNewRequestBody): BatchDeleteConnectionNewRequest {
        this['body'] = body;
        return this;
    }
}