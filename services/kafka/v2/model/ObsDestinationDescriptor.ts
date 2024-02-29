

export class ObsDestinationDescriptor {
    public topics?: string;
    private 'topics_regex'?: string;
    private 'consumer_strategy'?: ObsDestinationDescriptorConsumerStrategyEnum | string;
    private 'destination_file_type'?: ObsDestinationDescriptorDestinationFileTypeEnum | string;
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'obs_bucket_name'?: string;
    private 'obs_path'?: string;
    private 'partition_format'?: ObsDestinationDescriptorPartitionFormatEnum | string;
    private 'record_delimiter'?: string;
    private 'deliver_time_interval'?: number;
    public constructor(topics?: string, consumerStrategy?: string, destinationFileType?: string, accessKey?: string, secretKey?: string, obsBucketName?: string, partitionFormat?: string, deliverTimeInterval?: number) { 
        this['topics'] = topics;
        this['consumer_strategy'] = consumerStrategy;
        this['destination_file_type'] = destinationFileType;
        this['access_key'] = accessKey;
        this['secret_key'] = secretKey;
        this['obs_bucket_name'] = obsBucketName;
        this['partition_format'] = partitionFormat;
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
    public set topicsRegex(topicsRegex: string  | undefined) {
        this['topics_regex'] = topicsRegex;
    }
    public get topicsRegex(): string | undefined {
        return this['topics_regex'];
    }
    public withConsumerStrategy(consumerStrategy: ObsDestinationDescriptorConsumerStrategyEnum | string): ObsDestinationDescriptor {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: ObsDestinationDescriptorConsumerStrategyEnum | string  | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy(): ObsDestinationDescriptorConsumerStrategyEnum | string | undefined {
        return this['consumer_strategy'];
    }
    public withDestinationFileType(destinationFileType: ObsDestinationDescriptorDestinationFileTypeEnum | string): ObsDestinationDescriptor {
        this['destination_file_type'] = destinationFileType;
        return this;
    }
    public set destinationFileType(destinationFileType: ObsDestinationDescriptorDestinationFileTypeEnum | string  | undefined) {
        this['destination_file_type'] = destinationFileType;
    }
    public get destinationFileType(): ObsDestinationDescriptorDestinationFileTypeEnum | string | undefined {
        return this['destination_file_type'];
    }
    public withAccessKey(accessKey: string): ObsDestinationDescriptor {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): ObsDestinationDescriptor {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withObsBucketName(obsBucketName: string): ObsDestinationDescriptor {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsPath(obsPath: string): ObsDestinationDescriptor {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string  | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath(): string | undefined {
        return this['obs_path'];
    }
    public withPartitionFormat(partitionFormat: ObsDestinationDescriptorPartitionFormatEnum | string): ObsDestinationDescriptor {
        this['partition_format'] = partitionFormat;
        return this;
    }
    public set partitionFormat(partitionFormat: ObsDestinationDescriptorPartitionFormatEnum | string  | undefined) {
        this['partition_format'] = partitionFormat;
    }
    public get partitionFormat(): ObsDestinationDescriptorPartitionFormatEnum | string | undefined {
        return this['partition_format'];
    }
    public withRecordDelimiter(recordDelimiter: string): ObsDestinationDescriptor {
        this['record_delimiter'] = recordDelimiter;
        return this;
    }
    public set recordDelimiter(recordDelimiter: string  | undefined) {
        this['record_delimiter'] = recordDelimiter;
    }
    public get recordDelimiter(): string | undefined {
        return this['record_delimiter'];
    }
    public withDeliverTimeInterval(deliverTimeInterval: number): ObsDestinationDescriptor {
        this['deliver_time_interval'] = deliverTimeInterval;
        return this;
    }
    public set deliverTimeInterval(deliverTimeInterval: number  | undefined) {
        this['deliver_time_interval'] = deliverTimeInterval;
    }
    public get deliverTimeInterval(): number | undefined {
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
/**
    * @export
    * @enum {string}
    */
export enum ObsDestinationDescriptorPartitionFormatEnum {
    YYYY = 'yyyy',
    YYYY_MM = 'yyyy/MM',
    YYYY_MM_DD = 'yyyy/MM/dd',
    YYYY_MM_DD_HH = 'yyyy/MM/dd/HH',
    YYYY_MM_DD_HH_MM = 'yyyy/MM/dd/HH/mm'
}
