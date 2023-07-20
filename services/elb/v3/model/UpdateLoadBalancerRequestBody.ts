import { UpdateLoadBalancerOption } from './UpdateLoadBalancerOption';


export class UpdateLoadBalancerRequestBody {
    public loadbalancer?: UpdateLoadBalancerOption;
    public constructor(loadbalancer?: UpdateLoadBalancerOption) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: UpdateLoadBalancerOption): UpdateLoadBalancerRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}