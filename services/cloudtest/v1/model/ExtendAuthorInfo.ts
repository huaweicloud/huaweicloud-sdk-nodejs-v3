

export class ExtendAuthorInfo {
    public id?: string;
    public name?: string;
    public time?: string;
    public constructor() { 
    }
    public withId(id: string): ExtendAuthorInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ExtendAuthorInfo {
        this['name'] = name;
        return this;
    }
    public withTime(time: string): ExtendAuthorInfo {
        this['time'] = time;
        return this;
    }
}