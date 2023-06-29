

export class OrgPropertyDTO {
    public propertyKey?: string;
    public propertyValue?: string;
    public constructor() { 
    }
    public withPropertyKey(propertyKey: string): OrgPropertyDTO {
        this['propertyKey'] = propertyKey;
        return this;
    }
    public withPropertyValue(propertyValue: string): OrgPropertyDTO {
        this['propertyValue'] = propertyValue;
        return this;
    }
}