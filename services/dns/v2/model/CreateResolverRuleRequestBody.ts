import { IpInfo } from './IpInfo';


export class CreateResolverRuleRequestBody {
    public name?: string;
    private 'domain_name'?: string;
    private 'endpoint_id'?: string;
    public ipaddresses?: Array<IpInfo>;
    public constructor(name?: string, domainName?: string, endpointId?: string, ipaddresses?: Array<IpInfo>) { 
        this['name'] = name;
        this['domain_name'] = domainName;
        this['endpoint_id'] = endpointId;
        this['ipaddresses'] = ipaddresses;
    }
    public withName(name: string): CreateResolverRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withDomainName(domainName: string): CreateResolverRuleRequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEndpointId(endpointId: string): CreateResolverRuleRequestBody {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withIpaddresses(ipaddresses: Array<IpInfo>): CreateResolverRuleRequestBody {
        this['ipaddresses'] = ipaddresses;
        return this;
    }
}