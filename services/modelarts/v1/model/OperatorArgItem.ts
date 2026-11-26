

export class OperatorArgItem {
    public name?: string;
    public value?: string;
    public tips?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): OperatorArgItem {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): OperatorArgItem {
        this['value'] = value;
        return this;
    }
    public withTips(tips: string): OperatorArgItem {
        this['tips'] = tips;
        return this;
    }
}