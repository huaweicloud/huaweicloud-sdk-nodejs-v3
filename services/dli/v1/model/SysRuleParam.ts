

export class SysRuleParam {
    public max?: number;
    public min?: number;
    public defaultValue?: number;
    public desc?: string;
    public constructor() { 
    }
    public withMax(max: number): SysRuleParam {
        this['max'] = max;
        return this;
    }
    public withMin(min: number): SysRuleParam {
        this['min'] = min;
        return this;
    }
    public withDefaultValue(defaultValue: number): SysRuleParam {
        this['defaultValue'] = defaultValue;
        return this;
    }
    public withDesc(desc: string): SysRuleParam {
        this['desc'] = desc;
        return this;
    }
}