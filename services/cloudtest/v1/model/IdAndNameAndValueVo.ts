

export class IdAndNameAndValueVo {
    public name?: string;
    public value?: number;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): IdAndNameAndValueVo {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): IdAndNameAndValueVo {
        this['value'] = value;
        return this;
    }
    public withId(id: string): IdAndNameAndValueVo {
        this['id'] = id;
        return this;
    }
}