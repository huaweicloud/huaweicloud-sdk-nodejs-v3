import { ChangeLoadbalancerTagsRequestBody } from './ChangeLoadbalancerTagsRequestBody';


export class ChangeLoadbalancerTagsRequest {
    private 'loadbalancer_id'?: string;
    public body?: ChangeLoadbalancerTagsRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): ChangeLoadbalancerTagsRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: ChangeLoadbalancerTagsRequestBody): ChangeLoadbalancerTagsRequest {
        this['body'] = body;
        return this;
    }
}