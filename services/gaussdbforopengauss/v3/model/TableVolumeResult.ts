

export class TableVolumeResult {
    private 'table_size'?: string;
    public id?: string;
    private 'table_name'?: string;
    private 'table_owner'?: string;
    private 'schema_name'?: string;
    private 'database_name'?: string;
    private 'is_part_type'?: boolean;
    private 'is_hash_cluster_key'?: boolean;
    public tuples?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'average_size'?: string;
    private 'max_ratio'?: string;
    private 'min_ratio'?: string;
    private 'skew_size'?: string;
    private 'skew_ratio'?: string;
    private 'skew_stddev'?: string;
    public constructor() { 
    }
    public withTableSize(tableSize: string): TableVolumeResult {
        this['table_size'] = tableSize;
        return this;
    }
    public set tableSize(tableSize: string  | undefined) {
        this['table_size'] = tableSize;
    }
    public get tableSize(): string | undefined {
        return this['table_size'];
    }
    public withId(id: string): TableVolumeResult {
        this['id'] = id;
        return this;
    }
    public withTableName(tableName: string): TableVolumeResult {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableOwner(tableOwner: string): TableVolumeResult {
        this['table_owner'] = tableOwner;
        return this;
    }
    public set tableOwner(tableOwner: string  | undefined) {
        this['table_owner'] = tableOwner;
    }
    public get tableOwner(): string | undefined {
        return this['table_owner'];
    }
    public withSchemaName(schemaName: string): TableVolumeResult {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withDatabaseName(databaseName: string): TableVolumeResult {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withIsPartType(isPartType: boolean): TableVolumeResult {
        this['is_part_type'] = isPartType;
        return this;
    }
    public set isPartType(isPartType: boolean  | undefined) {
        this['is_part_type'] = isPartType;
    }
    public get isPartType(): boolean | undefined {
        return this['is_part_type'];
    }
    public withIsHashClusterKey(isHashClusterKey: boolean): TableVolumeResult {
        this['is_hash_cluster_key'] = isHashClusterKey;
        return this;
    }
    public set isHashClusterKey(isHashClusterKey: boolean  | undefined) {
        this['is_hash_cluster_key'] = isHashClusterKey;
    }
    public get isHashClusterKey(): boolean | undefined {
        return this['is_hash_cluster_key'];
    }
    public withTuples(tuples: string): TableVolumeResult {
        this['tuples'] = tuples;
        return this;
    }
    public withCreateTime(createTime: string): TableVolumeResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): TableVolumeResult {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAverageSize(averageSize: string): TableVolumeResult {
        this['average_size'] = averageSize;
        return this;
    }
    public set averageSize(averageSize: string  | undefined) {
        this['average_size'] = averageSize;
    }
    public get averageSize(): string | undefined {
        return this['average_size'];
    }
    public withMaxRatio(maxRatio: string): TableVolumeResult {
        this['max_ratio'] = maxRatio;
        return this;
    }
    public set maxRatio(maxRatio: string  | undefined) {
        this['max_ratio'] = maxRatio;
    }
    public get maxRatio(): string | undefined {
        return this['max_ratio'];
    }
    public withMinRatio(minRatio: string): TableVolumeResult {
        this['min_ratio'] = minRatio;
        return this;
    }
    public set minRatio(minRatio: string  | undefined) {
        this['min_ratio'] = minRatio;
    }
    public get minRatio(): string | undefined {
        return this['min_ratio'];
    }
    public withSkewSize(skewSize: string): TableVolumeResult {
        this['skew_size'] = skewSize;
        return this;
    }
    public set skewSize(skewSize: string  | undefined) {
        this['skew_size'] = skewSize;
    }
    public get skewSize(): string | undefined {
        return this['skew_size'];
    }
    public withSkewRatio(skewRatio: string): TableVolumeResult {
        this['skew_ratio'] = skewRatio;
        return this;
    }
    public set skewRatio(skewRatio: string  | undefined) {
        this['skew_ratio'] = skewRatio;
    }
    public get skewRatio(): string | undefined {
        return this['skew_ratio'];
    }
    public withSkewStddev(skewStddev: string): TableVolumeResult {
        this['skew_stddev'] = skewStddev;
        return this;
    }
    public set skewStddev(skewStddev: string  | undefined) {
        this['skew_stddev'] = skewStddev;
    }
    public get skewStddev(): string | undefined {
        return this['skew_stddev'];
    }
}