import { BatchCreateLoadBalancersRequestBody } from './BatchCreateLoadBalancersRequestBody';


export class BatchCreateLoadBalancersRequest {
    public body?: BatchCreateLoadBalancersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateLoadBalancersRequestBody): BatchCreateLoadBalancersRequest {
        this['body'] = body;
        return this;
    }
}