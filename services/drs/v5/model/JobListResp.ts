import { ChildrenJobListResp } from './ChildrenJobListResp';
import { JobActions } from './JobActions';


export class JobListResp {
    public id: string;
    public name: string;
    public status: JobListRespStatusEnum;
    public description: string;
    private 'create_time': string | undefined;
    private 'engine_type': JobListRespEngineTypeEnum | undefined;
    private 'net_type': JobListRespNetTypeEnum | undefined;
    private 'charging_mode': JobListRespChargingModeEnum | undefined;
    private 'billing_tag': boolean | undefined;
    private 'job_direction': JobListRespJobDirectionEnum | undefined;
    private 'job_type': JobListRespJobTypeEnum | undefined;
    private 'task_type': JobListRespTaskTypeEnum | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'job_mode': JobListRespJobModeEnum | undefined;
    private 'job_mode_role': JobListRespJobModeRoleEnum | undefined;
    private 'is_multi_az': boolean | undefined;
    private 'node_role': string | undefined;
    private 'node_new_framework': boolean | undefined;
    private 'job_action': JobActions | undefined;
    public children?: Array<ChildrenJobListResp>;
    public constructor(id?: any, name?: any, status?: any, description?: any, createTime?: any, engineType?: any, netType?: any, chargingMode?: any, billingTag?: any, jobDirection?: any, jobType?: any, taskType?: any, enterpriseProjectId?: any, jobMode?: any, jobModeRole?: any, isMultiAz?: any, nodeRole?: any, nodeNewFramework?: any, jobAction?: any) { 
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
    public withStatus(status: JobListRespStatusEnum): JobListResp {
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
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEngineType(engineType: JobListRespEngineTypeEnum): JobListResp {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobListRespEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withNetType(netType: JobListRespNetTypeEnum): JobListResp {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobListRespNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withChargingMode(chargingMode: JobListRespChargingModeEnum): JobListResp {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: JobListRespChargingModeEnum | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withBillingTag(billingTag: boolean): JobListResp {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: boolean | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag() {
        return this['billing_tag'];
    }
    public withJobDirection(jobDirection: JobListRespJobDirectionEnum): JobListResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobListRespJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withJobType(jobType: JobListRespJobTypeEnum): JobListResp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobListRespJobTypeEnum | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withTaskType(taskType: JobListRespTaskTypeEnum): JobListResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: JobListRespTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): JobListResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withJobMode(jobMode: JobListRespJobModeEnum): JobListResp {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: JobListRespJobModeEnum | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode() {
        return this['job_mode'];
    }
    public withJobModeRole(jobModeRole: JobListRespJobModeRoleEnum): JobListResp {
        this['job_mode_role'] = jobModeRole;
        return this;
    }
    public set jobModeRole(jobModeRole: JobListRespJobModeRoleEnum | undefined) {
        this['job_mode_role'] = jobModeRole;
    }
    public get jobModeRole() {
        return this['job_mode_role'];
    }
    public withIsMultiAz(isMultiAz: boolean): JobListResp {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz() {
        return this['is_multi_az'];
    }
    public withNodeRole(nodeRole: string): JobListResp {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole() {
        return this['node_role'];
    }
    public withNodeNewFramework(nodeNewFramework: boolean): JobListResp {
        this['node_new_framework'] = nodeNewFramework;
        return this;
    }
    public set nodeNewFramework(nodeNewFramework: boolean | undefined) {
        this['node_new_framework'] = nodeNewFramework;
    }
    public get nodeNewFramework() {
        return this['node_new_framework'];
    }
    public withJobAction(jobAction: JobActions): JobListResp {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActions | undefined) {
        this['job_action'] = jobAction;
    }
    public get jobAction() {
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
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5'
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
