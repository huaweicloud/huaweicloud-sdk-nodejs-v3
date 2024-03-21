

export class RoleActionQueryDTO {
    private 'parent_permission_set_id'?: string;
    private 'cluster_id'?: string;
    private 'datasource_type'?: RoleActionQueryDTODatasourceTypeEnum | string;
    private 'database_names'?: Array<string>;
    public schemas?: Array<string>;
    private 'table_names'?: Array<string>;
    private 'column_names'?: Array<string>;
    public constructor(parentPermissionSetId?: string, clusterId?: string, datasourceType?: string, databaseNames?: Array<string>) { 
        this['parent_permission_set_id'] = parentPermissionSetId;
        this['cluster_id'] = clusterId;
        this['datasource_type'] = datasourceType;
        this['database_names'] = databaseNames;
    }
    public withParentPermissionSetId(parentPermissionSetId: string): RoleActionQueryDTO {
        this['parent_permission_set_id'] = parentPermissionSetId;
        return this;
    }
    public set parentPermissionSetId(parentPermissionSetId: string  | undefined) {
        this['parent_permission_set_id'] = parentPermissionSetId;
    }
    public get parentPermissionSetId(): string | undefined {
        return this['parent_permission_set_id'];
    }
    public withClusterId(clusterId: string): RoleActionQueryDTO {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatasourceType(datasourceType: RoleActionQueryDTODatasourceTypeEnum | string): RoleActionQueryDTO {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: RoleActionQueryDTODatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): RoleActionQueryDTODatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabaseNames(databaseNames: Array<string>): RoleActionQueryDTO {
        this['database_names'] = databaseNames;
        return this;
    }
    public set databaseNames(databaseNames: Array<string>  | undefined) {
        this['database_names'] = databaseNames;
    }
    public get databaseNames(): Array<string> | undefined {
        return this['database_names'];
    }
    public withSchemas(schemas: Array<string>): RoleActionQueryDTO {
        this['schemas'] = schemas;
        return this;
    }
    public withTableNames(tableNames: Array<string>): RoleActionQueryDTO {
        this['table_names'] = tableNames;
        return this;
    }
    public set tableNames(tableNames: Array<string>  | undefined) {
        this['table_names'] = tableNames;
    }
    public get tableNames(): Array<string> | undefined {
        return this['table_names'];
    }
    public withColumnNames(columnNames: Array<string>): RoleActionQueryDTO {
        this['column_names'] = columnNames;
        return this;
    }
    public set columnNames(columnNames: Array<string>  | undefined) {
        this['column_names'] = columnNames;
    }
    public get columnNames(): Array<string> | undefined {
        return this['column_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RoleActionQueryDTODatasourceTypeEnum {
    HIVE = 'HIVE'
}
