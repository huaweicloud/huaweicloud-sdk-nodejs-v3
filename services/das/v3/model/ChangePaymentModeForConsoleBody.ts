

export class ChangePaymentModeForConsoleBody {
    private 'instance_id_list'?: Array<string>;
    private 'engine_type'?: string;
    private 'payment_mode'?: boolean;
    private 'resource_type'?: string;
    private 'open_full_sql'?: boolean;
    private 'open_slow_sql'?: boolean;
    private 'open_dead_lock'?: boolean;
    private 'open_lock_blocking'?: boolean;
    private 'open_transaction'?: boolean;
    public constructor(instanceIdList?: Array<string>) { 
        this['instance_id_list'] = instanceIdList;
    }
    public withInstanceIdList(instanceIdList: Array<string>): ChangePaymentModeForConsoleBody {
        this['instance_id_list'] = instanceIdList;
        return this;
    }
    public set instanceIdList(instanceIdList: Array<string>  | undefined) {
        this['instance_id_list'] = instanceIdList;
    }
    public get instanceIdList(): Array<string> | undefined {
        return this['instance_id_list'];
    }
    public withEngineType(engineType: string): ChangePaymentModeForConsoleBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withPaymentMode(paymentMode: boolean): ChangePaymentModeForConsoleBody {
        this['payment_mode'] = paymentMode;
        return this;
    }
    public set paymentMode(paymentMode: boolean  | undefined) {
        this['payment_mode'] = paymentMode;
    }
    public get paymentMode(): boolean | undefined {
        return this['payment_mode'];
    }
    public withResourceType(resourceType: string): ChangePaymentModeForConsoleBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withOpenFullSql(openFullSql: boolean): ChangePaymentModeForConsoleBody {
        this['open_full_sql'] = openFullSql;
        return this;
    }
    public set openFullSql(openFullSql: boolean  | undefined) {
        this['open_full_sql'] = openFullSql;
    }
    public get openFullSql(): boolean | undefined {
        return this['open_full_sql'];
    }
    public withOpenSlowSql(openSlowSql: boolean): ChangePaymentModeForConsoleBody {
        this['open_slow_sql'] = openSlowSql;
        return this;
    }
    public set openSlowSql(openSlowSql: boolean  | undefined) {
        this['open_slow_sql'] = openSlowSql;
    }
    public get openSlowSql(): boolean | undefined {
        return this['open_slow_sql'];
    }
    public withOpenDeadLock(openDeadLock: boolean): ChangePaymentModeForConsoleBody {
        this['open_dead_lock'] = openDeadLock;
        return this;
    }
    public set openDeadLock(openDeadLock: boolean  | undefined) {
        this['open_dead_lock'] = openDeadLock;
    }
    public get openDeadLock(): boolean | undefined {
        return this['open_dead_lock'];
    }
    public withOpenLockBlocking(openLockBlocking: boolean): ChangePaymentModeForConsoleBody {
        this['open_lock_blocking'] = openLockBlocking;
        return this;
    }
    public set openLockBlocking(openLockBlocking: boolean  | undefined) {
        this['open_lock_blocking'] = openLockBlocking;
    }
    public get openLockBlocking(): boolean | undefined {
        return this['open_lock_blocking'];
    }
    public withOpenTransaction(openTransaction: boolean): ChangePaymentModeForConsoleBody {
        this['open_transaction'] = openTransaction;
        return this;
    }
    public set openTransaction(openTransaction: boolean  | undefined) {
        this['open_transaction'] = openTransaction;
    }
    public get openTransaction(): boolean | undefined {
        return this['open_transaction'];
    }
}