

export class DnsIp {
    private 'ip_address'?: string;
    public constructor() { 
    }
    public withIpAddress(ipAddress: string): DnsIp {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
}