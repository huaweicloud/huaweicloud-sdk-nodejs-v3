

export class IntegerIdAndNameVo {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IntegerIdAndNameVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IntegerIdAndNameVo {
        this['name'] = name;
        return this;
    }
}