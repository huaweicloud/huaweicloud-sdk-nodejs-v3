

export class ShowSinkTaskDetailRespObsDestinationDescriptor {
    private 'consumer_strategy'?: string;
    private 'destination_file_type'?: string;
    private 'obs_bucket_name'?: string;
    private 'obs_path'?: string;
    private 'partition_format'?: string;
    private 'record_delimiter'?: string;
    private 'deliver_time_interval'?: number;
    private 'obs_part_size'?: number;
    public constructor() { 
    }
    public withConsumerStrategy(consumerStrategy: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: string  | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy(): string | undefined {
        return this['consumer_strategy'];
    }
    public withDestinationFileType(destinationFileType: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['destination_file_type'] = destinationFileType;
        return this;
    }
    public set destinationFileType(destinationFileType: string  | undefined) {
        this['destination_file_type'] = destinationFileType;
    }
    public get destinationFileType(): string | undefined {
        return this['destination_file_type'];
    }
    public withObsBucketName(obsBucketName: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsPath(obsPath: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string  | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath(): string | undefined {
        return this['obs_path'];
    }
    public withPartitionFormat(partitionFormat: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['partition_format'] = partitionFormat;
        return this;
    }
    public set partitionFormat(partitionFormat: string  | undefined) {
        this['partition_format'] = partitionFormat;
    }
    public get partitionFormat(): string | undefined {
        return this['partition_format'];
    }
    public withRecordDelimiter(recordDelimiter: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['record_delimiter'] = recordDelimiter;
        return this;
    }
    public set recordDelimiter(recordDelimiter: string  | undefined) {
        this['record_delimiter'] = recordDelimiter;
    }
    public get recordDelimiter(): string | undefined {
        return this['record_delimiter'];
    }
    public withDeliverTimeInterval(deliverTimeInterval: number): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['deliver_time_interval'] = deliverTimeInterval;
        return this;
    }
    public set deliverTimeInterval(deliverTimeInterval: number  | undefined) {
        this['deliver_time_interval'] = deliverTimeInterval;
    }
    public get deliverTimeInterval(): number | undefined {
        return this['deliver_time_interval'];
    }
    public withObsPartSize(obsPartSize: number): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['obs_part_size'] = obsPartSize;
        return this;
    }
    public set obsPartSize(obsPartSize: number  | undefined) {
        this['obs_part_size'] = obsPartSize;
    }
    public get obsPartSize(): number | undefined {
        return this['obs_part_size'];
    }
}