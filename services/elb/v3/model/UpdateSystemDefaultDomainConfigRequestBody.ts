import { SystemDefaultDnsConfigRequestBody } from './SystemDefaultDnsConfigRequestBody';


export class UpdateSystemDefaultDomainConfigRequestBody {
    public loadbalancer?: SystemDefaultDnsConfigRequestBody;
    public constructor(loadbalancer?: SystemDefaultDnsConfigRequestBody) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: SystemDefaultDnsConfigRequestBody): UpdateSystemDefaultDomainConfigRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}