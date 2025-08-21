

export class GroupRelationConfiguration {
    public type?: string;
    public parameters?: { [key: string]: string; };
    public constructor() { 
    }
    public withType(type: string): GroupRelationConfiguration {
        this['type'] = type;
        return this;
    }
    public withParameters(parameters: { [key: string]: string; }): GroupRelationConfiguration {
        this['parameters'] = parameters;
        return this;
    }
}