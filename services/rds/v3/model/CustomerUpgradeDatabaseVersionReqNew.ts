

export class CustomerUpgradeDatabaseVersionReqNew {
    private 'is_delayed'?: boolean;
    private 'second_switch'?: boolean;
    private 'support_rollback'?: boolean;
    public constructor() { 
    }
    public withIsDelayed(isDelayed: boolean): CustomerUpgradeDatabaseVersionReqNew {
        this['is_delayed'] = isDelayed;
        return this;
    }
    public set isDelayed(isDelayed: boolean  | undefined) {
        this['is_delayed'] = isDelayed;
    }
    public get isDelayed(): boolean | undefined {
        return this['is_delayed'];
    }
    public withSecondSwitch(secondSwitch: boolean): CustomerUpgradeDatabaseVersionReqNew {
        this['second_switch'] = secondSwitch;
        return this;
    }
    public set secondSwitch(secondSwitch: boolean  | undefined) {
        this['second_switch'] = secondSwitch;
    }
    public get secondSwitch(): boolean | undefined {
        return this['second_switch'];
    }
    public withSupportRollback(supportRollback: boolean): CustomerUpgradeDatabaseVersionReqNew {
        this['support_rollback'] = supportRollback;
        return this;
    }
    public set supportRollback(supportRollback: boolean  | undefined) {
        this['support_rollback'] = supportRollback;
    }
    public get supportRollback(): boolean | undefined {
        return this['support_rollback'];
    }
}