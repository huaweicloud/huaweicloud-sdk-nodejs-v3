

export class CreateEnhancedConnectionRoutesRequestBody {
    public name?: string;
    public cidr?: string;
    public constructor(name?: string, cidr?: string) { 
        this['name'] = name;
        this['cidr'] = cidr;
    }
    public withName(name: string): CreateEnhancedConnectionRoutesRequestBody {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): CreateEnhancedConnectionRoutesRequestBody {
        this['cidr'] = cidr;
        return this;
    }
}