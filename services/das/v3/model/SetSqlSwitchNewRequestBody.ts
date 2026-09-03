

export class SetSqlSwitchNewRequestBody {
    private 'engine_type'?: string;
    private 'instance_id'?: string;
    private 'full_sql_switch_on'?: boolean;
    private 'full_sql_retention_hours'?: number;
    private 'slow_sql_switch_on'?: boolean;
    private 'slow_sql_retention_hours'?: number;
    private 'dead_lock_switch_on'?: boolean;
    private 'dead_lock_retention_hours'?: number;
    private 'lock_blocking_switch_on'?: boolean;
    private 'lock_blocking_retention_hours'?: number;
    public constructor(engineType?: string, instanceId?: string) { 
        this['engine_type'] = engineType;
        this['instance_id'] = instanceId;
    }
    public withEngineType(engineType: string): SetSqlSwitchNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withInstanceId(instanceId: string): SetSqlSwitchNewRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withFullSqlSwitchOn(fullSqlSwitchOn: boolean): SetSqlSwitchNewRequestBody {
        this['full_sql_switch_on'] = fullSqlSwitchOn;
        return this;
    }
    public set fullSqlSwitchOn(fullSqlSwitchOn: boolean  | undefined) {
        this['full_sql_switch_on'] = fullSqlSwitchOn;
    }
    public get fullSqlSwitchOn(): boolean | undefined {
        return this['full_sql_switch_on'];
    }
    public withFullSqlRetentionHours(fullSqlRetentionHours: number): SetSqlSwitchNewRequestBody {
        this['full_sql_retention_hours'] = fullSqlRetentionHours;
        return this;
    }
    public set fullSqlRetentionHours(fullSqlRetentionHours: number  | undefined) {
        this['full_sql_retention_hours'] = fullSqlRetentionHours;
    }
    public get fullSqlRetentionHours(): number | undefined {
        return this['full_sql_retention_hours'];
    }
    public withSlowSqlSwitchOn(slowSqlSwitchOn: boolean): SetSqlSwitchNewRequestBody {
        this['slow_sql_switch_on'] = slowSqlSwitchOn;
        return this;
    }
    public set slowSqlSwitchOn(slowSqlSwitchOn: boolean  | undefined) {
        this['slow_sql_switch_on'] = slowSqlSwitchOn;
    }
    public get slowSqlSwitchOn(): boolean | undefined {
        return this['slow_sql_switch_on'];
    }
    public withSlowSqlRetentionHours(slowSqlRetentionHours: number): SetSqlSwitchNewRequestBody {
        this['slow_sql_retention_hours'] = slowSqlRetentionHours;
        return this;
    }
    public set slowSqlRetentionHours(slowSqlRetentionHours: number  | undefined) {
        this['slow_sql_retention_hours'] = slowSqlRetentionHours;
    }
    public get slowSqlRetentionHours(): number | undefined {
        return this['slow_sql_retention_hours'];
    }
    public withDeadLockSwitchOn(deadLockSwitchOn: boolean): SetSqlSwitchNewRequestBody {
        this['dead_lock_switch_on'] = deadLockSwitchOn;
        return this;
    }
    public set deadLockSwitchOn(deadLockSwitchOn: boolean  | undefined) {
        this['dead_lock_switch_on'] = deadLockSwitchOn;
    }
    public get deadLockSwitchOn(): boolean | undefined {
        return this['dead_lock_switch_on'];
    }
    public withDeadLockRetentionHours(deadLockRetentionHours: number): SetSqlSwitchNewRequestBody {
        this['dead_lock_retention_hours'] = deadLockRetentionHours;
        return this;
    }
    public set deadLockRetentionHours(deadLockRetentionHours: number  | undefined) {
        this['dead_lock_retention_hours'] = deadLockRetentionHours;
    }
    public get deadLockRetentionHours(): number | undefined {
        return this['dead_lock_retention_hours'];
    }
    public withLockBlockingSwitchOn(lockBlockingSwitchOn: boolean): SetSqlSwitchNewRequestBody {
        this['lock_blocking_switch_on'] = lockBlockingSwitchOn;
        return this;
    }
    public set lockBlockingSwitchOn(lockBlockingSwitchOn: boolean  | undefined) {
        this['lock_blocking_switch_on'] = lockBlockingSwitchOn;
    }
    public get lockBlockingSwitchOn(): boolean | undefined {
        return this['lock_blocking_switch_on'];
    }
    public withLockBlockingRetentionHours(lockBlockingRetentionHours: number): SetSqlSwitchNewRequestBody {
        this['lock_blocking_retention_hours'] = lockBlockingRetentionHours;
        return this;
    }
    public set lockBlockingRetentionHours(lockBlockingRetentionHours: number  | undefined) {
        this['lock_blocking_retention_hours'] = lockBlockingRetentionHours;
    }
    public get lockBlockingRetentionHours(): number | undefined {
        return this['lock_blocking_retention_hours'];
    }
}