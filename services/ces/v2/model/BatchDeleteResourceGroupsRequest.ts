import { BatchDeleteResourceGroupsRequestBody } from './BatchDeleteResourceGroupsRequestBody';


export class BatchDeleteResourceGroupsRequest {
    public body?: BatchDeleteResourceGroupsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteResourceGroupsRequestBody): BatchDeleteResourceGroupsRequest {
        this['body'] = body;
        return this;
    }
}