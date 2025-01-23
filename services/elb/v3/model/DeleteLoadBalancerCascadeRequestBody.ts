import { DeleteLoadBalancerCascadeOption } from './DeleteLoadBalancerCascadeOption';


export class DeleteLoadBalancerCascadeRequestBody {
    public loadbalancer?: DeleteLoadBalancerCascadeOption;
    public constructor(loadbalancer?: DeleteLoadBalancerCascadeOption) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: DeleteLoadBalancerCascadeOption): DeleteLoadBalancerCascadeRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}