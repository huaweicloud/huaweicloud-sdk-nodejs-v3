

export class TableTarget {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    public constructor(dbName?: string, tableName?: string) { 
        this['db_name'] = dbName;
        this['table_name'] = tableName;
    }
    public withDbName(dbName: string): TableTarget {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): TableTarget {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): TableTarget {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
}