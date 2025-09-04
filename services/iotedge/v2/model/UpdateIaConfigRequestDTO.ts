

export class UpdateIaConfigRequestDTO {
    public name?: string;
    public value?: string;
    public description?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): UpdateIaConfigRequestDTO {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): UpdateIaConfigRequestDTO {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): UpdateIaConfigRequestDTO {
        this['description'] = description;
        return this;
    }
}