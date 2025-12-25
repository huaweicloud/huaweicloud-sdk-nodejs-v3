

export class IsapTableStorageSettingDto {
    private 'application_index'?: string;
    private 'application_topic'?: string;
    private 'application_data_class_id'?: string;
    private 'streaming_bandwidth'?: number;
    private 'streaming_partition'?: number;
    private 'streaming_dataspace_id'?: string;
    private 'index_storage_period'?: number;
    private 'index_storage_size'?: number;
    private 'index_shards'?: number;
    private 'lake_storage_period'?: number;
    private 'lake_partition_setting'?: IsapTableStorageSettingDtoLakePartitionSettingEnum | string;
    public constructor() { 
    }
    public withApplicationIndex(applicationIndex: string): IsapTableStorageSettingDto {
        this['application_index'] = applicationIndex;
        return this;
    }
    public set applicationIndex(applicationIndex: string  | undefined) {
        this['application_index'] = applicationIndex;
    }
    public get applicationIndex(): string | undefined {
        return this['application_index'];
    }
    public withApplicationTopic(applicationTopic: string): IsapTableStorageSettingDto {
        this['application_topic'] = applicationTopic;
        return this;
    }
    public set applicationTopic(applicationTopic: string  | undefined) {
        this['application_topic'] = applicationTopic;
    }
    public get applicationTopic(): string | undefined {
        return this['application_topic'];
    }
    public withApplicationDataClassId(applicationDataClassId: string): IsapTableStorageSettingDto {
        this['application_data_class_id'] = applicationDataClassId;
        return this;
    }
    public set applicationDataClassId(applicationDataClassId: string  | undefined) {
        this['application_data_class_id'] = applicationDataClassId;
    }
    public get applicationDataClassId(): string | undefined {
        return this['application_data_class_id'];
    }
    public withStreamingBandwidth(streamingBandwidth: number): IsapTableStorageSettingDto {
        this['streaming_bandwidth'] = streamingBandwidth;
        return this;
    }
    public set streamingBandwidth(streamingBandwidth: number  | undefined) {
        this['streaming_bandwidth'] = streamingBandwidth;
    }
    public get streamingBandwidth(): number | undefined {
        return this['streaming_bandwidth'];
    }
    public withStreamingPartition(streamingPartition: number): IsapTableStorageSettingDto {
        this['streaming_partition'] = streamingPartition;
        return this;
    }
    public set streamingPartition(streamingPartition: number  | undefined) {
        this['streaming_partition'] = streamingPartition;
    }
    public get streamingPartition(): number | undefined {
        return this['streaming_partition'];
    }
    public withStreamingDataspaceId(streamingDataspaceId: string): IsapTableStorageSettingDto {
        this['streaming_dataspace_id'] = streamingDataspaceId;
        return this;
    }
    public set streamingDataspaceId(streamingDataspaceId: string  | undefined) {
        this['streaming_dataspace_id'] = streamingDataspaceId;
    }
    public get streamingDataspaceId(): string | undefined {
        return this['streaming_dataspace_id'];
    }
    public withIndexStoragePeriod(indexStoragePeriod: number): IsapTableStorageSettingDto {
        this['index_storage_period'] = indexStoragePeriod;
        return this;
    }
    public set indexStoragePeriod(indexStoragePeriod: number  | undefined) {
        this['index_storage_period'] = indexStoragePeriod;
    }
    public get indexStoragePeriod(): number | undefined {
        return this['index_storage_period'];
    }
    public withIndexStorageSize(indexStorageSize: number): IsapTableStorageSettingDto {
        this['index_storage_size'] = indexStorageSize;
        return this;
    }
    public set indexStorageSize(indexStorageSize: number  | undefined) {
        this['index_storage_size'] = indexStorageSize;
    }
    public get indexStorageSize(): number | undefined {
        return this['index_storage_size'];
    }
    public withIndexShards(indexShards: number): IsapTableStorageSettingDto {
        this['index_shards'] = indexShards;
        return this;
    }
    public set indexShards(indexShards: number  | undefined) {
        this['index_shards'] = indexShards;
    }
    public get indexShards(): number | undefined {
        return this['index_shards'];
    }
    public withLakeStoragePeriod(lakeStoragePeriod: number): IsapTableStorageSettingDto {
        this['lake_storage_period'] = lakeStoragePeriod;
        return this;
    }
    public set lakeStoragePeriod(lakeStoragePeriod: number  | undefined) {
        this['lake_storage_period'] = lakeStoragePeriod;
    }
    public get lakeStoragePeriod(): number | undefined {
        return this['lake_storage_period'];
    }
    public withLakePartitionSetting(lakePartitionSetting: IsapTableStorageSettingDtoLakePartitionSettingEnum | string): IsapTableStorageSettingDto {
        this['lake_partition_setting'] = lakePartitionSetting;
        return this;
    }
    public set lakePartitionSetting(lakePartitionSetting: IsapTableStorageSettingDtoLakePartitionSettingEnum | string  | undefined) {
        this['lake_partition_setting'] = lakePartitionSetting;
    }
    public get lakePartitionSetting(): IsapTableStorageSettingDtoLakePartitionSettingEnum | string | undefined {
        return this['lake_partition_setting'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IsapTableStorageSettingDtoLakePartitionSettingEnum {
    DAY = 'DAY',
    HOUR = 'HOUR',
    MINUTE10 = 'MINUTE10'
}
