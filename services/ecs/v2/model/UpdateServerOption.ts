

export class UpdateServerOption {
    public name?: string;
    public description?: string;
    public hostname?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateServerOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateServerOption {
        this['description'] = description;
        return this;
    }
    public withHostname(hostname: string): UpdateServerOption {
        this['hostname'] = hostname;
        return this;
    }
}