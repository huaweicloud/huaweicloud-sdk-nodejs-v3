import { BatchDeleteLoadbalancerTagsRequestBody } from './BatchDeleteLoadbalancerTagsRequestBody';


export class BatchDeleteLoadbalancerTagsRequest {
    private 'loadbalancer_id'?: string;
    public body?: BatchDeleteLoadbalancerTagsRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): BatchDeleteLoadbalancerTagsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: BatchDeleteLoadbalancerTagsRequestBody): BatchDeleteLoadbalancerTagsRequest {
        this['body'] = body;
        return this;
    }
}