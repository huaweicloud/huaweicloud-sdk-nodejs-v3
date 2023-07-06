import { ResourceTag } from './ResourceTag';


export class JobBaseInfo {
    public name?: string;
    private 'job_type'?: JobBaseInfoJobTypeEnum | undefined;
    private 'multi_write'?: boolean | undefined;
    private 'engine_type'?: JobBaseInfoEngineTypeEnum | undefined;
    private 'job_direction'?: JobBaseInfoJobDirectionEnum | undefined;
    private 'task_type'?: JobBaseInfoTaskTypeEnum | undefined;
    private 'net_type'?: JobBaseInfoNetTypeEnum | undefined;
    private 'charging_mode'?: JobBaseInfoChargingModeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public description?: string;
    private 'start_time'?: string | undefined;
    private 'expired_days'?: string | undefined;
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withName(name: string): JobBaseInfo {
        this['name'] = name;
        return this;
    }
    public withJobType(jobType: JobBaseInfoJobTypeEnum): JobBaseInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobBaseInfoJobTypeEnum | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withMultiWrite(multiWrite: boolean): JobBaseInfo {
        this['multi_write'] = multiWrite;
        return this;
    }
    public set multiWrite(multiWrite: boolean | undefined) {
        this['multi_write'] = multiWrite;
    }
    public get multiWrite() {
        return this['multi_write'];
    }
    public withEngineType(engineType: JobBaseInfoEngineTypeEnum): JobBaseInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobBaseInfoEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withJobDirection(jobDirection: JobBaseInfoJobDirectionEnum): JobBaseInfo {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobBaseInfoJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withTaskType(taskType: JobBaseInfoTaskTypeEnum): JobBaseInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: JobBaseInfoTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withNetType(netType: JobBaseInfoNetTypeEnum): JobBaseInfo {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobBaseInfoNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withChargingMode(chargingMode: JobBaseInfoChargingModeEnum): JobBaseInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: JobBaseInfoChargingModeEnum | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): JobBaseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withDescription(description: string): JobBaseInfo {
        this['description'] = description;
        return this;
    }
    public withStartTime(startTime: string): JobBaseInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withExpiredDays(expiredDays: string): JobBaseInfo {
        this['expired_days'] = expiredDays;
        return this;
    }
    public set expiredDays(expiredDays: string | undefined) {
        this['expired_days'] = expiredDays;
    }
    public get expiredDays() {
        return this['expired_days'];
    }
    public withTags(tags: Array<ResourceTag>): JobBaseInfo {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobBaseInfoJobTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum JobBaseInfoEngineTypeEnum {
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5'
}
/**
    * @export
    * @enum {string}
    */
export enum JobBaseInfoJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum JobBaseInfoTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
/**
    * @export
    * @enum {string}
    */
export enum JobBaseInfoNetTypeEnum {
    EIP = 'eip',
    VPC = 'vpc',
    VPN = 'vpn'
}
/**
    * @export
    * @enum {string}
    */
export enum JobBaseInfoChargingModeEnum {
    PERIOD = 'period',
    ON_DEMAND = 'on_demand'
}
