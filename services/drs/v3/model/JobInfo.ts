import { ChildrenJobInfo } from './ChildrenJobInfo';
import { JobActionResp } from './JobActionResp';


export class JobInfo {
    public id: string;
    public name: string;
    public status: JobInfoStatusEnum;
    public description: string;
    private 'create_time': string | undefined;
    private 'engine_type': JobInfoEngineTypeEnum | undefined;
    private 'net_type': JobInfoNetTypeEnum | undefined;
    private 'billing_tag': boolean | undefined;
    private 'job_direction': JobInfoJobDirectionEnum | undefined;
    private 'db_use_type': JobInfoDbUseTypeEnum | undefined;
    private 'task_type': JobInfoTaskTypeEnum | undefined;
    public children?: Array<ChildrenJobInfo>;
    private 'node_newFramework': boolean | undefined;
    private 'job_action'?: JobActionResp | undefined;
    public constructor(id?: any, name?: any, status?: any, description?: any, createTime?: any, engineType?: any, netType?: any, billingTag?: any, jobDirection?: any, dbUseType?: any, taskType?: any, nodeNewFramework?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['description'] = description;
        this['create_time'] = createTime;
        this['engine_type'] = engineType;
        this['net_type'] = netType;
        this['billing_tag'] = billingTag;
        this['job_direction'] = jobDirection;
        this['db_use_type'] = dbUseType;
        this['task_type'] = taskType;
        this['node_newFramework'] = nodeNewFramework;
    }
    public withId(id: string): JobInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: JobInfoStatusEnum): JobInfo {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): JobInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): JobInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEngineType(engineType: JobInfoEngineTypeEnum): JobInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobInfoEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withNetType(netType: JobInfoNetTypeEnum): JobInfo {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobInfoNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withBillingTag(billingTag: boolean): JobInfo {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: boolean | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag() {
        return this['billing_tag'];
    }
    public withJobDirection(jobDirection: JobInfoJobDirectionEnum): JobInfo {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobInfoJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withDbUseType(dbUseType: JobInfoDbUseTypeEnum): JobInfo {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: JobInfoDbUseTypeEnum | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType() {
        return this['db_use_type'];
    }
    public withTaskType(taskType: JobInfoTaskTypeEnum): JobInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: JobInfoTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withChildren(children: Array<ChildrenJobInfo>): JobInfo {
        this['children'] = children;
        return this;
    }
    public withNodeNewFramework(nodeNewFramework: boolean): JobInfo {
        this['node_newFramework'] = nodeNewFramework;
        return this;
    }
    public set nodeNewFramework(nodeNewFramework: boolean | undefined) {
        this['node_newFramework'] = nodeNewFramework;
    }
    public get nodeNewFramework() {
        return this['node_newFramework'];
    }
    public withJobAction(jobAction: JobActionResp): JobInfo {
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
export enum JobInfoStatusEnum {
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
export enum JobInfoEngineTypeEnum {
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
export enum JobInfoNetTypeEnum {
    VPN = 'vpn',
    VPC = 'vpc',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum JobInfoJobDirectionEnum {
    UP = 'up',
    DOWN = 'down'
}
/**
    * @export
    * @enum {string}
    */
export enum JobInfoDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum JobInfoTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
