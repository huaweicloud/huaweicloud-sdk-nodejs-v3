import { DeleteLoadBalancerCascadeRequestBody } from './DeleteLoadBalancerCascadeRequestBody';


export class DeleteLoadBalancerCascadeRequest {
    private 'loadbalancer_id'?: string;
    public body?: DeleteLoadBalancerCascadeRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): DeleteLoadBalancerCascadeRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: DeleteLoadBalancerCascadeRequestBody): DeleteLoadBalancerCascadeRequest {
        this['body'] = body;
        return this;
    }
}