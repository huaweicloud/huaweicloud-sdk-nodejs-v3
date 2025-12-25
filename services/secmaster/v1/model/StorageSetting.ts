

export class StorageSetting {
    private 'data_transformation_cu'?: number;
    private 'index_replicas'?: number;
    private 'index_shards'?: number;
    private 'index_storage_period'?: number;
    private 'index_storage_size'?: number;
    private 'lake_storage_period'?: number;
    private 'streaming_bandwidth'?: number;
    private 'streaming_dataspace_id'?: string;
    private 'streaming_partition'?: number;
    private 'streaming_retention_size'?: number;
    private 'streaming_retention_time'?: number;
    public constructor() { 
    }
    public withDataTransformationCu(dataTransformationCu: number): StorageSetting {
        this['data_transformation_cu'] = dataTransformationCu;
        return this;
    }
    public set dataTransformationCu(dataTransformationCu: number  | undefined) {
        this['data_transformation_cu'] = dataTransformationCu;
    }
    public get dataTransformationCu(): number | undefined {
        return this['data_transformation_cu'];
    }
    public withIndexReplicas(indexReplicas: number): StorageSetting {
        this['index_replicas'] = indexReplicas;
        return this;
    }
    public set indexReplicas(indexReplicas: number  | undefined) {
        this['index_replicas'] = indexReplicas;
    }
    public get indexReplicas(): number | undefined {
        return this['index_replicas'];
    }
    public withIndexShards(indexShards: number): StorageSetting {
        this['index_shards'] = indexShards;
        return this;
    }
    public set indexShards(indexShards: number  | undefined) {
        this['index_shards'] = indexShards;
    }
    public get indexShards(): number | undefined {
        return this['index_shards'];
    }
    public withIndexStoragePeriod(indexStoragePeriod: number): StorageSetting {
        this['index_storage_period'] = indexStoragePeriod;
        return this;
    }
    public set indexStoragePeriod(indexStoragePeriod: number  | undefined) {
        this['index_storage_period'] = indexStoragePeriod;
    }
    public get indexStoragePeriod(): number | undefined {
        return this['index_storage_period'];
    }
    public withIndexStorageSize(indexStorageSize: number): StorageSetting {
        this['index_storage_size'] = indexStorageSize;
        return this;
    }
    public set indexStorageSize(indexStorageSize: number  | undefined) {
        this['index_storage_size'] = indexStorageSize;
    }
    public get indexStorageSize(): number | undefined {
        return this['index_storage_size'];
    }
    public withLakeStoragePeriod(lakeStoragePeriod: number): StorageSetting {
        this['lake_storage_period'] = lakeStoragePeriod;
        return this;
    }
    public set lakeStoragePeriod(lakeStoragePeriod: number  | undefined) {
        this['lake_storage_period'] = lakeStoragePeriod;
    }
    public get lakeStoragePeriod(): number | undefined {
        return this['lake_storage_period'];
    }
    public withStreamingBandwidth(streamingBandwidth: number): StorageSetting {
        this['streaming_bandwidth'] = streamingBandwidth;
        return this;
    }
    public set streamingBandwidth(streamingBandwidth: number  | undefined) {
        this['streaming_bandwidth'] = streamingBandwidth;
    }
    public get streamingBandwidth(): number | undefined {
        return this['streaming_bandwidth'];
    }
    public withStreamingDataspaceId(streamingDataspaceId: string): StorageSetting {
        this['streaming_dataspace_id'] = streamingDataspaceId;
        return this;
    }
    public set streamingDataspaceId(streamingDataspaceId: string  | undefined) {
        this['streaming_dataspace_id'] = streamingDataspaceId;
    }
    public get streamingDataspaceId(): string | undefined {
        return this['streaming_dataspace_id'];
    }
    public withStreamingPartition(streamingPartition: number): StorageSetting {
        this['streaming_partition'] = streamingPartition;
        return this;
    }
    public set streamingPartition(streamingPartition: number  | undefined) {
        this['streaming_partition'] = streamingPartition;
    }
    public get streamingPartition(): number | undefined {
        return this['streaming_partition'];
    }
    public withStreamingRetentionSize(streamingRetentionSize: number): StorageSetting {
        this['streaming_retention_size'] = streamingRetentionSize;
        return this;
    }
    public set streamingRetentionSize(streamingRetentionSize: number  | undefined) {
        this['streaming_retention_size'] = streamingRetentionSize;
    }
    public get streamingRetentionSize(): number | undefined {
        return this['streaming_retention_size'];
    }
    public withStreamingRetentionTime(streamingRetentionTime: number): StorageSetting {
        this['streaming_retention_time'] = streamingRetentionTime;
        return this;
    }
    public set streamingRetentionTime(streamingRetentionTime: number  | undefined) {
        this['streaming_retention_time'] = streamingRetentionTime;
    }
    public get streamingRetentionTime(): number | undefined {
        return this['streaming_retention_time'];
    }
}