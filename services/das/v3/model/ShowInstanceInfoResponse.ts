
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceInfoResponse extends SdkResponse {
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
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowInstanceInfoResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ShowInstanceInfoResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): ShowInstanceInfoResponse {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withVersion(version: string): ShowInstanceInfoResponse {
        this['version'] = version;
        return this;
    }
    public withEngineType(engineType: string): ShowInstanceInfoResponse {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withIp(ip: string): ShowInstanceInfoResponse {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): ShowInstanceInfoResponse {
        this['port'] = port;
        return this;
    }
    public withCpu(cpu: number): ShowInstanceInfoResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: number): ShowInstanceInfoResponse {
        this['mem'] = mem;
        return this;
    }
    public withLoginFlag(loginFlag: boolean): ShowInstanceInfoResponse {
        this['login_flag'] = loginFlag;
        return this;
    }
    public set loginFlag(loginFlag: boolean  | undefined) {
        this['login_flag'] = loginFlag;
    }
    public get loginFlag(): boolean | undefined {
        return this['login_flag'];
    }
    public withSlowSqlFlag(slowSqlFlag: boolean): ShowInstanceInfoResponse {
        this['slow_sql_flag'] = slowSqlFlag;
        return this;
    }
    public set slowSqlFlag(slowSqlFlag: boolean  | undefined) {
        this['slow_sql_flag'] = slowSqlFlag;
    }
    public get slowSqlFlag(): boolean | undefined {
        return this['slow_sql_flag'];
    }
    public withDeadlockFlag(deadlockFlag: boolean): ShowInstanceInfoResponse {
        this['deadlock_flag'] = deadlockFlag;
        return this;
    }
    public set deadlockFlag(deadlockFlag: boolean  | undefined) {
        this['deadlock_flag'] = deadlockFlag;
    }
    public get deadlockFlag(): boolean | undefined {
        return this['deadlock_flag'];
    }
    public withLockBlockingFlag(lockBlockingFlag: boolean): ShowInstanceInfoResponse {
        this['lock_blocking_flag'] = lockBlockingFlag;
        return this;
    }
    public set lockBlockingFlag(lockBlockingFlag: boolean  | undefined) {
        this['lock_blocking_flag'] = lockBlockingFlag;
    }
    public get lockBlockingFlag(): boolean | undefined {
        return this['lock_blocking_flag'];
    }
    public withChargeFlag(chargeFlag: boolean): ShowInstanceInfoResponse {
        this['charge_flag'] = chargeFlag;
        return this;
    }
    public set chargeFlag(chargeFlag: boolean  | undefined) {
        this['charge_flag'] = chargeFlag;
    }
    public get chargeFlag(): boolean | undefined {
        return this['charge_flag'];
    }
    public withFullSqlFlag(fullSqlFlag: boolean): ShowInstanceInfoResponse {
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