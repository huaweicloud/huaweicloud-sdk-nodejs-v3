import { DnsIpResponse } from './DnsIpResponse';


export class ListDnsIpResponseBody {
    public ips?: Array<DnsIpResponse>;
    public constructor() { 
    }
    public withIps(ips: Array<DnsIpResponse>): ListDnsIpResponseBody {
        this['ips'] = ips;
        return this;
    }
}