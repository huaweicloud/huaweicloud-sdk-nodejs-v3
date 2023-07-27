

export class AppBaseInfo {
    public id?: string;
    public name?: string;
    public remark?: string;
    public constructor() { 
    }
    public withId(id: string): AppBaseInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppBaseInfo {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): AppBaseInfo {
        this['remark'] = remark;
        return this;
    }
}