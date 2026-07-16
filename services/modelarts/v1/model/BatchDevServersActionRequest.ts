import { DevServerBatchRequest } from './DevServerBatchRequest';


export class BatchDevServersActionRequest {
    public body?: DevServerBatchRequest;
    public constructor() { 
    }
    public withBody(body: DevServerBatchRequest): BatchDevServersActionRequest {
        this['body'] = body;
        return this;
    }
}