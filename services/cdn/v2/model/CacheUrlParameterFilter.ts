

export class CacheUrlParameterFilter {
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withType(type: string): CacheUrlParameterFilter {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): CacheUrlParameterFilter {
        this['value'] = value;
        return this;
    }
}