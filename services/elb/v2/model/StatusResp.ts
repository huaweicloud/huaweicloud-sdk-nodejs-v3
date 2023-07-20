import { LoadbalancerInStatusResp } from './LoadbalancerInStatusResp';


export class StatusResp {
    public loadbalancer?: LoadbalancerInStatusResp;
    public constructor(loadbalancer?: LoadbalancerInStatusResp) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: LoadbalancerInStatusResp): StatusResp {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}