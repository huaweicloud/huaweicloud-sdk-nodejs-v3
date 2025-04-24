

export class SourceDMSMQParameters {
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    public group?: string;
    public topic?: string;
    public tag?: string;
    private 'ssl_enable'?: boolean;
    private 'enable_acl'?: boolean;
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'message_type'?: SourceDMSMQParametersMessageTypeEnum | string;
    private 'engine_version'?: SourceDMSMQParametersEngineVersionEnum | string;
    private 'consume_timeout'?: number;
    private 'consumer_thread_nums'?: number;
    private 'consumer_batch_max_size'?: number;
    private 'max_reconsume_times'?: number;
    private 'suspend_current_queue_time_millis'?: number;
    public constructor(instanceId?: string, group?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
        this['topic'] = topic;
    }
    public withInstanceName(instanceName: string): SourceDMSMQParameters {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): SourceDMSMQParameters {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): SourceDMSMQParameters {
        this['group'] = group;
        return this;
    }
    public withTopic(topic: string): SourceDMSMQParameters {
        this['topic'] = topic;
        return this;
    }
    public withTag(tag: string): SourceDMSMQParameters {
        this['tag'] = tag;
        return this;
    }
    public withSslEnable(sslEnable: boolean): SourceDMSMQParameters {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withEnableAcl(enableAcl: boolean): SourceDMSMQParameters {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
    public withAccessKey(accessKey: string): SourceDMSMQParameters {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): SourceDMSMQParameters {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withMessageType(messageType: SourceDMSMQParametersMessageTypeEnum | string): SourceDMSMQParameters {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: SourceDMSMQParametersMessageTypeEnum | string  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): SourceDMSMQParametersMessageTypeEnum | string | undefined {
        return this['message_type'];
    }
    public withEngineVersion(engineVersion: SourceDMSMQParametersEngineVersionEnum | string): SourceDMSMQParameters {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: SourceDMSMQParametersEngineVersionEnum | string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): SourceDMSMQParametersEngineVersionEnum | string | undefined {
        return this['engine_version'];
    }
    public withConsumeTimeout(consumeTimeout: number): SourceDMSMQParameters {
        this['consume_timeout'] = consumeTimeout;
        return this;
    }
    public set consumeTimeout(consumeTimeout: number  | undefined) {
        this['consume_timeout'] = consumeTimeout;
    }
    public get consumeTimeout(): number | undefined {
        return this['consume_timeout'];
    }
    public withConsumerThreadNums(consumerThreadNums: number): SourceDMSMQParameters {
        this['consumer_thread_nums'] = consumerThreadNums;
        return this;
    }
    public set consumerThreadNums(consumerThreadNums: number  | undefined) {
        this['consumer_thread_nums'] = consumerThreadNums;
    }
    public get consumerThreadNums(): number | undefined {
        return this['consumer_thread_nums'];
    }
    public withConsumerBatchMaxSize(consumerBatchMaxSize: number): SourceDMSMQParameters {
        this['consumer_batch_max_size'] = consumerBatchMaxSize;
        return this;
    }
    public set consumerBatchMaxSize(consumerBatchMaxSize: number  | undefined) {
        this['consumer_batch_max_size'] = consumerBatchMaxSize;
    }
    public get consumerBatchMaxSize(): number | undefined {
        return this['consumer_batch_max_size'];
    }
    public withMaxReconsumeTimes(maxReconsumeTimes: number): SourceDMSMQParameters {
        this['max_reconsume_times'] = maxReconsumeTimes;
        return this;
    }
    public set maxReconsumeTimes(maxReconsumeTimes: number  | undefined) {
        this['max_reconsume_times'] = maxReconsumeTimes;
    }
    public get maxReconsumeTimes(): number | undefined {
        return this['max_reconsume_times'];
    }
    public withSuspendCurrentQueueTimeMillis(suspendCurrentQueueTimeMillis: number): SourceDMSMQParameters {
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
export enum SourceDMSMQParametersMessageTypeEnum {
    NORMAL = 'NORMAL',
    ORDER = 'ORDER'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceDMSMQParametersEngineVersionEnum {
    E_4_X = '4.x',
    E_5_X = '5.x'
}
