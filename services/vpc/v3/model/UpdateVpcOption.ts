

export class UpdateVpcOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateVpcOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVpcOption {
        this['description'] = description;
        return this;
    }
}