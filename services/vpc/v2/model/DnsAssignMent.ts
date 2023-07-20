

export class DnsAssignMent {
    public hostname?: string;
    private 'ip_address'?: string;
    public fqdn?: string;
    public constructor() { 
    }
    public withHostname(hostname: string): DnsAssignMent {
        this['hostname'] = hostname;
        return this;
    }
    public withIpAddress(ipAddress: string): DnsAssignMent {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withFqdn(fqdn: string): DnsAssignMent {
        this['fqdn'] = fqdn;
        return this;
    }
}