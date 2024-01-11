import { ChildrenJobListResp } from './ChildrenJobListResp';
import { JobActions } from './JobActions';


export class JobListResp {
    public id?: string;
    public name?: string;
    public status?: JobListRespStatusEnum | string;
    public description?: string;
    private 'create_time'?: string;
    private 'engine_type'?: JobListRespEngineTypeEnum | string;
    private 'net_type'?: JobListRespNetTypeEnum | string;
    private 'charging_mode'?: JobListRespChargingModeEnum | string;
    private 'billing_tag'?: boolean;
    private 'job_direction'?: JobListRespJobDirectionEnum | string;
    private 'job_type'?: JobListRespJobTypeEnum | string;
    private 'task_type'?: JobListRespTaskTypeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'job_mode'?: JobListRespJobModeEnum | string;
    private 'job_mode_role'?: JobListRespJobModeRoleEnum | string;
    private 'is_multi_az'?: boolean;
    private 'node_role'?: string;
    private 'node_new_framework'?: boolean;
    private 'job_action'?: JobActions;
    public children?: Array<ChildrenJobListResp>;
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
    public withId(id: string): JobListResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobListResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: JobListRespStatusEnum | string): JobListResp {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): JobListResp {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): JobListResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEngineType(engineType: JobListRespEngineTypeEnum | string): JobListResp {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobListRespEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): JobListRespEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: JobListRespNetTypeEnum | string): JobListResp {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobListRespNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): JobListRespNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withChargingMode(chargingMode: JobListRespChargingModeEnum | string): JobListResp {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: JobListRespChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): JobListRespChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withBillingTag(billingTag: boolean): JobListResp {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: boolean  | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag(): boolean | undefined {
        return this['billing_tag'];
    }
    public withJobDirection(jobDirection: JobListRespJobDirectionEnum | string): JobListResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobListRespJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): JobListRespJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withJobType(jobType: JobListRespJobTypeEnum | string): JobListResp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobListRespJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobListRespJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withTaskType(taskType: JobListRespTaskTypeEnum | string): JobListResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: JobListRespTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): JobListRespTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): JobListResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withJobMode(jobMode: JobListRespJobModeEnum | string): JobListResp {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: JobListRespJobModeEnum | string  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): JobListRespJobModeEnum | string | undefined {
        return this['job_mode'];
    }
    public withJobModeRole(jobModeRole: JobListRespJobModeRoleEnum | string): JobListResp {
        this['job_mode_role'] = jobModeRole;
        return this;
    }
    public set jobModeRole(jobModeRole: JobListRespJobModeRoleEnum | string  | undefined) {
        this['job_mode_role'] = jobModeRole;
    }
    public get jobModeRole(): JobListRespJobModeRoleEnum | string | undefined {
        return this['job_mode_role'];
    }
    public withIsMultiAz(isMultiAz: boolean): JobListResp {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean  | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz(): boolean | undefined {
        return this['is_multi_az'];
    }
    public withNodeRole(nodeRole: string): JobListResp {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): string | undefined {
        return this['node_role'];
    }
    public withNodeNewFramework(nodeNewFramework: boolean): JobListResp {
        this['node_new_framework'] = nodeNewFramework;
        return this;
    }
    public set nodeNewFramework(nodeNewFramework: boolean  | undefined) {
        this['node_new_framework'] = nodeNewFramework;
    }
    public get nodeNewFramework(): boolean | undefined {
        return this['node_new_framework'];
    }
    public withJobAction(jobAction: JobActions): JobListResp {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActions  | undefined) {
        this['job_action'] = jobAction;
    }
    public get jobAction(): JobActions | undefined {
        return this['job_action'];
    }
    public withChildren(children: Array<ChildrenJobListResp>): JobListResp {
        this['children'] = children;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobListRespStatusEnum {
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
export enum JobListRespEngineTypeEnum {
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5',
    REDIS_TO_GAUSSREDIS = 'redis-to-gaussredis',
    REDISCLUSTER_TO_GAUSSREDIS = 'rediscluster-to-gaussredis'
}
/**
    * @export
    * @enum {string}
    */
export enum JobListRespNetTypeEnum {
    EIP = 'eip',
    VPC = 'vpc',
    VPN = 'vpn'
}
/**
    * @export
    * @enum {string}
    */
export enum JobListRespChargingModeEnum {
    PERIOD = 'period',
    ON_DEMAND = 'on_demand'
}
/**
    * @export
    * @enum {string}
    */
export enum JobListRespJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum JobListRespJobTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum JobListRespTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
/**
    * @export
    * @enum {string}
    */
export enum JobListRespJobModeEnum {
    SINGLE = 'single',
    SYNC_CHILD = 'sync_child',
    MULTI_TO_SINGLE = 'multi_to_single'
}
/**
    * @export
    * @enum {string}
    */
export enum JobListRespJobModeRoleEnum {
    PARENT = 'parent',
    CHILD = 'child',
    MASTER = 'master',
    SLAVE = 'slave'
}
