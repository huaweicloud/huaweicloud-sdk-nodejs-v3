

export class QueryJobsReq {
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'db_use_type'?: QueryJobsReqDbUseTypeEnum | string;
    private 'engine_type'?: QueryJobsReqEngineTypeEnum | string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'net_type'?: QueryJobsReqNetTypeEnum | string;
    private 'service_name'?: string;
    public status?: QueryJobsReqStatusEnum | string;
    public tags?: { [key: string]: string; };
    private 'instance_ids'?: Array<string>;
    private 'instance_ip'?: string;
    public constructor(curPage?: number, perPage?: number, dbUseType?: string) { 
        this['cur_page'] = curPage;
        this['per_page'] = perPage;
        this['db_use_type'] = dbUseType;
    }
    public withCurPage(curPage: number): QueryJobsReq {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): QueryJobsReq {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withDbUseType(dbUseType: QueryJobsReqDbUseTypeEnum | string): QueryJobsReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: QueryJobsReqDbUseTypeEnum | string  | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType(): QueryJobsReqDbUseTypeEnum | string | undefined {
        return this['db_use_type'];
    }
    public withEngineType(engineType: QueryJobsReqEngineTypeEnum | string): QueryJobsReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: QueryJobsReqEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): QueryJobsReqEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QueryJobsReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): QueryJobsReq {
        this['name'] = name;
        return this;
    }
    public withNetType(netType: QueryJobsReqNetTypeEnum | string): QueryJobsReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: QueryJobsReqNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): QueryJobsReqNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withServiceName(serviceName: string): QueryJobsReq {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withStatus(status: QueryJobsReqStatusEnum | string): QueryJobsReq {
        this['status'] = status;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): QueryJobsReq {
        this['tags'] = tags;
        return this;
    }
    public withInstanceIds(instanceIds: Array<string>): QueryJobsReq {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withInstanceIp(instanceIp: string): QueryJobsReq {
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
    CLOUDDATAGUARD_MYSQL = 'cloudDataGuard-mysql',
    GAUSSDBV5 = 'gaussdbv5',
    POSTGRESQL = 'postgresql',
    MYSQL_TO_KAFKA = 'mysql-to-kafka',
    TAURUS_TO_KAFKA = 'taurus-to-kafka',
    GAUSSDBV5HA_TO_KAFKA = 'gaussdbv5ha-to-kafka'
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
