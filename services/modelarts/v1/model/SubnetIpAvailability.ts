

export class SubnetIpAvailability {
    public cidr?: string;
    public ipVersion?: number;
    public usedIps?: number;
    public totalIps?: number;
    public constructor(cidr?: string, ipVersion?: number, usedIps?: number) { 
        this['cidr'] = cidr;
        this['ipVersion'] = ipVersion;
        this['usedIps'] = usedIps;
    }
    public withCidr(cidr: string): SubnetIpAvailability {
        this['cidr'] = cidr;
        return this;
    }
    public withIpVersion(ipVersion: number): SubnetIpAvailability {
        this['ipVersion'] = ipVersion;
        return this;
    }
    public withUsedIps(usedIps: number): SubnetIpAvailability {
        this['usedIps'] = usedIps;
        return this;
    }
    public withTotalIps(totalIps: number): SubnetIpAvailability {
        this['totalIps'] = totalIps;
        return this;
    }
}