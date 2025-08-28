

export class DASInstanceInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    public version?: string;
    private 'engine_type'?: string;
    public ip?: string;
    public port?: number;
    public cpu?: number;
    public mem?: number;
    private 'login_flag'?: boolean;
    private 'slow_sql_flag'?: boolean;
    private 'deadlock_flag'?: boolean;
    private 'lock_blocking_flag'?: boolean;
    private 'charge_flag'?: boolean;
    private 'full_sql_flag'?: boolean;
    public constructor(instanceId?: string, instanceName?: string, instanceStatus?: string, version?: string, engineType?: string, ip?: string, port?: number, cpu?: number, mem?: number, loginFlag?: boolean, slowSqlFlag?: boolean, deadlockFlag?: boolean, lockBlockingFlag?: boolean, chargeFlag?: boolean, fullSqlFlag?: boolean) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['instance_status'] = instanceStatus;
        this['version'] = version;
        this['engine_type'] = engineType;
        this['ip'] = ip;
        this['port'] = port;
        this['cpu'] = cpu;
        this['mem'] = mem;
        this['login_flag'] = loginFlag;
        this['slow_sql_flag'] = slowSqlFlag;
        this['deadlock_flag'] = deadlockFlag;
        this['lock_blocking_flag'] = lockBlockingFlag;
        this['charge_flag'] = chargeFlag;
        this['full_sql_flag'] = fullSqlFlag;
    }
    public withInstanceId(instanceId: string): DASInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DASInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): DASInstanceInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withVersion(version: string): DASInstanceInfo {
        this['version'] = version;
        return this;
    }
    public withEngineType(engineType: string): DASInstanceInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withIp(ip: string): DASInstanceInfo {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DASInstanceInfo {
        this['port'] = port;
        return this;
    }
    public withCpu(cpu: number): DASInstanceInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: number): DASInstanceInfo {
        this['mem'] = mem;
        return this;
    }
    public withLoginFlag(loginFlag: boolean): DASInstanceInfo {
        this['login_flag'] = loginFlag;
        return this;
    }
    public set loginFlag(loginFlag: boolean  | undefined) {
        this['login_flag'] = loginFlag;
    }
    public get loginFlag(): boolean | undefined {
        return this['login_flag'];
    }
    public withSlowSqlFlag(slowSqlFlag: boolean): DASInstanceInfo {
        this['slow_sql_flag'] = slowSqlFlag;
        return this;
    }
    public set slowSqlFlag(slowSqlFlag: boolean  | undefined) {
        this['slow_sql_flag'] = slowSqlFlag;
    }
    public get slowSqlFlag(): boolean | undefined {
        return this['slow_sql_flag'];
    }
    public withDeadlockFlag(deadlockFlag: boolean): DASInstanceInfo {
        this['deadlock_flag'] = deadlockFlag;
        return this;
    }
    public set deadlockFlag(deadlockFlag: boolean  | undefined) {
        this['deadlock_flag'] = deadlockFlag;
    }
    public get deadlockFlag(): boolean | undefined {
        return this['deadlock_flag'];
    }
    public withLockBlockingFlag(lockBlockingFlag: boolean): DASInstanceInfo {
        this['lock_blocking_flag'] = lockBlockingFlag;
        return this;
    }
    public set lockBlockingFlag(lockBlockingFlag: boolean  | undefined) {
        this['lock_blocking_flag'] = lockBlockingFlag;
    }
    public get lockBlockingFlag(): boolean | undefined {
        return this['lock_blocking_flag'];
    }
    public withChargeFlag(chargeFlag: boolean): DASInstanceInfo {
        this['charge_flag'] = chargeFlag;
        return this;
    }
    public set chargeFlag(chargeFlag: boolean  | undefined) {
        this['charge_flag'] = chargeFlag;
    }
    public get chargeFlag(): boolean | undefined {
        return this['charge_flag'];
    }
    public withFullSqlFlag(fullSqlFlag: boolean): DASInstanceInfo {
        this['full_sql_flag'] = fullSqlFlag;
        return this;
    }
    public set fullSqlFlag(fullSqlFlag: boolean  | undefined) {
        this['full_sql_flag'] = fullSqlFlag;
    }
    public get fullSqlFlag(): boolean | undefined {
        return this['full_sql_flag'];
    }
}