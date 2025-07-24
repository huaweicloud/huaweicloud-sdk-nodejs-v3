

export class NameAndIdVo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): NameAndIdVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NameAndIdVo {
        this['name'] = name;
        return this;
    }
}