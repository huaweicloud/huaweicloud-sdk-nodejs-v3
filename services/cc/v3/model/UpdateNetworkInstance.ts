

export class UpdateNetworkInstance {
    public name?: string;
    public description?: string;
    public cidrs?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): UpdateNetworkInstance {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateNetworkInstance {
        this['description'] = description;
        return this;
    }
    public withCidrs(cidrs: Array<string>): UpdateNetworkInstance {
        this['cidrs'] = cidrs;
        return this;
    }
}