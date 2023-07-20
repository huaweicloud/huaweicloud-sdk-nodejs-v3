

export class CreateIpGroupRequestBody {
    public name?: string;
    public ips?: string;
    public description?: string;
    public constructor(name?: string, ips?: string) { 
        this['name'] = name;
        this['ips'] = ips;
    }
    public withName(name: string): CreateIpGroupRequestBody {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): CreateIpGroupRequestBody {
        this['ips'] = ips;
        return this;
    }
    public withDescription(description: string): CreateIpGroupRequestBody {
        this['description'] = description;
        return this;
    }
}