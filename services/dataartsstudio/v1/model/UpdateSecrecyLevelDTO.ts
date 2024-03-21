

export class UpdateSecrecyLevelDTO {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateSecrecyLevelDTO {
        this['description'] = description;
        return this;
    }
}