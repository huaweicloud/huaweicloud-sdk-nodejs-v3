

export class ValidateConfigurationNameRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ValidateConfigurationNameRequest {
        this['name'] = name;
        return this;
    }
}