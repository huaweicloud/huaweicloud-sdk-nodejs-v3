

export class UpdateAddressSetDto {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateAddressSetDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAddressSetDto {
        this['description'] = description;
        return this;
    }
}