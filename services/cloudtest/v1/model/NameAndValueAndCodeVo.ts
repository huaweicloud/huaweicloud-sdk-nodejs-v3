

export class NameAndValueAndCodeVo {
    public name?: string;
    public value?: number;
    public code?: string;
    public constructor() { 
    }
    public withName(name: string): NameAndValueAndCodeVo {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): NameAndValueAndCodeVo {
        this['value'] = value;
        return this;
    }
    public withCode(code: string): NameAndValueAndCodeVo {
        this['code'] = code;
        return this;
    }
}