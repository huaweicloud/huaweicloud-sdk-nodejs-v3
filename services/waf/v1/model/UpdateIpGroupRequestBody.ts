

export class UpdateIpGroupRequestBody {
    public name?: string;
    public ips?: string;
    public description?: string;
    public constructor(name?: string, ips?: string) { 
        this['name'] = name;
        this['ips'] = ips;
    }
    public withName(name: string): UpdateIpGroupRequestBody {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): UpdateIpGroupRequestBody {
        this['ips'] = ips;
        return this;
    }
    public withDescription(description: string): UpdateIpGroupRequestBody {
        this['description'] = description;
        return this;
    }
}