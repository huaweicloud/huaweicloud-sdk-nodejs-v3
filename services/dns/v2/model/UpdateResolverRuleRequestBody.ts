import { IpInfo } from './IpInfo';


export class UpdateResolverRuleRequestBody {
    public name?: string;
    public ipaddresses?: Array<IpInfo>;
    public constructor() { 
    }
    public withName(name: string): UpdateResolverRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withIpaddresses(ipaddresses: Array<IpInfo>): UpdateResolverRuleRequestBody {
        this['ipaddresses'] = ipaddresses;
        return this;
    }
}