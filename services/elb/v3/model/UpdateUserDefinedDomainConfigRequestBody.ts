import { UserDefinedDnsConfigRequestBody } from './UserDefinedDnsConfigRequestBody';


export class UpdateUserDefinedDomainConfigRequestBody {
    public loadbalancer?: UserDefinedDnsConfigRequestBody;
    public constructor(loadbalancer?: UserDefinedDnsConfigRequestBody) { 
        this['loadbalancer'] = loadbalancer;
    }
    public withLoadbalancer(loadbalancer: UserDefinedDnsConfigRequestBody): UpdateUserDefinedDomainConfigRequestBody {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}