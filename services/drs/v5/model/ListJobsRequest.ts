

export class ListJobsRequest {
    private 'X-Language'?: ListJobsRequestXLanguageEnum | string;
    private 'job_type'?: ListJobsRequestJobTypeEnum | string;
    public name?: string;
    public status?: ListJobsRequestStatusEnum | string;
    private 'engine_type'?: ListJobsRequestEngineTypeEnum | string;
    private 'net_type'?: ListJobsRequestNetTypeEnum | string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'instance_ids'?: Array<string>;
    private 'instance_ip'?: string;
    public constructor(jobType?: string) { 
        this['job_type'] = jobType;
    }
    public withXLanguage(xLanguage: ListJobsRequestXLanguageEnum | string): ListJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobType(jobType: ListJobsRequestJobTypeEnum | string): ListJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListJobsRequestJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ListJobsRequestJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withName(name: string): ListJobsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListJobsRequestStatusEnum | string): ListJobsRequest {
        this['status'] = status;
        return this;
    }
    public withEngineType(engineType: ListJobsRequestEngineTypeEnum | string): ListJobsRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: ListJobsRequestEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): ListJobsRequestEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: ListJobsRequestNetTypeEnum | string): ListJobsRequest {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ListJobsRequestNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): ListJobsRequestNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListJobsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListJobsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListJobsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withInstanceIds(instanceIds: Array<string>): ListJobsRequest {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withInstanceIp(instanceIp: string): ListJobsRequest {
        this['instance_ip'] = instanceIp;
        return this;
    }
    public set instanceIp(instanceIp: string  | undefined) {
        this['instance_ip'] = instanceIp;
    }
    public get instanceIp(): string | undefined {
        return this['instance_ip'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestJobTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestStatusEnum {
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
export enum ListJobsRequestEngineTypeEnum {
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5',
    REDIS_TO_GAUSSREDIS = 'redis-to-gaussredis',
    REDISCLUSTER_TO_GAUSSREDIS = 'rediscluster-to-gaussredis'
}
/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestNetTypeEnum {
    EIP = 'eip',
    VPC = 'vpc',
    VPN = 'vpn'
}
