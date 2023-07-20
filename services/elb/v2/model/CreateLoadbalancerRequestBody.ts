import { CreateLoadbalancerReq } from './CreateLoadbalancerReq';


export class CreateLoadbalancerRequestBody {
    public loadbalancer?: CreateLoadbalancerReq;
    public constructor(loadbalancer?: CreateLoadbalancerReq) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: CreateLoadbalancerReq): CreateLoadbalancerRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}