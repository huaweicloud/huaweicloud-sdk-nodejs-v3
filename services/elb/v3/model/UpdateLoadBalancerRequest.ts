import { UpdateLoadBalancerRequestBody } from './UpdateLoadBalancerRequestBody';


export class UpdateLoadBalancerRequest {
    private 'loadbalancer_id': string | undefined;
    public body?: UpdateLoadBalancerRequestBody;
    public constructor(loadbalancerId?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): UpdateLoadBalancerRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withBody(body: UpdateLoadBalancerRequestBody): UpdateLoadBalancerRequest {
        this['body'] = body;
        return this;
    }
}