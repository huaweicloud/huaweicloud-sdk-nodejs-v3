

export class ListArchivableTablesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, dbName?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
    }
    public withXLanguage(xLanguage: string): ListArchivableTablesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListArchivableTablesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListArchivableTablesRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): ListArchivableTablesRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): ListArchivableTablesRequest {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withOffset(offset: number): ListArchivableTablesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListArchivableTablesRequest {
        this['limit'] = limit;
        return this;
    }
}