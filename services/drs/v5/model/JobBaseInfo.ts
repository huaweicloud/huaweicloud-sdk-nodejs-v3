import { ResourceTag } from './ResourceTag';


export class JobBaseInfo {
    public name?: string;
    private 'job_type'?: JobBaseInfoJobTypeEnum | string;
    private 'multi_write'?: boolean;
    private 'engine_type'?: JobBaseInfoEngineTypeEnum | string;
    private 'job_direction'?: JobBaseInfoJobDirectionEnum | string;
    private 'task_type'?: JobBaseInfoTaskTypeEnum | string;
    private 'net_type'?: JobBaseInfoNetTypeEnum | string;
    private 'charging_mode'?: JobBaseInfoChargingModeEnum | string;
    private 'enterprise_project_id'?: string;
    public description?: string;
    private 'start_time'?: string;
    private 'expired_days'?: string;
    public tags?: Array<ResourceTag>;
    private 'is_open_fast_clean'?: boolean;
    public constructor() { 
    }
    public withName(name: string): JobBaseInfo {
        this['name'] = name;
        return this;
    }
    public withJobType(jobType: JobBaseInfoJobTypeEnum | string): JobBaseInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobBaseInfoJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobBaseInfoJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withMultiWrite(multiWrite: boolean): JobBaseInfo {
        this['multi_write'] = multiWrite;
        return this;
    }
    public set multiWrite(multiWrite: boolean  | undefined) {
        this['multi_write'] = multiWrite;
    }
    public get multiWrite(): boolean | undefined {
        return this['multi_write'];
    }
    public withEngineType(engineType: JobBaseInfoEngineTypeEnum | string): JobBaseInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: JobBaseInfoEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): JobBaseInfoEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withJobDirection(jobDirection: JobBaseInfoJobDirectionEnum | string): JobBaseInfo {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: JobBaseInfoJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): JobBaseInfoJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withTaskType(taskType: JobBaseInfoTaskTypeEnum | string): JobBaseInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: JobBaseInfoTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): JobBaseInfoTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withNetType(netType: JobBaseInfoNetTypeEnum | string): JobBaseInfo {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: JobBaseInfoNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): JobBaseInfoNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withChargingMode(chargingMode: JobBaseInfoChargingModeEnum | string): JobBaseInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: JobBaseInfoChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): JobBaseInfoChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): JobBaseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
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
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withExpiredDays(expiredDays: string): JobBaseInfo {
        this['expired_days'] = expiredDays;
        return this;
    }
    public set expiredDays(expiredDays: string  | undefined) {
        this['expired_days'] = expiredDays;
    }
    public get expiredDays(): string | undefined {
        return this['expired_days'];
    }
    public withTags(tags: Array<ResourceTag>): JobBaseInfo {
        this['tags'] = tags;
        return this;
    }
    public withIsOpenFastClean(isOpenFastClean: boolean): JobBaseInfo {
        this['is_open_fast_clean'] = isOpenFastClean;
        return this;
    }
    public set isOpenFastClean(isOpenFastClean: boolean  | undefined) {
        this['is_open_fast_clean'] = isOpenFastClean;
    }
    public get isOpenFastClean(): boolean | undefined {
        return this['is_open_fast_clean'];
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
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5',
    REDIS_TO_GAUSSREDIS = 'redis-to-gaussredis',
    REDISCLUSTER_TO_GAUSSREDIS = 'rediscluster-to-gaussredis'
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
