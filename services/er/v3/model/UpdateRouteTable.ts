

export class UpdateRouteTable {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateRouteTable {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRouteTable {
        this['description'] = description;
        return this;
    }
}