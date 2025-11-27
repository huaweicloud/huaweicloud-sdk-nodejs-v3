

export class UpdateTransitSubnetOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateTransitSubnetOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateTransitSubnetOption {
        this['description'] = description;
        return this;
    }
}