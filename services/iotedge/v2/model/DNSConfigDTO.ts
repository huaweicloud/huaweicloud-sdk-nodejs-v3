

export class DNSConfigDTO {
    public hostname?: string;
    public ip?: string;
    public constructor() { 
    }
    public withHostname(hostname: string): DNSConfigDTO {
        this['hostname'] = hostname;
        return this;
    }
    public withIp(ip: string): DNSConfigDTO {
        this['ip'] = ip;
        return this;
    }
}