

export class ColdTableWaitingTask {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    public status?: string;
    private 'create_at'?: number;
    public constructor() { 
    }
    public withDbName(dbName: string): ColdTableWaitingTask {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): ColdTableWaitingTask {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): ColdTableWaitingTask {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withStatus(status: string): ColdTableWaitingTask {
        this['status'] = status;
        return this;
    }
    public withCreateAt(createAt: number): ColdTableWaitingTask {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
}