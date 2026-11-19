

export class CancelColdTableWaitingTask {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    public type?: string;
    public constructor(dbName?: string, tableName?: string, type?: string) { 
        this['db_name'] = dbName;
        this['table_name'] = tableName;
        this['type'] = type;
    }
    public withDbName(dbName: string): CancelColdTableWaitingTask {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): CancelColdTableWaitingTask {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): CancelColdTableWaitingTask {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withType(type: string): CancelColdTableWaitingTask {
        this['type'] = type;
        return this;
    }
}