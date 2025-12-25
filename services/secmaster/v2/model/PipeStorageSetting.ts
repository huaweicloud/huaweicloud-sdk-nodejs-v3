

export class PipeStorageSetting {
    private 'streaming_bandwidth'?: number;
    private 'streaming_dataspace_id'?: string;
    private 'index_storage_period'?: number;
    private 'index_storage_size'?: number;
    private 'index_shards'?: number;
    private 'data_transformation_cu'?: number;
    private 'lake_storage_period'?: number;
    public constructor(streamingDataspaceId?: string) { 
        this['streaming_dataspace_id'] = streamingDataspaceId;
    }
    public withStreamingBandwidth(streamingBandwidth: number): PipeStorageSetting {
        this['streaming_bandwidth'] = streamingBandwidth;
        return this;
    }
    public set streamingBandwidth(streamingBandwidth: number  | undefined) {
        this['streaming_bandwidth'] = streamingBandwidth;
    }
    public get streamingBandwidth(): number | undefined {
        return this['streaming_bandwidth'];
    }
    public withStreamingDataspaceId(streamingDataspaceId: string): PipeStorageSetting {
        this['streaming_dataspace_id'] = streamingDataspaceId;
        return this;
    }
    public set streamingDataspaceId(streamingDataspaceId: string  | undefined) {
        this['streaming_dataspace_id'] = streamingDataspaceId;
    }
    public get streamingDataspaceId(): string | undefined {
        return this['streaming_dataspace_id'];
    }
    public withIndexStoragePeriod(indexStoragePeriod: number): PipeStorageSetting {
        this['index_storage_period'] = indexStoragePeriod;
        return this;
    }
    public set indexStoragePeriod(indexStoragePeriod: number  | undefined) {
        this['index_storage_period'] = indexStoragePeriod;
    }
    public get indexStoragePeriod(): number | undefined {
        return this['index_storage_period'];
    }
    public withIndexStorageSize(indexStorageSize: number): PipeStorageSetting {
        this['index_storage_size'] = indexStorageSize;
        return this;
    }
    public set indexStorageSize(indexStorageSize: number  | undefined) {
        this['index_storage_size'] = indexStorageSize;
    }
    public get indexStorageSize(): number | undefined {
        return this['index_storage_size'];
    }
    public withIndexShards(indexShards: number): PipeStorageSetting {
        this['index_shards'] = indexShards;
        return this;
    }
    public set indexShards(indexShards: number  | undefined) {
        this['index_shards'] = indexShards;
    }
    public get indexShards(): number | undefined {
        return this['index_shards'];
    }
    public withDataTransformationCu(dataTransformationCu: number): PipeStorageSetting {
        this['data_transformation_cu'] = dataTransformationCu;
        return this;
    }
    public set dataTransformationCu(dataTransformationCu: number  | undefined) {
        this['data_transformation_cu'] = dataTransformationCu;
    }
    public get dataTransformationCu(): number | undefined {
        return this['data_transformation_cu'];
    }
    public withLakeStoragePeriod(lakeStoragePeriod: number): PipeStorageSetting {
        this['lake_storage_period'] = lakeStoragePeriod;
        return this;
    }
    public set lakeStoragePeriod(lakeStoragePeriod: number  | undefined) {
        this['lake_storage_period'] = lakeStoragePeriod;
    }
    public get lakeStoragePeriod(): number | undefined {
        return this['lake_storage_period'];
    }
}