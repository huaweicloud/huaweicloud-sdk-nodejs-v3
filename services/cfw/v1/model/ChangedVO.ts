

export class ChangedVO {
    public changed?: number;
    public total?: number;
    public value?: number;
    public constructor() { 
    }
    public withChanged(changed: number): ChangedVO {
        this['changed'] = changed;
        return this;
    }
    public withTotal(total: number): ChangedVO {
        this['total'] = total;
        return this;
    }
    public withValue(value: number): ChangedVO {
        this['value'] = value;
        return this;
    }
}