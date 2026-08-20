

export class ListSecurityMemberPermissionsByUserIdRequest {
    private 'user_id'?: string;
    private 'user_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'datasource_type'?: ListSecurityMemberPermissionsByUserIdRequestDatasourceTypeEnum | string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'account_type'?: ListSecurityMemberPermissionsByUserIdRequestAccountTypeEnum | string;
    private 'expire_status'?: ListSecurityMemberPermissionsByUserIdRequestExpireStatusEnum | string;
    private 'start_expire_time'?: number;
    private 'end_expire_time'?: number;
    public workspace?: string;
    private 'order_by'?: ListSecurityMemberPermissionsByUserIdRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public constructor(userId?: string, workspace?: string) { 
        this['user_id'] = userId;
        this['workspace'] = workspace;
    }
    public withUserId(userId: string): ListSecurityMemberPermissionsByUserIdRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ListSecurityMemberPermissionsByUserIdRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withLimit(limit: number): ListSecurityMemberPermissionsByUserIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityMemberPermissionsByUserIdRequest {
        this['offset'] = offset;
        return this;
    }
    public withDatasourceType(datasourceType: ListSecurityMemberPermissionsByUserIdRequestDatasourceTypeEnum | string): ListSecurityMemberPermissionsByUserIdRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityMemberPermissionsByUserIdRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityMemberPermissionsByUserIdRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabaseName(databaseName: string): ListSecurityMemberPermissionsByUserIdRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ListSecurityMemberPermissionsByUserIdRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListSecurityMemberPermissionsByUserIdRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withAccountType(accountType: ListSecurityMemberPermissionsByUserIdRequestAccountTypeEnum | string): ListSecurityMemberPermissionsByUserIdRequest {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: ListSecurityMemberPermissionsByUserIdRequestAccountTypeEnum | string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): ListSecurityMemberPermissionsByUserIdRequestAccountTypeEnum | string | undefined {
        return this['account_type'];
    }
    public withExpireStatus(expireStatus: ListSecurityMemberPermissionsByUserIdRequestExpireStatusEnum | string): ListSecurityMemberPermissionsByUserIdRequest {
        this['expire_status'] = expireStatus;
        return this;
    }
    public set expireStatus(expireStatus: ListSecurityMemberPermissionsByUserIdRequestExpireStatusEnum | string  | undefined) {
        this['expire_status'] = expireStatus;
    }
    public get expireStatus(): ListSecurityMemberPermissionsByUserIdRequestExpireStatusEnum | string | undefined {
        return this['expire_status'];
    }
    public withStartExpireTime(startExpireTime: number): ListSecurityMemberPermissionsByUserIdRequest {
        this['start_expire_time'] = startExpireTime;
        return this;
    }
    public set startExpireTime(startExpireTime: number  | undefined) {
        this['start_expire_time'] = startExpireTime;
    }
    public get startExpireTime(): number | undefined {
        return this['start_expire_time'];
    }
    public withEndExpireTime(endExpireTime: number): ListSecurityMemberPermissionsByUserIdRequest {
        this['end_expire_time'] = endExpireTime;
        return this;
    }
    public set endExpireTime(endExpireTime: number  | undefined) {
        this['end_expire_time'] = endExpireTime;
    }
    public get endExpireTime(): number | undefined {
        return this['end_expire_time'];
    }
    public withWorkspace(workspace: string): ListSecurityMemberPermissionsByUserIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withOrderBy(orderBy: ListSecurityMemberPermissionsByUserIdRequestOrderByEnum | string): ListSecurityMemberPermissionsByUserIdRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityMemberPermissionsByUserIdRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityMemberPermissionsByUserIdRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityMemberPermissionsByUserIdRequest {
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
export enum ListSecurityMemberPermissionsByUserIdRequestDatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberPermissionsByUserIdRequestAccountTypeEnum {
    SELF_ACCOUNT = 'SELF_ACCOUNT',
    WORKSPACE_ACCOUNT = 'WORKSPACE_ACCOUNT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberPermissionsByUserIdRequestExpireStatusEnum {
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
export enum ListSecurityMemberPermissionsByUserIdRequestOrderByEnum {
    EXPIRE_TIME = 'EXPIRE_TIME'
}
