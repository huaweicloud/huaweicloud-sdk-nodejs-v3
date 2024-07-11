import { AppBatchDeleteRequest } from './AppBatchDeleteRequest';


export class BatchDeleteAppRequest {
    public body?: AppBatchDeleteRequest;
    public constructor() { 
    }
    public withBody(body: AppBatchDeleteRequest): BatchDeleteAppRequest {
        this['body'] = body;
        return this;
    }
}