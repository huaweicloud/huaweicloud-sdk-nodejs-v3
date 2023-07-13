

export class ListJobsRequest {
    private 'X-Language'?: ListJobsRequestXLanguageEnum | undefined;
    private 'job_type': ListJobsRequestJobTypeEnum | undefined;
    public name?: string;
    public status?: ListJobsRequestStatusEnum;
    private 'engine_type'?: ListJobsRequestEngineTypeEnum | undefined;
    private 'net_type'?: ListJobsRequestNetTypeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string | undefined;
    private 'sort_dir'?: string | undefined;
    public constructor(jobType?: any) { 
        this['job_type'] = jobType;
    }
    public withXLanguage(xLanguage: ListJobsRequestXLanguageEnum): ListJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListJobsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withJobType(jobType: ListJobsRequestJobTypeEnum): ListJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListJobsRequestJobTypeEnum | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withName(name: string): ListJobsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListJobsRequestStatusEnum): ListJobsRequest {
        this['status'] = status;
        return this;
    }
    public withEngineType(engineType: ListJobsRequestEngineTypeEnum): ListJobsRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: ListJobsRequestEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withNetType(netType: ListJobsRequestNetTypeEnum): ListJobsRequest {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ListJobsRequestNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListJobsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
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
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListJobsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
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
    ORACLE_TO_GAUSSDBV5 = 'oracle-to-gaussdbv5'
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
