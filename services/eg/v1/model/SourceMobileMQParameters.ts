

export class SourceMobileMQParameters {
    private 'group_id'?: string;
    private 'instance_id'?: string;
    public topic?: string;
    public tag?: string;
    private 'authentication_required'?: boolean;
    private 'msg_trace_switch'?: boolean;
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'message_model'?: SourceMobileMQParametersMessageModelEnum | string;
    private 'addr_type'?: SourceMobileMQParametersAddrTypeEnum | string;
    public addr?: string;
    private 'sdk_url'?: string;
    private 'consume_timeout'?: number;
    private 'message_type'?: SourceMobileMQParametersMessageTypeEnum | string;
    private 'suspend_time'?: number;
    private 'max_reconsumer_times'?: number;
    private 'consumer_thread_nums'?: number;
    private 'consumer_batch_max_size'?: number;
    private 'consumer_max_wait'?: number;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public constructor(groupId?: string, instanceId?: string, topic?: string, messageModel?: string, addrType?: string, addr?: string, sdkUrl?: string, consumeTimeout?: number, messageType?: string) { 
        this['group_id'] = groupId;
        this['instance_id'] = instanceId;
        this['topic'] = topic;
        this['message_model'] = messageModel;
        this['addr_type'] = addrType;
        this['addr'] = addr;
        this['sdk_url'] = sdkUrl;
        this['consume_timeout'] = consumeTimeout;
        this['message_type'] = messageType;
    }
    public withGroupId(groupId: string): SourceMobileMQParameters {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withInstanceId(instanceId: string): SourceMobileMQParameters {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): SourceMobileMQParameters {
        this['topic'] = topic;
        return this;
    }
    public withTag(tag: string): SourceMobileMQParameters {
        this['tag'] = tag;
        return this;
    }
    public withAuthenticationRequired(authenticationRequired: boolean): SourceMobileMQParameters {
        this['authentication_required'] = authenticationRequired;
        return this;
    }
    public set authenticationRequired(authenticationRequired: boolean  | undefined) {
        this['authentication_required'] = authenticationRequired;
    }
    public get authenticationRequired(): boolean | undefined {
        return this['authentication_required'];
    }
    public withMsgTraceSwitch(msgTraceSwitch: boolean): SourceMobileMQParameters {
        this['msg_trace_switch'] = msgTraceSwitch;
        return this;
    }
    public set msgTraceSwitch(msgTraceSwitch: boolean  | undefined) {
        this['msg_trace_switch'] = msgTraceSwitch;
    }
    public get msgTraceSwitch(): boolean | undefined {
        return this['msg_trace_switch'];
    }
    public withAccessKey(accessKey: string): SourceMobileMQParameters {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): SourceMobileMQParameters {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withMessageModel(messageModel: SourceMobileMQParametersMessageModelEnum | string): SourceMobileMQParameters {
        this['message_model'] = messageModel;
        return this;
    }
    public set messageModel(messageModel: SourceMobileMQParametersMessageModelEnum | string  | undefined) {
        this['message_model'] = messageModel;
    }
    public get messageModel(): SourceMobileMQParametersMessageModelEnum | string | undefined {
        return this['message_model'];
    }
    public withAddrType(addrType: SourceMobileMQParametersAddrTypeEnum | string): SourceMobileMQParameters {
        this['addr_type'] = addrType;
        return this;
    }
    public set addrType(addrType: SourceMobileMQParametersAddrTypeEnum | string  | undefined) {
        this['addr_type'] = addrType;
    }
    public get addrType(): SourceMobileMQParametersAddrTypeEnum | string | undefined {
        return this['addr_type'];
    }
    public withAddr(addr: string): SourceMobileMQParameters {
        this['addr'] = addr;
        return this;
    }
    public withSdkUrl(sdkUrl: string): SourceMobileMQParameters {
        this['sdk_url'] = sdkUrl;
        return this;
    }
    public set sdkUrl(sdkUrl: string  | undefined) {
        this['sdk_url'] = sdkUrl;
    }
    public get sdkUrl(): string | undefined {
        return this['sdk_url'];
    }
    public withConsumeTimeout(consumeTimeout: number): SourceMobileMQParameters {
        this['consume_timeout'] = consumeTimeout;
        return this;
    }
    public set consumeTimeout(consumeTimeout: number  | undefined) {
        this['consume_timeout'] = consumeTimeout;
    }
    public get consumeTimeout(): number | undefined {
        return this['consume_timeout'];
    }
    public withMessageType(messageType: SourceMobileMQParametersMessageTypeEnum | string): SourceMobileMQParameters {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: SourceMobileMQParametersMessageTypeEnum | string  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): SourceMobileMQParametersMessageTypeEnum | string | undefined {
        return this['message_type'];
    }
    public withSuspendTime(suspendTime: number): SourceMobileMQParameters {
        this['suspend_time'] = suspendTime;
        return this;
    }
    public set suspendTime(suspendTime: number  | undefined) {
        this['suspend_time'] = suspendTime;
    }
    public get suspendTime(): number | undefined {
        return this['suspend_time'];
    }
    public withMaxReconsumerTimes(maxReconsumerTimes: number): SourceMobileMQParameters {
        this['max_reconsumer_times'] = maxReconsumerTimes;
        return this;
    }
    public set maxReconsumerTimes(maxReconsumerTimes: number  | undefined) {
        this['max_reconsumer_times'] = maxReconsumerTimes;
    }
    public get maxReconsumerTimes(): number | undefined {
        return this['max_reconsumer_times'];
    }
    public withConsumerThreadNums(consumerThreadNums: number): SourceMobileMQParameters {
        this['consumer_thread_nums'] = consumerThreadNums;
        return this;
    }
    public set consumerThreadNums(consumerThreadNums: number  | undefined) {
        this['consumer_thread_nums'] = consumerThreadNums;
    }
    public get consumerThreadNums(): number | undefined {
        return this['consumer_thread_nums'];
    }
    public withConsumerBatchMaxSize(consumerBatchMaxSize: number): SourceMobileMQParameters {
        this['consumer_batch_max_size'] = consumerBatchMaxSize;
        return this;
    }
    public set consumerBatchMaxSize(consumerBatchMaxSize: number  | undefined) {
        this['consumer_batch_max_size'] = consumerBatchMaxSize;
    }
    public get consumerBatchMaxSize(): number | undefined {
        return this['consumer_batch_max_size'];
    }
    public withConsumerMaxWait(consumerMaxWait: number): SourceMobileMQParameters {
        this['consumer_max_wait'] = consumerMaxWait;
        return this;
    }
    public set consumerMaxWait(consumerMaxWait: number  | undefined) {
        this['consumer_max_wait'] = consumerMaxWait;
    }
    public get consumerMaxWait(): number | undefined {
        return this['consumer_max_wait'];
    }
    public withVpcId(vpcId: string): SourceMobileMQParameters {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): SourceMobileMQParameters {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceMobileMQParametersMessageModelEnum {
    CLUSTERING = 'CLUSTERING',
    BROADCASTING = 'BROADCASTING'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceMobileMQParametersAddrTypeEnum {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceMobileMQParametersMessageTypeEnum {
    NORMAL = 'NORMAL'
}
