

export class SourceCommunityMQParameters {
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    public addr?: string;
    public group?: string;
    public topic?: string;
    public tag?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'ssl_enable'?: boolean;
    private 'enable_acl'?: boolean;
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'message_type'?: SourceCommunityMQParametersMessageTypeEnum | string;
    private 'consume_timeout'?: number;
    private 'consumer_thread_nums'?: number;
    private 'consumer_batch_max_size'?: number;
    private 'max_reconsume_times'?: number;
    private 'suspend_current_queue_time_millis'?: number;
    public constructor(addr?: string, group?: string, topic?: string, vpcId?: string, subnetId?: string) { 
        this['addr'] = addr;
        this['group'] = group;
        this['topic'] = topic;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withInstanceName(instanceName: string): SourceCommunityMQParameters {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): SourceCommunityMQParameters {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAddr(addr: string): SourceCommunityMQParameters {
        this['addr'] = addr;
        return this;
    }
    public withGroup(group: string): SourceCommunityMQParameters {
        this['group'] = group;
        return this;
    }
    public withTopic(topic: string): SourceCommunityMQParameters {
        this['topic'] = topic;
        return this;
    }
    public withTag(tag: string): SourceCommunityMQParameters {
        this['tag'] = tag;
        return this;
    }
    public withVpcId(vpcId: string): SourceCommunityMQParameters {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): SourceCommunityMQParameters {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSslEnable(sslEnable: boolean): SourceCommunityMQParameters {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withEnableAcl(enableAcl: boolean): SourceCommunityMQParameters {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
    public withAccessKey(accessKey: string): SourceCommunityMQParameters {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): SourceCommunityMQParameters {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withMessageType(messageType: SourceCommunityMQParametersMessageTypeEnum | string): SourceCommunityMQParameters {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: SourceCommunityMQParametersMessageTypeEnum | string  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): SourceCommunityMQParametersMessageTypeEnum | string | undefined {
        return this['message_type'];
    }
    public withConsumeTimeout(consumeTimeout: number): SourceCommunityMQParameters {
        this['consume_timeout'] = consumeTimeout;
        return this;
    }
    public set consumeTimeout(consumeTimeout: number  | undefined) {
        this['consume_timeout'] = consumeTimeout;
    }
    public get consumeTimeout(): number | undefined {
        return this['consume_timeout'];
    }
    public withConsumerThreadNums(consumerThreadNums: number): SourceCommunityMQParameters {
        this['consumer_thread_nums'] = consumerThreadNums;
        return this;
    }
    public set consumerThreadNums(consumerThreadNums: number  | undefined) {
        this['consumer_thread_nums'] = consumerThreadNums;
    }
    public get consumerThreadNums(): number | undefined {
        return this['consumer_thread_nums'];
    }
    public withConsumerBatchMaxSize(consumerBatchMaxSize: number): SourceCommunityMQParameters {
        this['consumer_batch_max_size'] = consumerBatchMaxSize;
        return this;
    }
    public set consumerBatchMaxSize(consumerBatchMaxSize: number  | undefined) {
        this['consumer_batch_max_size'] = consumerBatchMaxSize;
    }
    public get consumerBatchMaxSize(): number | undefined {
        return this['consumer_batch_max_size'];
    }
    public withMaxReconsumeTimes(maxReconsumeTimes: number): SourceCommunityMQParameters {
        this['max_reconsume_times'] = maxReconsumeTimes;
        return this;
    }
    public set maxReconsumeTimes(maxReconsumeTimes: number  | undefined) {
        this['max_reconsume_times'] = maxReconsumeTimes;
    }
    public get maxReconsumeTimes(): number | undefined {
        return this['max_reconsume_times'];
    }
    public withSuspendCurrentQueueTimeMillis(suspendCurrentQueueTimeMillis: number): SourceCommunityMQParameters {
        this['suspend_current_queue_time_millis'] = suspendCurrentQueueTimeMillis;
        return this;
    }
    public set suspendCurrentQueueTimeMillis(suspendCurrentQueueTimeMillis: number  | undefined) {
        this['suspend_current_queue_time_millis'] = suspendCurrentQueueTimeMillis;
    }
    public get suspendCurrentQueueTimeMillis(): number | undefined {
        return this['suspend_current_queue_time_millis'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceCommunityMQParametersMessageTypeEnum {
    NORMAL = 'normal'
}
