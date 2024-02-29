

export class SmartConnectTaskReqSinkConfig {
    private 'redis_address'?: string;
    private 'redis_type'?: string;
    private 'dcs_instance_id'?: string;
    private 'redis_password'?: string;
    private 'consumer_strategy'?: string;
    private 'destination_file_type'?: string;
    private 'deliver_time_interval'?: number;
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'obs_bucket_name'?: string;
    private 'obs_path'?: string;
    private 'partition_format'?: string;
    private 'record_delimiter'?: string;
    private 'store_keys'?: boolean;
    public constructor() { 
    }
    public withRedisAddress(redisAddress: string): SmartConnectTaskReqSinkConfig {
        this['redis_address'] = redisAddress;
        return this;
    }
    public set redisAddress(redisAddress: string  | undefined) {
        this['redis_address'] = redisAddress;
    }
    public get redisAddress(): string | undefined {
        return this['redis_address'];
    }
    public withRedisType(redisType: string): SmartConnectTaskReqSinkConfig {
        this['redis_type'] = redisType;
        return this;
    }
    public set redisType(redisType: string  | undefined) {
        this['redis_type'] = redisType;
    }
    public get redisType(): string | undefined {
        return this['redis_type'];
    }
    public withDcsInstanceId(dcsInstanceId: string): SmartConnectTaskReqSinkConfig {
        this['dcs_instance_id'] = dcsInstanceId;
        return this;
    }
    public set dcsInstanceId(dcsInstanceId: string  | undefined) {
        this['dcs_instance_id'] = dcsInstanceId;
    }
    public get dcsInstanceId(): string | undefined {
        return this['dcs_instance_id'];
    }
    public withRedisPassword(redisPassword: string): SmartConnectTaskReqSinkConfig {
        this['redis_password'] = redisPassword;
        return this;
    }
    public set redisPassword(redisPassword: string  | undefined) {
        this['redis_password'] = redisPassword;
    }
    public get redisPassword(): string | undefined {
        return this['redis_password'];
    }
    public withConsumerStrategy(consumerStrategy: string): SmartConnectTaskReqSinkConfig {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: string  | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy(): string | undefined {
        return this['consumer_strategy'];
    }
    public withDestinationFileType(destinationFileType: string): SmartConnectTaskReqSinkConfig {
        this['destination_file_type'] = destinationFileType;
        return this;
    }
    public set destinationFileType(destinationFileType: string  | undefined) {
        this['destination_file_type'] = destinationFileType;
    }
    public get destinationFileType(): string | undefined {
        return this['destination_file_type'];
    }
    public withDeliverTimeInterval(deliverTimeInterval: number): SmartConnectTaskReqSinkConfig {
        this['deliver_time_interval'] = deliverTimeInterval;
        return this;
    }
    public set deliverTimeInterval(deliverTimeInterval: number  | undefined) {
        this['deliver_time_interval'] = deliverTimeInterval;
    }
    public get deliverTimeInterval(): number | undefined {
        return this['deliver_time_interval'];
    }
    public withAccessKey(accessKey: string): SmartConnectTaskReqSinkConfig {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): SmartConnectTaskReqSinkConfig {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withObsBucketName(obsBucketName: string): SmartConnectTaskReqSinkConfig {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsPath(obsPath: string): SmartConnectTaskReqSinkConfig {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string  | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath(): string | undefined {
        return this['obs_path'];
    }
    public withPartitionFormat(partitionFormat: string): SmartConnectTaskReqSinkConfig {
        this['partition_format'] = partitionFormat;
        return this;
    }
    public set partitionFormat(partitionFormat: string  | undefined) {
        this['partition_format'] = partitionFormat;
    }
    public get partitionFormat(): string | undefined {
        return this['partition_format'];
    }
    public withRecordDelimiter(recordDelimiter: string): SmartConnectTaskReqSinkConfig {
        this['record_delimiter'] = recordDelimiter;
        return this;
    }
    public set recordDelimiter(recordDelimiter: string  | undefined) {
        this['record_delimiter'] = recordDelimiter;
    }
    public get recordDelimiter(): string | undefined {
        return this['record_delimiter'];
    }
    public withStoreKeys(storeKeys: boolean): SmartConnectTaskReqSinkConfig {
        this['store_keys'] = storeKeys;
        return this;
    }
    public set storeKeys(storeKeys: boolean  | undefined) {
        this['store_keys'] = storeKeys;
    }
    public get storeKeys(): boolean | undefined {
        return this['store_keys'];
    }
}