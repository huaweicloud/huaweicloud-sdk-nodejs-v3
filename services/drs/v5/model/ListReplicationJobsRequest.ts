

export class ListReplicationJobsRequest {
    private 'X-Language'?: ListReplicationJobsRequestXLanguageEnum | string;
    public name?: string;
    public status?: ListReplicationJobsRequestStatusEnum | string;
    private 'dbs_instance_ids'?: Array<string>;
    public description?: string;
    private 'create_at'?: string;
    private 'completed_at'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListReplicationJobsRequestXLanguageEnum | string): ListReplicationJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListReplicationJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListReplicationJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withName(name: string): ListReplicationJobsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListReplicationJobsRequestStatusEnum | string): ListReplicationJobsRequest {
        this['status'] = status;
        return this;
    }
    public withDbsInstanceIds(dbsInstanceIds: Array<string>): ListReplicationJobsRequest {
        this['dbs_instance_ids'] = dbsInstanceIds;
        return this;
    }
    public set dbsInstanceIds(dbsInstanceIds: Array<string>  | undefined) {
        this['dbs_instance_ids'] = dbsInstanceIds;
    }
    public get dbsInstanceIds(): Array<string> | undefined {
        return this['dbs_instance_ids'];
    }
    public withDescription(description: string): ListReplicationJobsRequest {
        this['description'] = description;
        return this;
    }
    public withCreateAt(createAt: string): ListReplicationJobsRequest {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withCompletedAt(completedAt: string): ListReplicationJobsRequest {
        this['completed_at'] = completedAt;
        return this;
    }
    public set completedAt(completedAt: string  | undefined) {
        this['completed_at'] = completedAt;
    }
    public get completedAt(): string | undefined {
        return this['completed_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListReplicationJobsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: string): ListReplicationJobsRequest {
        this['tags'] = tags;
        return this;
    }
    public withLimit(limit: number): ListReplicationJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListReplicationJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListReplicationJobsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListReplicationJobsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListReplicationJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ListReplicationJobsRequestStatusEnum {
    TRANSFERRING = 'TRANSFERRING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    PRECHECK_FAILED = 'PRECHECK FAILED'
}
