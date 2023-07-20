import { CreateLoadbalancerTagsRequestBody } from './CreateLoadbalancerTagsRequestBody';


export class CreateLoadbalancerTagsRequest {
    private 'loadbalancer_id'?: string;
    public body?: CreateLoadbalancerTagsRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): CreateLoadbalancerTagsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: CreateLoadbalancerTagsRequestBody): CreateLoadbalancerTagsRequest {
        this['body'] = body;
        return this;
    }
}