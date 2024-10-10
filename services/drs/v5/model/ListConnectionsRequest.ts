

export class ListConnectionsRequest {
    private 'X-Language'?: string;
    private 'connection_id'?: string;
    private 'db_type'?: ListConnectionsRequestDbTypeEnum | string;
    public name?: string;
    private 'inst_id'?: string;
    public ip?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'fetch_all'?: boolean;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListConnectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConnectionId(connectionId: string): ListConnectionsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDbType(dbType: ListConnectionsRequestDbTypeEnum | string): ListConnectionsRequest {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: ListConnectionsRequestDbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): ListConnectionsRequestDbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withName(name: string): ListConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withInstId(instId: string): ListConnectionsRequest {
        this['inst_id'] = instId;
        return this;
    }
    public set instId(instId: string  | undefined) {
        this['inst_id'] = instId;
    }
    public get instId(): string | undefined {
        return this['inst_id'];
    }
    public withIp(ip: string): ListConnectionsRequest {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): ListConnectionsRequest {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ListConnectionsRequest {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListConnectionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withFetchAll(fetchAll: boolean): ListConnectionsRequest {
        this['fetch_all'] = fetchAll;
        return this;
    }
    public set fetchAll(fetchAll: boolean  | undefined) {
        this['fetch_all'] = fetchAll;
    }
    public get fetchAll(): boolean | undefined {
        return this['fetch_all'];
    }
    public withSortKey(sortKey: string): ListConnectionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListConnectionsRequest {
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
export enum ListConnectionsRequestDbTypeEnum {
    MYSQL = 'mysql',
    ORACLE = 'oracle',
    POSTGRESQL = 'postgresql',
    MONGODB = 'mongodb'
}
