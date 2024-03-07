

export class SmartConnectTaskRespSinkConfig {
    private 'redis_address'?: string;
    private 'redis_type'?: string;
    private 'dcs_instance_id'?: string;
    private 'target_db'?: number;
    private 'consumer_strategy'?: string;
    private 'destination_file_type'?: string;
    private 'deliver_time_interval'?: number;
    private 'obs_bucket_name'?: string;
    private 'obs_path'?: string;
    private 'partition_format'?: string;
    private 'record_delimiter'?: string;
    private 'store_keys'?: boolean;
    private 'obs_part_size'?: number;
    private 'flush_size'?: number;
    public timezone?: string;
    private 'connector_class'?: string;
    private 'storage_class'?: string;
    private 'format_class'?: string;
    private 'schema_generator_class'?: string;
    private 'partitioner_class'?: string;
    private 'value_converter'?: string;
    private 'key_converter'?: string;
    private 'kv_delimiter'?: string;
    public constructor() { 
    }
    public withRedisAddress(redisAddress: string): SmartConnectTaskRespSinkConfig {
        this['redis_address'] = redisAddress;
        return this;
    }
    public set redisAddress(redisAddress: string  | undefined) {
        this['redis_address'] = redisAddress;
    }
    public get redisAddress(): string | undefined {
        return this['redis_address'];
    }
    public withRedisType(redisType: string): SmartConnectTaskRespSinkConfig {
        this['redis_type'] = redisType;
        return this;
    }
    public set redisType(redisType: string  | undefined) {
        this['redis_type'] = redisType;
    }
    public get redisType(): string | undefined {
        return this['redis_type'];
    }
    public withDcsInstanceId(dcsInstanceId: string): SmartConnectTaskRespSinkConfig {
        this['dcs_instance_id'] = dcsInstanceId;
        return this;
    }
    public set dcsInstanceId(dcsInstanceId: string  | undefined) {
        this['dcs_instance_id'] = dcsInstanceId;
    }
    public get dcsInstanceId(): string | undefined {
        return this['dcs_instance_id'];
    }
    public withTargetDb(targetDb: number): SmartConnectTaskRespSinkConfig {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: number  | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb(): number | undefined {
        return this['target_db'];
    }
    public withConsumerStrategy(consumerStrategy: string): SmartConnectTaskRespSinkConfig {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: string  | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy(): string | undefined {
        return this['consumer_strategy'];
    }
    public withDestinationFileType(destinationFileType: string): SmartConnectTaskRespSinkConfig {
        this['destination_file_type'] = destinationFileType;
        return this;
    }
    public set destinationFileType(destinationFileType: string  | undefined) {
        this['destination_file_type'] = destinationFileType;
    }
    public get destinationFileType(): string | undefined {
        return this['destination_file_type'];
    }
    public withDeliverTimeInterval(deliverTimeInterval: number): SmartConnectTaskRespSinkConfig {
        this['deliver_time_interval'] = deliverTimeInterval;
        return this;
    }
    public set deliverTimeInterval(deliverTimeInterval: number  | undefined) {
        this['deliver_time_interval'] = deliverTimeInterval;
    }
    public get deliverTimeInterval(): number | undefined {
        return this['deliver_time_interval'];
    }
    public withObsBucketName(obsBucketName: string): SmartConnectTaskRespSinkConfig {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsPath(obsPath: string): SmartConnectTaskRespSinkConfig {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string  | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath(): string | undefined {
        return this['obs_path'];
    }
    public withPartitionFormat(partitionFormat: string): SmartConnectTaskRespSinkConfig {
        this['partition_format'] = partitionFormat;
        return this;
    }
    public set partitionFormat(partitionFormat: string  | undefined) {
        this['partition_format'] = partitionFormat;
    }
    public get partitionFormat(): string | undefined {
        return this['partition_format'];
    }
    public withRecordDelimiter(recordDelimiter: string): SmartConnectTaskRespSinkConfig {
        this['record_delimiter'] = recordDelimiter;
        return this;
    }
    public set recordDelimiter(recordDelimiter: string  | undefined) {
        this['record_delimiter'] = recordDelimiter;
    }
    public get recordDelimiter(): string | undefined {
        return this['record_delimiter'];
    }
    public withStoreKeys(storeKeys: boolean): SmartConnectTaskRespSinkConfig {
        this['store_keys'] = storeKeys;
        return this;
    }
    public set storeKeys(storeKeys: boolean  | undefined) {
        this['store_keys'] = storeKeys;
    }
    public get storeKeys(): boolean | undefined {
        return this['store_keys'];
    }
    public withObsPartSize(obsPartSize: number): SmartConnectTaskRespSinkConfig {
        this['obs_part_size'] = obsPartSize;
        return this;
    }
    public set obsPartSize(obsPartSize: number  | undefined) {
        this['obs_part_size'] = obsPartSize;
    }
    public get obsPartSize(): number | undefined {
        return this['obs_part_size'];
    }
    public withFlushSize(flushSize: number): SmartConnectTaskRespSinkConfig {
        this['flush_size'] = flushSize;
        return this;
    }
    public set flushSize(flushSize: number  | undefined) {
        this['flush_size'] = flushSize;
    }
    public get flushSize(): number | undefined {
        return this['flush_size'];
    }
    public withTimezone(timezone: string): SmartConnectTaskRespSinkConfig {
        this['timezone'] = timezone;
        return this;
    }
    public withConnectorClass(connectorClass: string): SmartConnectTaskRespSinkConfig {
        this['connector_class'] = connectorClass;
        return this;
    }
    public set connectorClass(connectorClass: string  | undefined) {
        this['connector_class'] = connectorClass;
    }
    public get connectorClass(): string | undefined {
        return this['connector_class'];
    }
    public withStorageClass(storageClass: string): SmartConnectTaskRespSinkConfig {
        this['storage_class'] = storageClass;
        return this;
    }
    public set storageClass(storageClass: string  | undefined) {
        this['storage_class'] = storageClass;
    }
    public get storageClass(): string | undefined {
        return this['storage_class'];
    }
    public withFormatClass(formatClass: string): SmartConnectTaskRespSinkConfig {
        this['format_class'] = formatClass;
        return this;
    }
    public set formatClass(formatClass: string  | undefined) {
        this['format_class'] = formatClass;
    }
    public get formatClass(): string | undefined {
        return this['format_class'];
    }
    public withSchemaGeneratorClass(schemaGeneratorClass: string): SmartConnectTaskRespSinkConfig {
        this['schema_generator_class'] = schemaGeneratorClass;
        return this;
    }
    public set schemaGeneratorClass(schemaGeneratorClass: string  | undefined) {
        this['schema_generator_class'] = schemaGeneratorClass;
    }
    public get schemaGeneratorClass(): string | undefined {
        return this['schema_generator_class'];
    }
    public withPartitionerClass(partitionerClass: string): SmartConnectTaskRespSinkConfig {
        this['partitioner_class'] = partitionerClass;
        return this;
    }
    public set partitionerClass(partitionerClass: string  | undefined) {
        this['partitioner_class'] = partitionerClass;
    }
    public get partitionerClass(): string | undefined {
        return this['partitioner_class'];
    }
    public withValueConverter(valueConverter: string): SmartConnectTaskRespSinkConfig {
        this['value_converter'] = valueConverter;
        return this;
    }
    public set valueConverter(valueConverter: string  | undefined) {
        this['value_converter'] = valueConverter;
    }
    public get valueConverter(): string | undefined {
        return this['value_converter'];
    }
    public withKeyConverter(keyConverter: string): SmartConnectTaskRespSinkConfig {
        this['key_converter'] = keyConverter;
        return this;
    }
    public set keyConverter(keyConverter: string  | undefined) {
        this['key_converter'] = keyConverter;
    }
    public get keyConverter(): string | undefined {
        return this['key_converter'];
    }
    public withKvDelimiter(kvDelimiter: string): SmartConnectTaskRespSinkConfig {
        this['kv_delimiter'] = kvDelimiter;
        return this;
    }
    public set kvDelimiter(kvDelimiter: string  | undefined) {
        this['kv_delimiter'] = kvDelimiter;
    }
    public get kvDelimiter(): string | undefined {
        return this['kv_delimiter'];
    }
}