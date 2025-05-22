

export class Detail {
    public type?: string;
    public value?: string;
    public unit?: string;
    public constructor(value?: string) { 
        this['value'] = value;
    }
    public withType(type: string): Detail {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): Detail {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): Detail {
        this['unit'] = unit;
        return this;
    }
}