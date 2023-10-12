

export class InvocationInfo {
    private 'invocation_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_type'?: InvocationInfoInstanceTypeEnum | string;
    private 'intranet_ips'?: Array<string>;
    private 'elastic_ips'?: Array<string>;
    private 'invocation_type'?: InvocationInfoInvocationTypeEnum | string;
    private 'invocation_status'?: InvocationInfoInvocationStatusEnum | string;
    private 'invocation_target'?: InvocationInfoInvocationTargetEnum | string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'current_version'?: string;
    private 'target_version'?: string;
    public constructor() { 
    }
    public withInvocationId(invocationId: string): InvocationInfo {
        this['invocation_id'] = invocationId;
        return this;
    }
    public set invocationId(invocationId: string  | undefined) {
        this['invocation_id'] = invocationId;
    }
    public get invocationId(): string | undefined {
        return this['invocation_id'];
    }
    public withInstanceId(instanceId: string): InvocationInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InvocationInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceType(instanceType: InvocationInfoInstanceTypeEnum | string): InvocationInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: InvocationInfoInstanceTypeEnum | string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): InvocationInfoInstanceTypeEnum | string | undefined {
        return this['instance_type'];
    }
    public withIntranetIps(intranetIps: Array<string>): InvocationInfo {
        this['intranet_ips'] = intranetIps;
        return this;
    }
    public set intranetIps(intranetIps: Array<string>  | undefined) {
        this['intranet_ips'] = intranetIps;
    }
    public get intranetIps(): Array<string> | undefined {
        return this['intranet_ips'];
    }
    public withElasticIps(elasticIps: Array<string>): InvocationInfo {
        this['elastic_ips'] = elasticIps;
        return this;
    }
    public set elasticIps(elasticIps: Array<string>  | undefined) {
        this['elastic_ips'] = elasticIps;
    }
    public get elasticIps(): Array<string> | undefined {
        return this['elastic_ips'];
    }
    public withInvocationType(invocationType: InvocationInfoInvocationTypeEnum | string): InvocationInfo {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: InvocationInfoInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): InvocationInfoInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withInvocationStatus(invocationStatus: InvocationInfoInvocationStatusEnum | string): InvocationInfo {
        this['invocation_status'] = invocationStatus;
        return this;
    }
    public set invocationStatus(invocationStatus: InvocationInfoInvocationStatusEnum | string  | undefined) {
        this['invocation_status'] = invocationStatus;
    }
    public get invocationStatus(): InvocationInfoInvocationStatusEnum | string | undefined {
        return this['invocation_status'];
    }
    public withInvocationTarget(invocationTarget: InvocationInfoInvocationTargetEnum | string): InvocationInfo {
        this['invocation_target'] = invocationTarget;
        return this;
    }
    public set invocationTarget(invocationTarget: InvocationInfoInvocationTargetEnum | string  | undefined) {
        this['invocation_target'] = invocationTarget;
    }
    public get invocationTarget(): InvocationInfoInvocationTargetEnum | string | undefined {
        return this['invocation_target'];
    }
    public withCreateTime(createTime: number): InvocationInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): InvocationInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCurrentVersion(currentVersion: string): InvocationInfo {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withTargetVersion(targetVersion: string): InvocationInfo {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InvocationInfoInstanceTypeEnum {
    ECS = 'ECS',
    BMS = 'BMS'
}
/**
    * @export
    * @enum {string}
    */
export enum InvocationInfoInvocationTypeEnum {
    INSTALL = 'INSTALL',
    UPDATE = 'UPDATE',
    ROLLBACK = 'ROLLBACK',
    RETRY = 'RETRY'
}
/**
    * @export
    * @enum {string}
    */
export enum InvocationInfoInvocationStatusEnum {
    PENDING = 'PENDING',
    RUNNING = 'RUNNING',
    TIMEOUT = 'TIMEOUT',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED',
    CANCELED = 'CANCELED',
    ROLLBACKED = 'ROLLBACKED'
}
/**
    * @export
    * @enum {string}
    */
export enum InvocationInfoInvocationTargetEnum {
    TELESCOPE = 'telescope'
}
