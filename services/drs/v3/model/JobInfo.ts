import { ChildrenJobInfo } from './ChildrenJobInfo';
import { JobActionResp } from './JobActionResp';


export class JobInfo {
    public id?: string;
    public name?: string;
    public status?: JobInfoStatusEnum | string;
    private 'create_time'?: string;
    public description?: string;
    private 'engine_type'?: JobInfoEngineTypeEnum | string;
    private 'net_type'?: JobInfoNetTypeEnum | string;
    private 'billing_tag'?: boolean;
    private 'job_direction'?: JobInfoJobDirectionEnum | string;
    private 'db_use_type'?: JobInfoDbUseTypeEnum | string;
    private 'task_type'?: JobInfoTaskTypeEnum | string;
    public children?: Array<ChildrenJobInfo>;
    private 'node_newFramework'?: boolean;
    private 'job_action'?: JobActionResp;
    public constructor(id?: string, name?: string, status?: string, createTime?: string, description?: string, engineType?: string, netType?: string, billingTag?: boolean, jobDirection?: string, dbUseType?: string, taskType?: string, nodeNewFramework?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['create_time'] = createTime;
        this['description'] = description;
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
    public withStatus(status: JobInfoStatusEnum | string): JobInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): JobInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): JobInfo {
        this['description'] = description;
        return this;
    }
    public withEngineType(engineType: JobInfoEngineTypeEnum | string): JobInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobInfoEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): JobInfoEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: JobInfoNetTypeEnum | string): JobInfo {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobInfoNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): JobInfoNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withBillingTag(billingTag: boolean): JobInfo {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: boolean  | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag(): boolean | undefined {
        return this['billing_tag'];
    }
    public withJobDirection(jobDirection: JobInfoJobDirectionEnum | string): JobInfo {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobInfoJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): JobInfoJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withDbUseType(dbUseType: JobInfoDbUseTypeEnum | string): JobInfo {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: JobInfoDbUseTypeEnum | string  | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType(): JobInfoDbUseTypeEnum | string | undefined {
        return this['db_use_type'];
    }
    public withTaskType(taskType: JobInfoTaskTypeEnum | string): JobInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: JobInfoTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): JobInfoTaskTypeEnum | string | undefined {
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
    public set nodeNewFramework(nodeNewFramework: boolean  | undefined) {
        this['node_newFramework'] = nodeNewFramework;
    }
    public get nodeNewFramework(): boolean | undefined {
        return this['node_newFramework'];
    }
    public withJobAction(jobAction: JobActionResp): JobInfo {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActionResp  | undefined) {
        this['job_action'] = jobAction;
    }
    public get jobAction(): JobActionResp | undefined {
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
