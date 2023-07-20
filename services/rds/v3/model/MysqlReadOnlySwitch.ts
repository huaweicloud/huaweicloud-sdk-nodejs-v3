

export class MysqlReadOnlySwitch {
    public readonly?: boolean;
    public constructor(readonly?: boolean) { 
        this['readonly'] = readonly;
    }
    public withReadonly(readonly: boolean): MysqlReadOnlySwitch {
        this['readonly'] = readonly;
        return this;
    }
}