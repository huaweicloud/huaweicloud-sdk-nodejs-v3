

export class UpdateClouddcnSubnetOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateClouddcnSubnetOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateClouddcnSubnetOption {
        this['description'] = description;
        return this;
    }
}