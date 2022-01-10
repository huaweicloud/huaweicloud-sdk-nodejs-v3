

export class ContainerCIDR {
    public cidr: string;
    public constructor(cidr?: any) { 
        this['cidr'] = cidr;
    }
    public withCidr(cidr: string): ContainerCIDR {
        this['cidr'] = cidr;
        return this;
    }
}