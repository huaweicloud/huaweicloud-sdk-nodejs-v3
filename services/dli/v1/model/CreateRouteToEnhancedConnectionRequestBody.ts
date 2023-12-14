

export class CreateRouteToEnhancedConnectionRequestBody {
    public name?: string;
    public cidr?: string;
    public constructor(name?: string, cidr?: string) { 
        this['name'] = name;
        this['cidr'] = cidr;
    }
    public withName(name: string): CreateRouteToEnhancedConnectionRequestBody {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): CreateRouteToEnhancedConnectionRequestBody {
        this['cidr'] = cidr;
        return this;
    }
}