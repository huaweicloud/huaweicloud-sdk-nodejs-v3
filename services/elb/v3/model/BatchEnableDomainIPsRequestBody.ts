import { DnsIp } from './DnsIp';


export class BatchEnableDomainIPsRequestBody {
    public ips?: Array<DnsIp>;
    public constructor(ips?: Array<DnsIp>) { 
        this['ips'] = ips;
    }
    public withIps(ips: Array<DnsIp>): BatchEnableDomainIPsRequestBody {
        this['ips'] = ips;
        return this;
    }
}