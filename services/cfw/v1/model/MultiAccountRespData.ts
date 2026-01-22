

export class MultiAccountRespData {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): MultiAccountRespData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MultiAccountRespData {
        this['name'] = name;
        return this;
    }
}