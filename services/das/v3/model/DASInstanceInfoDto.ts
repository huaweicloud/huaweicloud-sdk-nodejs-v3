

export class DASInstanceInfoDto {
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
    private 'dead_lock_flag'?: boolean;
    private 'lock_blocking_flag'?: boolean;
    private 'charge_flag'?: boolean;
    private 'instance_type'?: string;
    private 'full_sql_flag'?: boolean;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): DASInstanceInfoDto {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DASInstanceInfoDto {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): DASInstanceInfoDto {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withVersion(version: string): DASInstanceInfoDto {
        this['version'] = version;
        return this;
    }
    public withEngineType(engineType: string): DASInstanceInfoDto {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withIp(ip: string): DASInstanceInfoDto {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DASInstanceInfoDto {
        this['port'] = port;
        return this;
    }
    public withCpu(cpu: number): DASInstanceInfoDto {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: number): DASInstanceInfoDto {
        this['mem'] = mem;
        return this;
    }
    public withLoginFlag(loginFlag: boolean): DASInstanceInfoDto {
        this['login_flag'] = loginFlag;
        return this;
    }
    public set loginFlag(loginFlag: boolean  | undefined) {
        this['login_flag'] = loginFlag;
    }
    public get loginFlag(): boolean | undefined {
        return this['login_flag'];
    }
    public withSlowSqlFlag(slowSqlFlag: boolean): DASInstanceInfoDto {
        this['slow_sql_flag'] = slowSqlFlag;
        return this;
    }
    public set slowSqlFlag(slowSqlFlag: boolean  | undefined) {
        this['slow_sql_flag'] = slowSqlFlag;
    }
    public get slowSqlFlag(): boolean | undefined {
        return this['slow_sql_flag'];
    }
    public withDeadLockFlag(deadLockFlag: boolean): DASInstanceInfoDto {
        this['dead_lock_flag'] = deadLockFlag;
        return this;
    }
    public set deadLockFlag(deadLockFlag: boolean  | undefined) {
        this['dead_lock_flag'] = deadLockFlag;
    }
    public get deadLockFlag(): boolean | undefined {
        return this['dead_lock_flag'];
    }
    public withLockBlockingFlag(lockBlockingFlag: boolean): DASInstanceInfoDto {
        this['lock_blocking_flag'] = lockBlockingFlag;
        return this;
    }
    public set lockBlockingFlag(lockBlockingFlag: boolean  | undefined) {
        this['lock_blocking_flag'] = lockBlockingFlag;
    }
    public get lockBlockingFlag(): boolean | undefined {
        return this['lock_blocking_flag'];
    }
    public withChargeFlag(chargeFlag: boolean): DASInstanceInfoDto {
        this['charge_flag'] = chargeFlag;
        return this;
    }
    public set chargeFlag(chargeFlag: boolean  | undefined) {
        this['charge_flag'] = chargeFlag;
    }
    public get chargeFlag(): boolean | undefined {
        return this['charge_flag'];
    }
    public withInstanceType(instanceType: string): DASInstanceInfoDto {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withFullSqlFlag(fullSqlFlag: boolean): DASInstanceInfoDto {
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