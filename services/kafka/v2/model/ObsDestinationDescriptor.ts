

export class ObsDestinationDescriptor {
    public topics: string;
    private 'topics_regex'?: string | undefined;
    private 'consumer_strategy': ObsDestinationDescriptorConsumerStrategyEnum | undefined;
    private 'destination_file_type': ObsDestinationDescriptorDestinationFileTypeEnum | undefined;
    private 'access_key': string | undefined;
    private 'secret_key': string | undefined;
    private 'obs_bucket_name': string | undefined;
    private 'obs_path'?: string | undefined;
    private 'partition_format'?: string | undefined;
    private 'record_delimiter'?: string | undefined;
    private 'deliver_time_interval': number | undefined;
    public constructor(topics?: any, consumerStrategy?: any, destinationFileType?: any, accessKey?: any, secretKey?: any, obsBucketName?: any, deliverTimeInterval?: any) { 
        this['topics'] = topics;
        this['consumer_strategy'] = consumerStrategy;
        this['destination_file_type'] = destinationFileType;
        this['access_key'] = accessKey;
        this['secret_key'] = secretKey;
        this['obs_bucket_name'] = obsBucketName;
        this['deliver_time_interval'] = deliverTimeInterval;
    }
    public withTopics(topics: string): ObsDestinationDescriptor {
        this['topics'] = topics;
        return this;
    }
    public withTopicsRegex(topicsRegex: string): ObsDestinationDescriptor {
        this['topics_regex'] = topicsRegex;
        return this;
    }
    public set topicsRegex(topicsRegex: string | undefined) {
        this['topics_regex'] = topicsRegex;
    }
    public get topicsRegex() {
        return this['topics_regex'];
    }
    public withConsumerStrategy(consumerStrategy: ObsDestinationDescriptorConsumerStrategyEnum): ObsDestinationDescriptor {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: ObsDestinationDescriptorConsumerStrategyEnum | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy() {
        return this['consumer_strategy'];
    }
    public withDestinationFileType(destinationFileType: ObsDestinationDescriptorDestinationFileTypeEnum): ObsDestinationDescriptor {
        this['destination_file_type'] = destinationFileType;
        return this;
    }
    public set destinationFileType(destinationFileType: ObsDestinationDescriptorDestinationFileTypeEnum | undefined) {
        this['destination_file_type'] = destinationFileType;
    }
    public get destinationFileType() {
        return this['destination_file_type'];
    }
    public withAccessKey(accessKey: string): ObsDestinationDescriptor {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey() {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): ObsDestinationDescriptor {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey() {
        return this['secret_key'];
    }
    public withObsBucketName(obsBucketName: string): ObsDestinationDescriptor {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName() {
        return this['obs_bucket_name'];
    }
    public withObsPath(obsPath: string): ObsDestinationDescriptor {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath() {
        return this['obs_path'];
    }
    public withPartitionFormat(partitionFormat: string): ObsDestinationDescriptor {
        this['partition_format'] = partitionFormat;
        return this;
    }
    public set partitionFormat(partitionFormat: string | undefined) {
        this['partition_format'] = partitionFormat;
    }
    public get partitionFormat() {
        return this['partition_format'];
    }
    public withRecordDelimiter(recordDelimiter: string): ObsDestinationDescriptor {
        this['record_delimiter'] = recordDelimiter;
        return this;
    }
    public set recordDelimiter(recordDelimiter: string | undefined) {
        this['record_delimiter'] = recordDelimiter;
    }
    public get recordDelimiter() {
        return this['record_delimiter'];
    }
    public withDeliverTimeInterval(deliverTimeInterval: number): ObsDestinationDescriptor {
        this['deliver_time_interval'] = deliverTimeInterval;
        return this;
    }
    public set deliverTimeInterval(deliverTimeInterval: number | undefined) {
        this['deliver_time_interval'] = deliverTimeInterval;
    }
    public get deliverTimeInterval() {
        return this['deliver_time_interval'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ObsDestinationDescriptorConsumerStrategyEnum {
    LATEST = 'latest',
    EARLIEST = 'earliest'
}
/**
    * @export
    * @enum {string}
    */
export enum ObsDestinationDescriptorDestinationFileTypeEnum {
    TEXT = 'TEXT'
}
