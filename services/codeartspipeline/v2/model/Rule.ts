

export class Rule {
    public id?: string;
    public type?: string;
    public name?: string;
    public version?: string;
    public operator?: string;
    private 'operate_time'?: number;
    public constructor(id?: string, type?: string, name?: string, version?: string, operator?: string, operateTime?: number) { 
        this['id'] = id;
        this['type'] = type;
        this['name'] = name;
        this['version'] = version;
        this['operator'] = operator;
        this['operate_time'] = operateTime;
    }
    public withId(id: string): Rule {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Rule {
        this['type'] = type;
        return this;
    }
    public withName(name: string): Rule {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): Rule {
        this['version'] = version;
        return this;
    }
    public withOperator(operator: string): Rule {
        this['operator'] = operator;
        return this;
    }
    public withOperateTime(operateTime: number): Rule {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: number  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): number | undefined {
        return this['operate_time'];
    }
}