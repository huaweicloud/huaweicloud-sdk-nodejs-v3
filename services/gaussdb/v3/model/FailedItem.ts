

export class FailedItem {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    public reason?: string;
    public constructor(dbName?: string, tableName?: string, reason?: string) { 
        this['db_name'] = dbName;
        this['table_name'] = tableName;
        this['reason'] = reason;
    }
    public withDbName(dbName: string): FailedItem {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): FailedItem {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): FailedItem {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withReason(reason: string): FailedItem {
        this['reason'] = reason;
        return this;
    }
}