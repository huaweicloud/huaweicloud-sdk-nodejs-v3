

export class ShowSinkTaskDetailRespObsDestinationDescriptor {
    private 'consumer_strategy'?: string | undefined;
    private 'destination_file_type'?: string | undefined;
    private 'obs_bucket_name'?: string | undefined;
    private 'obs_path'?: string | undefined;
    private 'partition_format'?: string | undefined;
    private 'record_delimiter'?: string | undefined;
    private 'deliver_time_interval'?: number | undefined;
    private 'obs_part_size'?: number | undefined;
    public constructor() { 
    }
    public withConsumerStrategy(consumerStrategy: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: string | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy() {
        return this['consumer_strategy'];
    }
    public withDestinationFileType(destinationFileType: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['destination_file_type'] = destinationFileType;
        return this;
    }
    public set destinationFileType(destinationFileType: string | undefined) {
        this['destination_file_type'] = destinationFileType;
    }
    public get destinationFileType() {
        return this['destination_file_type'];
    }
    public withObsBucketName(obsBucketName: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName() {
        return this['obs_bucket_name'];
    }
    public withObsPath(obsPath: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath() {
        return this['obs_path'];
    }
    public withPartitionFormat(partitionFormat: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['partition_format'] = partitionFormat;
        return this;
    }
    public set partitionFormat(partitionFormat: string | undefined) {
        this['partition_format'] = partitionFormat;
    }
    public get partitionFormat() {
        return this['partition_format'];
    }
    public withRecordDelimiter(recordDelimiter: string): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['record_delimiter'] = recordDelimiter;
        return this;
    }
    public set recordDelimiter(recordDelimiter: string | undefined) {
        this['record_delimiter'] = recordDelimiter;
    }
    public get recordDelimiter() {
        return this['record_delimiter'];
    }
    public withDeliverTimeInterval(deliverTimeInterval: number): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['deliver_time_interval'] = deliverTimeInterval;
        return this;
    }
    public set deliverTimeInterval(deliverTimeInterval: number | undefined) {
        this['deliver_time_interval'] = deliverTimeInterval;
    }
    public get deliverTimeInterval() {
        return this['deliver_time_interval'];
    }
    public withObsPartSize(obsPartSize: number): ShowSinkTaskDetailRespObsDestinationDescriptor {
        this['obs_part_size'] = obsPartSize;
        return this;
    }
    public set obsPartSize(obsPartSize: number | undefined) {
        this['obs_part_size'] = obsPartSize;
    }
    public get obsPartSize() {
        return this['obs_part_size'];
    }
}