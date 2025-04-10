

export class ListTableApproversRequestBody {
    private 'instance_id'?: string;
    private 'datasource_type'?: ListTableApproversRequestBodyDatasourceTypeEnum | string;
    private 'cluster_id'?: string;
    private 'schema_name'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'expire_time'?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListTableApproversRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatasourceType(datasourceType: ListTableApproversRequestBodyDatasourceTypeEnum | string): ListTableApproversRequestBody {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListTableApproversRequestBodyDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListTableApproversRequestBodyDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withClusterId(clusterId: string): ListTableApproversRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withSchemaName(schemaName: string): ListTableApproversRequestBody {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withDatabaseName(databaseName: string): ListTableApproversRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ListTableApproversRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withExpireTime(expireTime: number): ListTableApproversRequestBody {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTableApproversRequestBodyDatasourceTypeEnum {
    HIVE = 'hive',
    DWS = 'dws',
    DLI = 'dli'
}
