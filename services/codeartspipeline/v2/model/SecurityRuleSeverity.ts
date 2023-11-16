

export class SecurityRuleSeverity {
    public enable?: boolean;
    public values?: Array<string>;
    public constructor() { 
    }
    public withEnable(enable: boolean): SecurityRuleSeverity {
        this['enable'] = enable;
        return this;
    }
    public withValues(values: Array<string>): SecurityRuleSeverity {
        this['values'] = values;
        return this;
    }
}