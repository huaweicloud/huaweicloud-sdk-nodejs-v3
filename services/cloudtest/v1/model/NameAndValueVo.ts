

export class NameAndValueVo {
    public name?: string;
    public value?: number;
    public constructor() { 
    }
    public withName(name: string): NameAndValueVo {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): NameAndValueVo {
        this['value'] = value;
        return this;
    }
}