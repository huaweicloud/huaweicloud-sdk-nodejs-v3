import { JobActions } from './JobActions';


export class ChildrenJobListResp {
    public id: string;
    public name: string;
    public status: ChildrenJobListRespStatusEnum;
    public description: string;
    private 'create_time': string | undefined;
    private 'engine_type': ChildrenJobListRespEngineTypeEnum | undefined;
    private 'net_type': ChildrenJobListRespNetTypeEnum | undefined;
    private 'charging_mode': ChildrenJobListRespChargingModeEnum | undefined;
    private 'billing_tag': boolean | undefined;
    private 'job_direction': ChildrenJobListRespJobDirectionEnum | undefined;
    private 'job_type': ChildrenJobListRespJobTypeEnum | undefined;
    private 'task_type': ChildrenJobListRespTaskTypeEnum | undefined;
    private 'enterprise_project_id': string | undefined;
    private 'job_mode': ChildrenJobListRespJobModeEnum | undefined;
    private 'job_mode_role': ChildrenJobListRespJobModeRoleEnum | undefined;
    private 'is_multi_az': boolean | undefined;
    private 'node_role': string | undefined;
    private 'node_new_framework': boolean | undefined;
    private 'job_action': JobActions | undefined;
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
    public withId(id: string): ChildrenJobListResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ChildrenJobListResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ChildrenJobListRespStatusEnum): ChildrenJobListResp {
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
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEngineType(engineType: ChildrenJobListRespEngineTypeEnum): ChildrenJobListResp {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: ChildrenJobListRespEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withNetType(netType: ChildrenJobListRespNetTypeEnum): ChildrenJobListResp {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ChildrenJobListRespNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withChargingMode(chargingMode: ChildrenJobListRespChargingModeEnum): ChildrenJobListResp {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: ChildrenJobListRespChargingModeEnum | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withBillingTag(billingTag: boolean): ChildrenJobListResp {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: boolean | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag() {
        return this['billing_tag'];
    }
    public withJobDirection(jobDirection: ChildrenJobListRespJobDirectionEnum): ChildrenJobListResp {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: ChildrenJobListRespJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withJobType(jobType: ChildrenJobListRespJobTypeEnum): ChildrenJobListResp {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ChildrenJobListRespJobTypeEnum | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withTaskType(taskType: ChildrenJobListRespTaskTypeEnum): ChildrenJobListResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ChildrenJobListRespTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChildrenJobListResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withJobMode(jobMode: ChildrenJobListRespJobModeEnum): ChildrenJobListResp {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: ChildrenJobListRespJobModeEnum | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode() {
        return this['job_mode'];
    }
    public withJobModeRole(jobModeRole: ChildrenJobListRespJobModeRoleEnum): ChildrenJobListResp {
        this['job_mode_role'] = jobModeRole;
        return this;
    }
    public set jobModeRole(jobModeRole: ChildrenJobListRespJobModeRoleEnum | undefined) {
        this['job_mode_role'] = jobModeRole;
    }
    public get jobModeRole() {
        return this['job_mode_role'];
    }
    public withIsMultiAz(isMultiAz: boolean): ChildrenJobListResp {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz() {
        return this['is_multi_az'];
    }
    public withNodeRole(nodeRole: string): ChildrenJobListResp {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole() {
        return this['node_role'];
    }
    public withNodeNewFramework(nodeNewFramework: boolean): ChildrenJobListResp {
        this['node_new_framework'] = nodeNewFramework;
        return this;
    }
    public set nodeNewFramework(nodeNewFramework: boolean | undefined) {
        this['node_new_framework'] = nodeNewFramework;
    }
    public get nodeNewFramework() {
        return this['node_new_framework'];
    }
    public withJobAction(jobAction: JobActions): ChildrenJobListResp {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActions | undefined) {
        this['job_action'] = jobAction;
    }
    public get jobAction() {
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
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5'
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
