import { BatchDeleteLoadbalancersRequestBody } from './BatchDeleteLoadbalancersRequestBody';


export class BatchDeleteLoadbalancersRequest {
    public body?: BatchDeleteLoadbalancersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteLoadbalancersRequestBody): BatchDeleteLoadbalancersRequest {
        this['body'] = body;
        return this;
    }
}