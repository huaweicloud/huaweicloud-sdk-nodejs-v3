

export class ColdTableTask {
    private 'db_name'?: string;
    private 'table_name'?: string;
    private 'partition_name'?: string;
    public status?: string;
    private 'target_storage'?: string;
    public percent?: number;
    private 'total_cnt'?: number;
    private 'space_id'?: string;
    public version?: string;
    public constructor(dbName?: string, tableName?: string, status?: string) { 
        this['db_name'] = dbName;
        this['table_name'] = tableName;
        this['status'] = status;
    }
    public withDbName(dbName: string): ColdTableTask {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): ColdTableTask {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPartitionName(partitionName: string): ColdTableTask {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withStatus(status: string): ColdTableTask {
        this['status'] = status;
        return this;
    }
    public withTargetStorage(targetStorage: string): ColdTableTask {
        this['target_storage'] = targetStorage;
        return this;
    }
    public set targetStorage(targetStorage: string  | undefined) {
        this['target_storage'] = targetStorage;
    }
    public get targetStorage(): string | undefined {
        return this['target_storage'];
    }
    public withPercent(percent: number): ColdTableTask {
        this['percent'] = percent;
        return this;
    }
    public withTotalCnt(totalCnt: number): ColdTableTask {
        this['total_cnt'] = totalCnt;
        return this;
    }
    public set totalCnt(totalCnt: number  | undefined) {
        this['total_cnt'] = totalCnt;
    }
    public get totalCnt(): number | undefined {
        return this['total_cnt'];
    }
    public withSpaceId(spaceId: string): ColdTableTask {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withVersion(version: string): ColdTableTask {
        this['version'] = version;
        return this;
    }
}