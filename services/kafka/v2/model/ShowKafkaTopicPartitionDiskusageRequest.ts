

export class ShowKafkaTopicPartitionDiskusageRequest {
    private 'instance_id': string | undefined;
    public minSize?: string;
    public top?: string;
    public percentage?: string;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowKafkaTopicPartitionDiskusageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withMinSize(minSize: string): ShowKafkaTopicPartitionDiskusageRequest {
        this['minSize'] = minSize;
        return this;
    }
    public withTop(top: string): ShowKafkaTopicPartitionDiskusageRequest {
        this['top'] = top;
        return this;
    }
    public withPercentage(percentage: string): ShowKafkaTopicPartitionDiskusageRequest {
        this['percentage'] = percentage;
        return this;
    }
}