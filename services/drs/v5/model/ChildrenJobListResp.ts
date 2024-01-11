import { JobActions } from './JobActions';


export class ChildrenJobListResp {
    public id?: string;
    public name?: string;
    public status?: ChildrenJobListRespStatusEnum | string;
    public description?: string;
    private 'create_time'?: string;
    private 'engine_type'?: ChildrenJobListRespEngineTypeEnum | string;
    private 'net_type'?: ChildrenJobListRespNetTypeEnum | string;
    private 'charging_mode'?: ChildrenJobListRespChargingModeEnum | string;
    private 'billing_tag'?: boolean;
    private 'job_direction'?: ChildrenJobListRespJobDirectionEnum | string;
    private 'job_type'?: ChildrenJobListRespJobTypeEnum | string;
    private 'task_type'?: ChildrenJobListRespTaskTypeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'job_mode'?: ChildrenJobListRespJobModeEnum | string;
    private 'job_mode_role'?: ChildrenJobListRespJobModeRoleEnum | string;
    private 'is_multi_az'?: boolean;
    private 'node_role'?: string;
    private 'node_new_framework'?: boolean;
    private 'job_action'?: JobActions;
    public constructor(id?: string, name?: string, status?: string, description?: string, createTime?: string, engineType?: string, netType?: string, chargingMode?: string, billingTag?: boolean, jobDirection?: string, jobType?: string, taskType?: string, enterpriseProjectId?: string, jobMode?: string, jobModeRole?: string, isMultiAz?: boolean, nodeRole?: string, nodeNewFramework?: boolean, jobAction?: JobActions) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['description'] = description;
        this['create_time'] = createTime;
        this['engine_type'] = engineType;
        this['net_type'] = netType;
        this['charging_mode'] = chargingMode;
        this['billing_tag'] = billingTag;
        this['job_direction'] = jobDirection;
        this['job_type'] = jobType;
        this['task_type'] = taskType;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['job_mode'] = jobMode;
        this['job_mode_role'] = jobModeRole;
        this['is_multi_az'] = isMultiAz;
        this['node_role'] = nodeRole;
        this['node_new_framework'] = nodeNewFramework;
        this['job_action'] = jobAction;
    }
    public withId(id: string): ChildrenJobListResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ChildrenJobListResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ChildrenJobListRespStatusEnum | string): ChildrenJobListResp {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ChildrenJobListResp {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ChildrenJobListResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEngineType(engineType: ChildrenJobListRespEngineTypeEnum | string): ChildrenJobListResp {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: ChildrenJobListRespEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): ChildrenJobListRespEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: ChildrenJobListRespNetTypeEnum | string): ChildrenJobListResp {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ChildrenJobListRespNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): ChildrenJobListRespNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withChargingMode(chargingMode: ChildrenJobListRespChargingModeEnum | string): ChildrenJobListResp {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: ChildrenJobListRespChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): ChildrenJobListRespChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withBillingTag(billingTag: boolean): ChildrenJobListResp {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: boolean  | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag(): boolean | undefined {
        return this['billing_tag'];
    }
    public withJobDirection(jobDirection: ChildrenJobListRespJobDirectionEnum | string): ChildrenJobListResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: ChildrenJobListRespJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): ChildrenJobListRespJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withJobType(jobType: ChildrenJobListRespJobTypeEnum | string): ChildrenJobListResp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ChildrenJobListRespJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ChildrenJobListRespJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withTaskType(taskType: ChildrenJobListRespTaskTypeEnum | string): ChildrenJobListResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ChildrenJobListRespTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ChildrenJobListRespTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChildrenJobListResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withJobMode(jobMode: ChildrenJobListRespJobModeEnum | string): ChildrenJobListResp {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: ChildrenJobListRespJobModeEnum | string  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): ChildrenJobListRespJobModeEnum | string | undefined {
        return this['job_mode'];
    }
    public withJobModeRole(jobModeRole: ChildrenJobListRespJobModeRoleEnum | string): ChildrenJobListResp {
        this['job_mode_role'] = jobModeRole;
        return this;
    }
    public set jobModeRole(jobModeRole: ChildrenJobListRespJobModeRoleEnum | string  | undefined) {
        this['job_mode_role'] = jobModeRole;
    }
    public get jobModeRole(): ChildrenJobListRespJobModeRoleEnum | string | undefined {
        return this['job_mode_role'];
    }
    public withIsMultiAz(isMultiAz: boolean): ChildrenJobListResp {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean  | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz(): boolean | undefined {
        return this['is_multi_az'];
    }
    public withNodeRole(nodeRole: string): ChildrenJobListResp {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): string | undefined {
        return this['node_role'];
    }
    public withNodeNewFramework(nodeNewFramework: boolean): ChildrenJobListResp {
        this['node_new_framework'] = nodeNewFramework;
        return this;
    }
    public set nodeNewFramework(nodeNewFramework: boolean  | undefined) {
        this['node_new_framework'] = nodeNewFramework;
    }
    public get nodeNewFramework(): boolean | undefined {
        return this['node_new_framework'];
    }
    public withJobAction(jobAction: JobActions): ChildrenJobListResp {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActions  | undefined) {
        this['job_action'] = jobAction;
    }
    public get jobAction(): JobActions | undefined {
        return this['job_action'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespStatusEnum {
    CREATING = 'CREATING',
    CREATE_FAILED = 'CREATE_FAILED',
    CONFIGURATION = 'CONFIGURATION',
    STARTJOBING = 'STARTJOBING',
    WAITING_FOR_START = 'WAITING_FOR_START',
    START_JOB_FAILED = 'START_JOB_FAILED',
    FULL_TRANSFER_STARTED = 'FULL_TRANSFER_STARTED',
    FULL_TRANSFER_FAILED = 'FULL_TRANSFER_FAILED',
    FULL_TRANSFER_COMPLETE = 'FULL_TRANSFER_COMPLETE',
    INCRE_TRANSFER_STARTED = 'INCRE_TRANSFER_STARTED',
    INCRE_TRANSFER_FAILED = 'INCRE_TRANSFER_FAILED',
    RELEASE_RESOURCE_STARTED = 'RELEASE_RESOURCE_STARTED',
    RELEASE_RESOURCE_FAILED = 'RELEASE_RESOURCE_FAILED',
    RELEASE_RESOURCE_COMPLETE = 'RELEASE_RESOURCE_COMPLETE',
    CHANGE_JOB_STARTED = 'CHANGE_JOB_STARTED',
    CHANGE_JOB_FAILED = 'CHANGE_JOB_FAILED',
    CHILD_TRANSFER_STARTING = 'CHILD_TRANSFER_STARTING',
    CHILD_TRANSFER_STARTED = 'CHILD_TRANSFER_STARTED',
    CHILD_TRANSFER_COMPLETE = 'CHILD_TRANSFER_COMPLETE',
    CHILD_TRANSFER_FAILED = 'CHILD_TRANSFER_FAILED',
    RELEASE_CHILD_TRANSFER_STARTED = 'RELEASE_CHILD_TRANSFER_STARTED',
    RELEASE_CHILD_TRANSFER_COMPLETE = 'RELEASE_CHILD_TRANSFER_COMPLETE'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespEngineTypeEnum {
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5',
    REDIS_TO_GAUSSREDIS = 'redis-to-gaussredis',
    REDISCLUSTER_TO_GAUSSREDIS = 'rediscluster-to-gaussredis'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespNetTypeEnum {
    EIP = 'eip',
    VPC = 'vpc',
    VPN = 'vpn'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespChargingModeEnum {
    PERIOD = 'period',
    ON_DEMAND = 'on_demand'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespJobTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespJobModeEnum {
    SINGLE = 'single',
    SYNC_CHILD = 'sync_child',
    MULTI_TO_SINGLE = 'multi_to_single'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobListRespJobModeRoleEnum {
    PARENT = 'parent',
    CHILD = 'child',
    MASTER = 'master',
    SLAVE = 'slave'
}
