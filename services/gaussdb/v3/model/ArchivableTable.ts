

export class ArchivableTable {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    public restricted?: boolean;
    public constructor(dbName?: string, tableName?: string, restricted?: boolean) { 
        this['db_name'] = dbName;
        this['table_name'] = tableName;
        this['restricted'] = restricted;
    }
    public withDbName(dbName: string): ArchivableTable {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): ArchivableTable {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): ArchivableTable {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withRestricted(restricted: boolean): ArchivableTable {
        this['restricted'] = restricted;
        return this;
    }
}