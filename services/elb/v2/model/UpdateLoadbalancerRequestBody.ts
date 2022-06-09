import { UpdateLoadbalancerReq } from './UpdateLoadbalancerReq';


export class UpdateLoadbalancerRequestBody {
    public loadbalancer: UpdateLoadbalancerReq;
    public constructor(loadbalancer?: any) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: UpdateLoadbalancerReq): UpdateLoadbalancerRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}