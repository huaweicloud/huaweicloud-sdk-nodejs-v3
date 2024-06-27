

export class UpdateDomainSetInfoDto {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateDomainSetInfoDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDomainSetInfoDto {
        this['description'] = description;
        return this;
    }
}