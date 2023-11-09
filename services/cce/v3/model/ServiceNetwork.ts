

export class ServiceNetwork {
    private 'IPv4CIDR'?: string;
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
}