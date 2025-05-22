

export class StatusVo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): StatusVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StatusVo {
        this['name'] = name;
        return this;
    }
}