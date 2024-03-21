

export class CreateSecrecyLevelDTO {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): CreateSecrecyLevelDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateSecrecyLevelDTO {
        this['description'] = description;
        return this;
    }
}