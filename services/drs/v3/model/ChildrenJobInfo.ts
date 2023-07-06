import { JobActionResp } from './JobActionResp';


export class ChildrenJobInfo {
    private 'billing_tag': boolean | undefined;
    private 'create_time': string | undefined;
    private 'db_use_type': ChildrenJobInfoDbUseTypeEnum | undefined;
    public description: string;
    private 'engine_type': ChildrenJobInfoEngineTypeEnum | undefined;
    private 'error_msg': string | undefined;
    public id: string;
    private 'job_direction': ChildrenJobInfoJobDirectionEnum | undefined;
    public name: string;
    private 'net_type': ChildrenJobInfoNetTypeEnum | undefined;
    private 'node_newFramework': boolean | undefined;
    public status: ChildrenJobInfoStatusEnum;
    private 'task_type': ChildrenJobInfoTaskTypeEnum | undefined;
    private 'job_action'?: JobActionResp | undefined;
    public constructor(billingTag?: any, createTime?: any, dbUseType?: any, description?: any, engineType?: any, errorMsg?: any, id?: any, jobDirection?: any, name?: any, netType?: any, nodeNewFramework?: any, status?: any, taskType?: any) { 
        this['billing_tag'] = billingTag;
        this['create_time'] = createTime;
        this['db_use_type'] = dbUseType;
        this['description'] = description;
        this['engine_type'] = engineType;
        this['error_msg'] = errorMsg;
        this['id'] = id;
        this['job_direction'] = jobDirection;
        this['name'] = name;
        this['net_type'] = netType;
        this['node_newFramework'] = nodeNewFramework;
        this['status'] = status;
        this['task_type'] = taskType;
    }
    public withBillingTag(billingTag: boolean): ChildrenJobInfo {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: boolean | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag() {
        return this['billing_tag'];
    }
    public withCreateTime(createTime: string): ChildrenJobInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withDbUseType(dbUseType: ChildrenJobInfoDbUseTypeEnum): ChildrenJobInfo {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: ChildrenJobInfoDbUseTypeEnum | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType() {
        return this['db_use_type'];
    }
    public withDescription(description: string): ChildrenJobInfo {
        this['description'] = description;
        return this;
    }
    public withEngineType(engineType: ChildrenJobInfoEngineTypeEnum): ChildrenJobInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: ChildrenJobInfoEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withErrorMsg(errorMsg: string): ChildrenJobInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
    public withId(id: string): ChildrenJobInfo {
        this['id'] = id;
        return this;
    }
    public withJobDirection(jobDirection: ChildrenJobInfoJobDirectionEnum): ChildrenJobInfo {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: ChildrenJobInfoJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withName(name: string): ChildrenJobInfo {
        this['name'] = name;
        return this;
    }
    public withNetType(netType: ChildrenJobInfoNetTypeEnum): ChildrenJobInfo {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ChildrenJobInfoNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withNodeNewFramework(nodeNewFramework: boolean): ChildrenJobInfo {
        this['node_newFramework'] = nodeNewFramework;
        return this;
    }
    public set nodeNewFramework(nodeNewFramework: boolean | undefined) {
        this['node_newFramework'] = nodeNewFramework;
    }
    public get nodeNewFramework() {
        return this['node_newFramework'];
    }
    public withStatus(status: ChildrenJobInfoStatusEnum): ChildrenJobInfo {
        this['status'] = status;
        return this;
    }
    public withTaskType(taskType: ChildrenJobInfoTaskTypeEnum): ChildrenJobInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ChildrenJobInfoTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withJobAction(jobAction: JobActionResp): ChildrenJobInfo {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActionResp | undefined) {
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
export enum ChildrenJobInfoDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobInfoEngineTypeEnum {
    CLOUDDATAGUARD_CASSANDRA = 'cloudDataGuard-cassandra',
    CLOUDDATAGUARD_DDM = 'cloudDataGuard-ddm',
    CLOUDDATAGUARD_TAURUS_TO_MYSQL = 'cloudDataGuard-taurus-to-mysql',
    CLOUDDATAGUARD_MYSQL = 'cloudDataGuard-mysql',
    CLOUDDATAGUARD_MYSQL_TO_TAURUS = 'cloudDataGuard-mysql-to-taurus'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobInfoJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NO_DBS = 'no-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobInfoNetTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobInfoStatusEnum {
    CREATING = 'CREATING',
    CREATE_FAILED = 'CREATE_FAILED',
    CONFIGURATION = 'CONFIGURATION',
    STARTJOBING = 'STARTJOBING',
    WAITING_FOR_START = 'WAITING_FOR_START',
    START_JOB_FAILED = 'START_JOB_FAILED',
    PAUSING = 'PAUSING',
    FULL_TRANSFER_STARTED = 'FULL_TRANSFER_STARTED',
    FULL_TRANSFER_FAILED = 'FULL_TRANSFER_FAILED',
    FULL_TRANSFER_COMPLETE = 'FULL_TRANSFER_COMPLETE',
    INCRE_TRANSFER_STARTED = 'INCRE_TRANSFER_STARTED',
    INCRE_TRANSFER_FAILED = 'INCRE_TRANSFER_FAILED',
    RELEASE_RESOURCE_STARTED = 'RELEASE_RESOURCE_STARTED',
    RELEASE_RESOURCE_FAILED = 'RELEASE_RESOURCE_FAILED',
    RELEASE_RESOURCE_COMPLETE = 'RELEASE_RESOURCE_COMPLETE',
    REBUILD_NODE_STARTED = 'REBUILD_NODE_STARTED',
    REBUILD_NODE_FAILED = 'REBUILD_NODE_FAILED',
    CHANGE_JOB_STARTED = 'CHANGE_JOB_STARTED',
    CHANGE_JOB_FAILED = 'CHANGE_JOB_FAILED',
    DELETED = 'DELETED',
    CHILD_TRANSFER_STARTING = 'CHILD_TRANSFER_STARTING',
    CHILD_TRANSFER_STARTED = 'CHILD_TRANSFER_STARTED',
    CHILD_TRANSFER_COMPLETE = 'CHILD_TRANSFER_COMPLETE',
    CHILD_TRANSFER_FAILED = 'CHILD_TRANSFER_FAILED',
    RELEASE_CHILD_TRANSFER_STARTED = 'RELEASE_CHILD_TRANSFER_STARTED',
    RELEASE_CHILD_TRANSFER_COMPLETE = 'RELEASE_CHILD_TRANSFER_COMPLETE',
    NODE_UPGRADE_START = 'NODE_UPGRADE_START',
    NODE_UPGRADE_COMPLETE = 'NODE_UPGRADE_COMPLETE',
    NODE_UPGRADE_FAILED = 'NODE_UPGRADE_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ChildrenJobInfoTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
