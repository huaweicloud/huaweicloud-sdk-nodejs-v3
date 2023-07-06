

export class QueryJobsReq {
    private 'cur_page': number | undefined;
    private 'per_page': number | undefined;
    private 'db_use_type': QueryJobsReqDbUseTypeEnum | undefined;
    private 'engine_type'?: QueryJobsReqEngineTypeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public name?: string;
    private 'net_type'?: QueryJobsReqNetTypeEnum | undefined;
    private 'service_name'?: string | undefined;
    public status?: QueryJobsReqStatusEnum;
    public tags?: { [key: string]: string; };
    public constructor(curPage?: any, perPage?: any, dbUseType?: any) { 
        this['cur_page'] = curPage;
        this['per_page'] = perPage;
        this['db_use_type'] = dbUseType;
    }
    public withCurPage(curPage: number): QueryJobsReq {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage() {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): QueryJobsReq {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage() {
        return this['per_page'];
    }
    public withDbUseType(dbUseType: QueryJobsReqDbUseTypeEnum): QueryJobsReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: QueryJobsReqDbUseTypeEnum | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType() {
        return this['db_use_type'];
    }
    public withEngineType(engineType: QueryJobsReqEngineTypeEnum): QueryJobsReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: QueryJobsReqEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QueryJobsReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withName(name: string): QueryJobsReq {
        this['name'] = name;
        return this;
    }
    public withNetType(netType: QueryJobsReqNetTypeEnum): QueryJobsReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: QueryJobsReqNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withServiceName(serviceName: string): QueryJobsReq {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withStatus(status: QueryJobsReqStatusEnum): QueryJobsReq {
        this['status'] = status;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): QueryJobsReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryJobsReqDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobsReqEngineTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb',
    CLOUDDATAGUARD_MYSQL = 'cloudDataGuard-mysql'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobsReqNetTypeEnum {
    VPN = 'vpn',
    VPC = 'vpc',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryJobsReqStatusEnum {
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
