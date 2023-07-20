

export class CreateRouteRequestBody {
    public name?: string;
    public cidr?: string;
    public constructor(name?: string, cidr?: string) { 
        this['name'] = name;
        this['cidr'] = cidr;
    }
    public withName(name: string): CreateRouteRequestBody {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): CreateRouteRequestBody {
        this['cidr'] = cidr;
        return this;
    }
}