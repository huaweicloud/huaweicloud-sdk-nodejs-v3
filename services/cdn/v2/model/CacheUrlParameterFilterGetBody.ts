

export class CacheUrlParameterFilterGetBody {
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withType(type: string): CacheUrlParameterFilterGetBody {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): CacheUrlParameterFilterGetBody {
        this['value'] = value;
        return this;
    }
}