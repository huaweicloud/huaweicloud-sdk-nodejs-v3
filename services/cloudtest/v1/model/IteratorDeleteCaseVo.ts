

export class IteratorDeleteCaseVo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): IteratorDeleteCaseVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IteratorDeleteCaseVo {
        this['name'] = name;
        return this;
    }
}