

export class AccessControlAttributeValueDto {
    public source?: Array<string>;
    public constructor(source?: Array<string>) { 
        this['source'] = source;
    }
    public withSource(source: Array<string>): AccessControlAttributeValueDto {
        this['source'] = source;
        return this;
    }
}