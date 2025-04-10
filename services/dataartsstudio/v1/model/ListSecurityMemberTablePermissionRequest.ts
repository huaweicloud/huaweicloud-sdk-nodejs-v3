

export class ListSecurityMemberTablePermissionRequest {
    private 'user_id'?: string;
    public feature?: ListSecurityMemberTablePermissionRequestFeatureEnum | string;
    public limit?: number;
    public offset?: number;
    private 'datasource_type'?: ListSecurityMemberTablePermissionRequestDatasourceTypeEnum | string;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'fuzzy_table_name'?: string;
    private 'workspace_ids'?: Array<string>;
    public workspace?: string;
    public constructor(userId?: string, workspace?: string) { 
        this['user_id'] = userId;
        this['workspace'] = workspace;
    }
    public withUserId(userId: string): ListSecurityMemberTablePermissionRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withFeature(feature: ListSecurityMemberTablePermissionRequestFeatureEnum | string): ListSecurityMemberTablePermissionRequest {
        this['feature'] = feature;
        return this;
    }
    public withLimit(limit: number): ListSecurityMemberTablePermissionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityMemberTablePermissionRequest {
        this['offset'] = offset;
        return this;
    }
    public withDatasourceType(datasourceType: ListSecurityMemberTablePermissionRequestDatasourceTypeEnum | string): ListSecurityMemberTablePermissionRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityMemberTablePermissionRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityMemberTablePermissionRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withClusterName(clusterName: string): ListSecurityMemberTablePermissionRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): ListSecurityMemberTablePermissionRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ListSecurityMemberTablePermissionRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListSecurityMemberTablePermissionRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withFuzzyTableName(fuzzyTableName: string): ListSecurityMemberTablePermissionRequest {
        this['fuzzy_table_name'] = fuzzyTableName;
        return this;
    }
    public set fuzzyTableName(fuzzyTableName: string  | undefined) {
        this['fuzzy_table_name'] = fuzzyTableName;
    }
    public get fuzzyTableName(): string | undefined {
        return this['fuzzy_table_name'];
    }
    public withWorkspaceIds(workspaceIds: Array<string>): ListSecurityMemberTablePermissionRequest {
        this['workspace_ids'] = workspaceIds;
        return this;
    }
    public set workspaceIds(workspaceIds: Array<string>  | undefined) {
        this['workspace_ids'] = workspaceIds;
    }
    public get workspaceIds(): Array<string> | undefined {
        return this['workspace_ids'];
    }
    public withWorkspace(workspace: string): ListSecurityMemberTablePermissionRequest {
        this['workspace'] = workspace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberTablePermissionRequestFeatureEnum {
    PERMISSION_LIST = 'PERMISSION_LIST'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityMemberTablePermissionRequestDatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
