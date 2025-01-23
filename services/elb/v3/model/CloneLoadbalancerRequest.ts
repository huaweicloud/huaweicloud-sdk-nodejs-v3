import { CloneLoadbalancerRequestBody } from './CloneLoadbalancerRequestBody';


export class CloneLoadbalancerRequest {
    private 'loadbalancer_id'?: string;
    public body?: CloneLoadbalancerRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): CloneLoadbalancerRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: CloneLoadbalancerRequestBody): CloneLoadbalancerRequest {
        this['body'] = body;
        return this;
    }
}