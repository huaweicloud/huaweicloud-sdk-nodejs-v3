

export class UpdateVpcPeeringOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateVpcPeeringOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVpcPeeringOption {
        this['description'] = description;
        return this;
    }
}