import { DnsIp } from './DnsIp';


export class BatchDisableDomainIPsRequestBody {
    public ips?: Array<DnsIp>;
    public constructor(ips?: Array<DnsIp>) { 
        this['ips'] = ips;
    }
    public withIps(ips: Array<DnsIp>): BatchDisableDomainIPsRequestBody {
        this['ips'] = ips;
        return this;
    }
}