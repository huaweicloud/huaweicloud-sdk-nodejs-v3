

export class SecurityRuleCve {
    public enable?: boolean;
    public values?: Array<string>;
    public constructor() { 
    }
    public withEnable(enable: boolean): SecurityRuleCve {
        this['enable'] = enable;
        return this;
    }
    public withValues(values: Array<string>): SecurityRuleCve {
        this['values'] = values;
        return this;
    }
}