

export class ColdTableMetaInfo {
    private 'space_id'?: string;
    private 'dd_id'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    private 'expiration_time'?: number;
    private 'retained_time'?: number;
    private 'data_size'?: number;
    public constructor() { 
    }
    public withSpaceId(spaceId: string): ColdTableMetaInfo {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withDdId(ddId: string): ColdTableMetaInfo {
        this['dd_id'] = ddId;
        return this;
    }
    public set ddId(ddId: string  | undefined) {
        this['dd_id'] = ddId;
    }
    public get ddId(): string | undefined {
        return this['dd_id'];
    }
    public withDatabaseName(databaseName: string): ColdTableMetaInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ColdTableMetaInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): ColdTableMetaInfo {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withExpirationTime(expirationTime: number): ColdTableMetaInfo {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): number | undefined {
        return this['expiration_time'];
    }
    public withRetainedTime(retainedTime: number): ColdTableMetaInfo {
        this['retained_time'] = retainedTime;
        return this;
    }
    public set retainedTime(retainedTime: number  | undefined) {
        this['retained_time'] = retainedTime;
    }
    public get retainedTime(): number | undefined {
        return this['retained_time'];
    }
    public withDataSize(dataSize: number): ColdTableMetaInfo {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
}