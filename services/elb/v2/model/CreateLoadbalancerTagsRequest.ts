import { CreateLoadbalancerTagsRequestBody } from './CreateLoadbalancerTagsRequestBody';


export class CreateLoadbalancerTagsRequest {
    private 'loadbalancer_id': string | undefined;
    public body?: CreateLoadbalancerTagsRequestBody;
    public constructor(loadbalancerId?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): CreateLoadbalancerTagsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withBody(body: CreateLoadbalancerTagsRequestBody): CreateLoadbalancerTagsRequest {
        this['body'] = body;
        return this;
    }
}