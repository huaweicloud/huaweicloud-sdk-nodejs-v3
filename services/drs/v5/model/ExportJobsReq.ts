

export class ExportJobsReq {
    private 'job_type'?: ExportJobsReqJobTypeEnum | string;
    public name?: string;
    public status?: ExportJobsReqStatusEnum | string;
    private 'dbs_instance_ids'?: Array<string>;
    public description?: string;
    private 'create_at'?: string;
    private 'completed_at'?: string;
    private 'enterprise_project_id'?: string;
    private 'engine_type'?: string;
    private 'net_type'?: ExportJobsReqNetTypeEnum | string;
    private 'billing_tag'?: ExportJobsReqBillingTagEnum | string;
    private 'billing_mode'?: ExportJobsReqBillingModeEnum | string;
    private 'public_ip'?: string;
    private 'instance_ip'?: string;
    private 'inner_ip'?: string;
    private 'spec_type'?: ExportJobsReqSpecTypeEnum | string;
    public direction?: ExportJobsReqDirectionEnum | string;
    private 'task_type'?: ExportJobsReqTaskTypeEnum | string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public tag?: string;
    public constructor(jobType?: string) { 
        this['job_type'] = jobType;
    }
    public withJobType(jobType: ExportJobsReqJobTypeEnum | string): ExportJobsReq {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ExportJobsReqJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ExportJobsReqJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withName(name: string): ExportJobsReq {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ExportJobsReqStatusEnum | string): ExportJobsReq {
        this['status'] = status;
        return this;
    }
    public withDbsInstanceIds(dbsInstanceIds: Array<string>): ExportJobsReq {
        this['dbs_instance_ids'] = dbsInstanceIds;
        return this;
    }
    public set dbsInstanceIds(dbsInstanceIds: Array<string>  | undefined) {
        this['dbs_instance_ids'] = dbsInstanceIds;
    }
    public get dbsInstanceIds(): Array<string> | undefined {
        return this['dbs_instance_ids'];
    }
    public withDescription(description: string): ExportJobsReq {
        this['description'] = description;
        return this;
    }
    public withCreateAt(createAt: string): ExportJobsReq {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withCompletedAt(completedAt: string): ExportJobsReq {
        this['completed_at'] = completedAt;
        return this;
    }
    public set completedAt(completedAt: string  | undefined) {
        this['completed_at'] = completedAt;
    }
    public get completedAt(): string | undefined {
        return this['completed_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportJobsReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEngineType(engineType: string): ExportJobsReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: ExportJobsReqNetTypeEnum | string): ExportJobsReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ExportJobsReqNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): ExportJobsReqNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withBillingTag(billingTag: ExportJobsReqBillingTagEnum | string): ExportJobsReq {
        this['billing_tag'] = billingTag;
        return this;
    }
    public set billingTag(billingTag: ExportJobsReqBillingTagEnum | string  | undefined) {
        this['billing_tag'] = billingTag;
    }
    public get billingTag(): ExportJobsReqBillingTagEnum | string | undefined {
        return this['billing_tag'];
    }
    public withBillingMode(billingMode: ExportJobsReqBillingModeEnum | string): ExportJobsReq {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: ExportJobsReqBillingModeEnum | string  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): ExportJobsReqBillingModeEnum | string | undefined {
        return this['billing_mode'];
    }
    public withPublicIp(publicIp: string): ExportJobsReq {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withInstanceIp(instanceIp: string): ExportJobsReq {
        this['instance_ip'] = instanceIp;
        return this;
    }
    public set instanceIp(instanceIp: string  | undefined) {
        this['instance_ip'] = instanceIp;
    }
    public get instanceIp(): string | undefined {
        return this['instance_ip'];
    }
    public withInnerIp(innerIp: string): ExportJobsReq {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withSpecType(specType: ExportJobsReqSpecTypeEnum | string): ExportJobsReq {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: ExportJobsReqSpecTypeEnum | string  | undefined) {
        this['spec_type'] = specType;
    }
    public get specType(): ExportJobsReqSpecTypeEnum | string | undefined {
        return this['spec_type'];
    }
    public withDirection(direction: ExportJobsReqDirectionEnum | string): ExportJobsReq {
        this['direction'] = direction;
        return this;
    }
    public withTaskType(taskType: ExportJobsReqTaskTypeEnum | string): ExportJobsReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ExportJobsReqTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ExportJobsReqTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withSortKey(sortKey: string): ExportJobsReq {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ExportJobsReq {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withTag(tag: string): ExportJobsReq {
        this['tag'] = tag;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqJobTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard',
    BACKUPMIGRATION = 'backupMigration',
    SUBSCRIPTION = 'subscription'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqStatusEnum {
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
    RELEASE_CHILD_TRANSFER_COMPLETE = 'RELEASE_CHILD_TRANSFER_COMPLETE',
    SUBSCRIPTION_STARTED = 'SUBSCRIPTION_STARTED',
    SUBSCRIPTION_FAILED = 'SUBSCRIPTION_FAILED',
    Empty = '',
    REBUILD_NODE_FAILED = 'REBUILD_NODE_FAILED',
    SUCCESS = 'SUCCESS',
    TRANSFERRING = 'TRANSFERRING',
    FAILED = 'FAILED',
    PRECHECK_FAILED = 'PRECHECK FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqNetTypeEnum {
    EIP = 'eip',
    VPC = 'vpc',
    VPN = 'vpn'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqBillingTagEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqBillingModeEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqSpecTypeEnum {
    E_2XLARGE = '2xlarge',
    XLARGE = 'xlarge',
    HIGH = 'high',
    MEDIUM = 'medium',
    SMALL = 'small',
    MICRO = 'micro'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs',
    MULTIWRITE = 'multiWrite'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportJobsReqTaskTypeEnum {
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    FULL_TRANS = 'FULL_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
