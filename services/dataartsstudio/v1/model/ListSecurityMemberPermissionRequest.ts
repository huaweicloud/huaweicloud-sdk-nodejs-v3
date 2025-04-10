

export class ListSecurityMemberPermissionRequest {
    private 'user_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'datasource_type'?: ListSecurityMemberPermissionRequestDatasourceTypeEnum | string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'account_type'?: ListSecurityMemberPermissionRequestAccountTypeEnum | string;
    private 'expire_status'?: ListSecurityMemberPermissionRequestExpireStatusEnum | string;
    public workspace?: string;
    private 'order_by'?: ListSecurityMemberPermissionRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withUserName(userName: string): ListSecurityMemberPermissionRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withLimit(limit: number): ListSecurityMemberPermissionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityMemberPermissionRequest {
        this['offset'] = offset;
        return this;
    }
    public withDatasourceType(datasourceType: ListSecurityMemberPermissionRequestDatasourceTypeEnum | string): ListSecurityMemberPermissionRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityMemberPermissionRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityMemberPermissionRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabaseName(databaseName: string): ListSecurityMemberPermissionRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ListSecurityMemberPermissionRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withAccountType(accountType: ListSecurityMemberPermissionRequestAccountTypeEnum | string): ListSecurityMemberPermissionRequest {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: ListSecurityMemberPermissionRequestAccountTypeEnum | string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): ListSecurityMemberPermissionRequestAccountTypeEnum | string | undefined {
        return this['account_type'];
    }
    public withExpireStatus(expireStatus: ListSecurityMemberPermissionRequestExpireStatusEnum | string): ListSecurityMemberPermissionRequest {
        this['expire_status'] = expireStatus;
        return this;
    }
    public set expireStatus(expireStatus: ListSecurityMemberPermissionRequestExpireStatusEnum | string  | undefined) {
        this['expire_status'] = expireStatus;
    }
    public get expireStatus(): ListSecurityMemberPermissionRequestExpireStatusEnum | string | undefined {
        return this['expire_status'];
    }
    public withWorkspace(workspace: string): ListSecurityMemberPermissionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withOrderBy(orderBy: ListSecurityMemberPermissionRequestOrderByEnum | string): ListSecurityMemberPermissionRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityMemberPermissionRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityMemberPermissionRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityMemberPermissionRequest {
        this['order_by_asc'] = orderByAsc;
        return this;
    }
    public set orderByAsc(orderByAsc: boolean  | undefined) {
        this['order_by_asc'] = orderByAsc;
    }
    public get orderByAsc(): boolean | undefined {
        return this['order_by_asc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberPermissionRequestDatasourceTypeEnum {
    HIVE = 'HIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberPermissionRequestAccountTypeEnum {
    SELF_ACCOUNT = 'SELF_ACCOUNT',
    WORKSPACE_ACCOUNT = 'WORKSPACE_ACCOUNT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberPermissionRequestExpireStatusEnum {
    REVOKE_FAILED = 'REVOKE_FAILED',
    TO_BE_REVOKE = 'TO_BE_REVOKE',
    INACTIVE = 'INACTIVE',
    PERMANENTLY_ACTIVE = 'PERMANENTLY_ACTIVE',
    ACTIVE = 'ACTIVE',
    EXPIRE_SOON = 'EXPIRE_SOON'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberPermissionRequestOrderByEnum {
    EXPIRE_TIME = 'EXPIRE_TIME'
}
