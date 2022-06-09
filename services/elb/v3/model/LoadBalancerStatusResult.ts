import { LoadBalancerStatus } from './LoadBalancerStatus';


export class LoadBalancerStatusResult {
    public loadbalancer: LoadBalancerStatus;
    public constructor(loadbalancer?: any) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: LoadBalancerStatus): LoadBalancerStatusResult {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}