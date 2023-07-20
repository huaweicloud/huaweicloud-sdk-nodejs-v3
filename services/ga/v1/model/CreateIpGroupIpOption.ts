

export class CreateIpGroupIpOption {
    public cidr?: string;
    public description?: string;
    public constructor(cidr?: string) { 
        this['cidr'] = cidr;
    }
    public withCidr(cidr: string): CreateIpGroupIpOption {
        this['cidr'] = cidr;
        return this;
    }
    public withDescription(description: string): CreateIpGroupIpOption {
        this['description'] = description;
        return this;
    }
}