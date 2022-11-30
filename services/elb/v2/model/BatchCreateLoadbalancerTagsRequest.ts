import { BatchCreateLoadbalancerTagsRequestBody } from './BatchCreateLoadbalancerTagsRequestBody';


export class BatchCreateLoadbalancerTagsRequest {
    private 'loadbalancer_id': string | undefined;
    public body?: BatchCreateLoadbalancerTagsRequestBody;
    public constructor(loadbalancerId?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): BatchCreateLoadbalancerTagsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withBody(body: BatchCreateLoadbalancerTagsRequestBody): BatchCreateLoadbalancerTagsRequest {
        this['body'] = body;
        return this;
    }
}