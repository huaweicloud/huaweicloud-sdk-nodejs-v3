import { BatchCreateLoadBalancerOption } from './BatchCreateLoadBalancerOption';


export class BatchCreateLoadBalancersRequestBody {
    public loadbalancer?: BatchCreateLoadBalancerOption;
    public constructor(loadbalancer?: BatchCreateLoadBalancerOption) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: BatchCreateLoadBalancerOption): BatchCreateLoadBalancersRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}