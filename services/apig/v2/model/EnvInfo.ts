

export class EnvInfo {
    private 'create_time'?: Date;
    public name?: string;
    public remark?: string;
    public id?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: Date): EnvInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withName(name: string): EnvInfo {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): EnvInfo {
        this['remark'] = remark;
        return this;
    }
    public withId(id: string): EnvInfo {
        this['id'] = id;
        return this;
    }
}