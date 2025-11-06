

export class ReqWorkItemBasicDto {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ReqWorkItemBasicDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ReqWorkItemBasicDto {
        this['name'] = name;
        return this;
    }
}