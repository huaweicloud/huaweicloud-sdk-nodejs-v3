

export class ServiceNetwork {
    private 'IPv4CIDR'?: string;
    private 'IPv6CIDR'?: string;
    public constructor() { 
    }
    public withIPv4CIDR(iPv4CIDR: string): ServiceNetwork {
        this['IPv4CIDR'] = iPv4CIDR;
        return this;
    }
    public set iPv4CIDR(iPv4CIDR: string  | undefined) {
        this['IPv4CIDR'] = iPv4CIDR;
    }
    public get iPv4CIDR(): string | undefined {
        return this['IPv4CIDR'];
    }
    public withIPv6CIDR(iPv6CIDR: string): ServiceNetwork {
        this['IPv6CIDR'] = iPv6CIDR;
        return this;
    }
    public set iPv6CIDR(iPv6CIDR: string  | undefined) {
        this['IPv6CIDR'] = iPv6CIDR;
    }
    public get iPv6CIDR(): string | undefined {
        return this['IPv6CIDR'];
    }
}