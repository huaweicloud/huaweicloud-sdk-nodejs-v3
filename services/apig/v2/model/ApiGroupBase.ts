

export class ApiGroupBase {
    public name?: string;
    public remark?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ApiGroupBase {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): ApiGroupBase {
        this['remark'] = remark;
        return this;
    }
}