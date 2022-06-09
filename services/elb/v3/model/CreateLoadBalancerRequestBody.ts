import { CreateLoadBalancerOption } from './CreateLoadBalancerOption';


export class CreateLoadBalancerRequestBody {
    public loadbalancer: CreateLoadBalancerOption;
    public constructor(loadbalancer?: any) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: CreateLoadBalancerOption): CreateLoadBalancerRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}