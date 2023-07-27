

export class EnvCreate {
    public name?: string;
    public remark?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): EnvCreate {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): EnvCreate {
        this['remark'] = remark;
        return this;
    }
}