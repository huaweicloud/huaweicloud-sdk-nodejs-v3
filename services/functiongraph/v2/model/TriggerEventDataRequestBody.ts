import { ApigTriggerFuncInfo } from './ApigTriggerFuncInfo';


export class TriggerEventDataRequestBody {
    public name?: string;
    private 'schedule_type'?: TriggerEventDataRequestBodyScheduleTypeEnum | string;
    public schedule?: string;
    private 'user_event'?: string;
    public type?: number;
    public path?: string;
    public protocol?: TriggerEventDataRequestBodyProtocolEnum | string;
    private 'req_method'?: TriggerEventDataRequestBodyReqMethodEnum | string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'match_mode'?: TriggerEventDataRequestBodyMatchModeEnum | string;
    private 'env_name'?: string;
    private 'env_id'?: string;
    public auth?: TriggerEventDataRequestBodyAuthEnum | string;
    private 'func_info'?: ApigTriggerFuncInfo;
    private 'sl_domain'?: string;
    private 'backend_type'?: TriggerEventDataRequestBodyBackendTypeEnum | string;
    public operations?: Array<string>;
    private 'instance_id'?: string;
    private 'collection_name'?: string;
    private 'db_name'?: string;
    private 'db_password'?: string;
    private 'batch_size'?: number;
    private 'queue_id'?: string;
    private 'consumer_group_id'?: string;
    private 'polling_interval'?: number;
    private 'stream_name'?: string;
    private 'sharditerator_type'?: TriggerEventDataRequestBodySharditeratorTypeEnum | string;
    private 'polling_unit'?: TriggerEventDataRequestBodyPollingUnitEnum | string;
    private 'max_fetch_bytes'?: number;
    private 'is_serial'?: TriggerEventDataRequestBodyIsSerialEnum | string;
    private 'log_group_id'?: string;
    private 'log_topic_id'?: string;
    public bucket?: string;
    public prefix?: string;
    public suffix?: string;
    public events?: Array<string>;
    private 'topic_urn'?: string;
    private 'topic_ids'?: Array<string>;
    private 'kafka_user'?: string;
    private 'kafka_password'?: string;
    private 'kafka_connect_address'?: string;
    private 'kafka_ssl_enable'?: boolean;
    private 'access_password'?: string;
    private 'access_user'?: string;
    private 'connect_address'?: string;
    private 'exchange_name'?: string;
    public vhost?: string;
    private 'ssl_enable'?: boolean;
    private 'Key_encode'?: boolean;
    public agency?: string;
    private 'channel_name'?: string;
    private 'source_name'?: string;
    private 'created_time'?: Date;
    public status?: string;
    private 'trigger_name'?: string;
    public constructor() { 
    }
    public withName(name: string): TriggerEventDataRequestBody {
        this['name'] = name;
        return this;
    }
    public withScheduleType(scheduleType: TriggerEventDataRequestBodyScheduleTypeEnum | string): TriggerEventDataRequestBody {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: TriggerEventDataRequestBodyScheduleTypeEnum | string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): TriggerEventDataRequestBodyScheduleTypeEnum | string | undefined {
        return this['schedule_type'];
    }
    public withSchedule(schedule: string): TriggerEventDataRequestBody {
        this['schedule'] = schedule;
        return this;
    }
    public withUserEvent(userEvent: string): TriggerEventDataRequestBody {
        this['user_event'] = userEvent;
        return this;
    }
    public set userEvent(userEvent: string  | undefined) {
        this['user_event'] = userEvent;
    }
    public get userEvent(): string | undefined {
        return this['user_event'];
    }
    public withType(type: number): TriggerEventDataRequestBody {
        this['type'] = type;
        return this;
    }
    public withPath(path: string): TriggerEventDataRequestBody {
        this['path'] = path;
        return this;
    }
    public withProtocol(protocol: TriggerEventDataRequestBodyProtocolEnum | string): TriggerEventDataRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withReqMethod(reqMethod: TriggerEventDataRequestBodyReqMethodEnum | string): TriggerEventDataRequestBody {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: TriggerEventDataRequestBodyReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): TriggerEventDataRequestBodyReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withGroupId(groupId: string): TriggerEventDataRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): TriggerEventDataRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withMatchMode(matchMode: TriggerEventDataRequestBodyMatchModeEnum | string): TriggerEventDataRequestBody {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: TriggerEventDataRequestBodyMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): TriggerEventDataRequestBodyMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withEnvName(envName: string): TriggerEventDataRequestBody {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withEnvId(envId: string): TriggerEventDataRequestBody {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withAuth(auth: TriggerEventDataRequestBodyAuthEnum | string): TriggerEventDataRequestBody {
        this['auth'] = auth;
        return this;
    }
    public withFuncInfo(funcInfo: ApigTriggerFuncInfo): TriggerEventDataRequestBody {
        this['func_info'] = funcInfo;
        return this;
    }
    public set funcInfo(funcInfo: ApigTriggerFuncInfo  | undefined) {
        this['func_info'] = funcInfo;
    }
    public get funcInfo(): ApigTriggerFuncInfo | undefined {
        return this['func_info'];
    }
    public withSlDomain(slDomain: string): TriggerEventDataRequestBody {
        this['sl_domain'] = slDomain;
        return this;
    }
    public set slDomain(slDomain: string  | undefined) {
        this['sl_domain'] = slDomain;
    }
    public get slDomain(): string | undefined {
        return this['sl_domain'];
    }
    public withBackendType(backendType: TriggerEventDataRequestBodyBackendTypeEnum | string): TriggerEventDataRequestBody {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: TriggerEventDataRequestBodyBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): TriggerEventDataRequestBodyBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withOperations(operations: Array<string>): TriggerEventDataRequestBody {
        this['operations'] = operations;
        return this;
    }
    public withInstanceId(instanceId: string): TriggerEventDataRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCollectionName(collectionName: string): TriggerEventDataRequestBody {
        this['collection_name'] = collectionName;
        return this;
    }
    public set collectionName(collectionName: string  | undefined) {
        this['collection_name'] = collectionName;
    }
    public get collectionName(): string | undefined {
        return this['collection_name'];
    }
    public withDbName(dbName: string): TriggerEventDataRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDbPassword(dbPassword: string): TriggerEventDataRequestBody {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string  | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword(): string | undefined {
        return this['db_password'];
    }
    public withBatchSize(batchSize: number): TriggerEventDataRequestBody {
        this['batch_size'] = batchSize;
        return this;
    }
    public set batchSize(batchSize: number  | undefined) {
        this['batch_size'] = batchSize;
    }
    public get batchSize(): number | undefined {
        return this['batch_size'];
    }
    public withQueueId(queueId: string): TriggerEventDataRequestBody {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: string  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): string | undefined {
        return this['queue_id'];
    }
    public withConsumerGroupId(consumerGroupId: string): TriggerEventDataRequestBody {
        this['consumer_group_id'] = consumerGroupId;
        return this;
    }
    public set consumerGroupId(consumerGroupId: string  | undefined) {
        this['consumer_group_id'] = consumerGroupId;
    }
    public get consumerGroupId(): string | undefined {
        return this['consumer_group_id'];
    }
    public withPollingInterval(pollingInterval: number): TriggerEventDataRequestBody {
        this['polling_interval'] = pollingInterval;
        return this;
    }
    public set pollingInterval(pollingInterval: number  | undefined) {
        this['polling_interval'] = pollingInterval;
    }
    public get pollingInterval(): number | undefined {
        return this['polling_interval'];
    }
    public withStreamName(streamName: string): TriggerEventDataRequestBody {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withSharditeratorType(sharditeratorType: TriggerEventDataRequestBodySharditeratorTypeEnum | string): TriggerEventDataRequestBody {
        this['sharditerator_type'] = sharditeratorType;
        return this;
    }
    public set sharditeratorType(sharditeratorType: TriggerEventDataRequestBodySharditeratorTypeEnum | string  | undefined) {
        this['sharditerator_type'] = sharditeratorType;
    }
    public get sharditeratorType(): TriggerEventDataRequestBodySharditeratorTypeEnum | string | undefined {
        return this['sharditerator_type'];
    }
    public withPollingUnit(pollingUnit: TriggerEventDataRequestBodyPollingUnitEnum | string): TriggerEventDataRequestBody {
        this['polling_unit'] = pollingUnit;
        return this;
    }
    public set pollingUnit(pollingUnit: TriggerEventDataRequestBodyPollingUnitEnum | string  | undefined) {
        this['polling_unit'] = pollingUnit;
    }
    public get pollingUnit(): TriggerEventDataRequestBodyPollingUnitEnum | string | undefined {
        return this['polling_unit'];
    }
    public withMaxFetchBytes(maxFetchBytes: number): TriggerEventDataRequestBody {
        this['max_fetch_bytes'] = maxFetchBytes;
        return this;
    }
    public set maxFetchBytes(maxFetchBytes: number  | undefined) {
        this['max_fetch_bytes'] = maxFetchBytes;
    }
    public get maxFetchBytes(): number | undefined {
        return this['max_fetch_bytes'];
    }
    public withIsSerial(isSerial: TriggerEventDataRequestBodyIsSerialEnum | string): TriggerEventDataRequestBody {
        this['is_serial'] = isSerial;
        return this;
    }
    public set isSerial(isSerial: TriggerEventDataRequestBodyIsSerialEnum | string  | undefined) {
        this['is_serial'] = isSerial;
    }
    public get isSerial(): TriggerEventDataRequestBodyIsSerialEnum | string | undefined {
        return this['is_serial'];
    }
    public withLogGroupId(logGroupId: string): TriggerEventDataRequestBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): TriggerEventDataRequestBody {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string  | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId(): string | undefined {
        return this['log_topic_id'];
    }
    public withBucket(bucket: string): TriggerEventDataRequestBody {
        this['bucket'] = bucket;
        return this;
    }
    public withPrefix(prefix: string): TriggerEventDataRequestBody {
        this['prefix'] = prefix;
        return this;
    }
    public withSuffix(suffix: string): TriggerEventDataRequestBody {
        this['suffix'] = suffix;
        return this;
    }
    public withEvents(events: Array<string>): TriggerEventDataRequestBody {
        this['events'] = events;
        return this;
    }
    public withTopicUrn(topicUrn: string): TriggerEventDataRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withTopicIds(topicIds: Array<string>): TriggerEventDataRequestBody {
        this['topic_ids'] = topicIds;
        return this;
    }
    public set topicIds(topicIds: Array<string>  | undefined) {
        this['topic_ids'] = topicIds;
    }
    public get topicIds(): Array<string> | undefined {
        return this['topic_ids'];
    }
    public withKafkaUser(kafkaUser: string): TriggerEventDataRequestBody {
        this['kafka_user'] = kafkaUser;
        return this;
    }
    public set kafkaUser(kafkaUser: string  | undefined) {
        this['kafka_user'] = kafkaUser;
    }
    public get kafkaUser(): string | undefined {
        return this['kafka_user'];
    }
    public withKafkaPassword(kafkaPassword: string): TriggerEventDataRequestBody {
        this['kafka_password'] = kafkaPassword;
        return this;
    }
    public set kafkaPassword(kafkaPassword: string  | undefined) {
        this['kafka_password'] = kafkaPassword;
    }
    public get kafkaPassword(): string | undefined {
        return this['kafka_password'];
    }
    public withKafkaConnectAddress(kafkaConnectAddress: string): TriggerEventDataRequestBody {
        this['kafka_connect_address'] = kafkaConnectAddress;
        return this;
    }
    public set kafkaConnectAddress(kafkaConnectAddress: string  | undefined) {
        this['kafka_connect_address'] = kafkaConnectAddress;
    }
    public get kafkaConnectAddress(): string | undefined {
        return this['kafka_connect_address'];
    }
    public withKafkaSslEnable(kafkaSslEnable: boolean): TriggerEventDataRequestBody {
        this['kafka_ssl_enable'] = kafkaSslEnable;
        return this;
    }
    public set kafkaSslEnable(kafkaSslEnable: boolean  | undefined) {
        this['kafka_ssl_enable'] = kafkaSslEnable;
    }
    public get kafkaSslEnable(): boolean | undefined {
        return this['kafka_ssl_enable'];
    }
    public withAccessPassword(accessPassword: string): TriggerEventDataRequestBody {
        this['access_password'] = accessPassword;
        return this;
    }
    public set accessPassword(accessPassword: string  | undefined) {
        this['access_password'] = accessPassword;
    }
    public get accessPassword(): string | undefined {
        return this['access_password'];
    }
    public withAccessUser(accessUser: string): TriggerEventDataRequestBody {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string  | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser(): string | undefined {
        return this['access_user'];
    }
    public withConnectAddress(connectAddress: string): TriggerEventDataRequestBody {
        this['connect_address'] = connectAddress;
        return this;
    }
    public set connectAddress(connectAddress: string  | undefined) {
        this['connect_address'] = connectAddress;
    }
    public get connectAddress(): string | undefined {
        return this['connect_address'];
    }
    public withExchangeName(exchangeName: string): TriggerEventDataRequestBody {
        this['exchange_name'] = exchangeName;
        return this;
    }
    public set exchangeName(exchangeName: string  | undefined) {
        this['exchange_name'] = exchangeName;
    }
    public get exchangeName(): string | undefined {
        return this['exchange_name'];
    }
    public withVhost(vhost: string): TriggerEventDataRequestBody {
        this['vhost'] = vhost;
        return this;
    }
    public withSslEnable(sslEnable: boolean): TriggerEventDataRequestBody {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withKeyEncode(keyEncode: boolean): TriggerEventDataRequestBody {
        this['Key_encode'] = keyEncode;
        return this;
    }
    public set keyEncode(keyEncode: boolean  | undefined) {
        this['Key_encode'] = keyEncode;
    }
    public get keyEncode(): boolean | undefined {
        return this['Key_encode'];
    }
    public withAgency(agency: string): TriggerEventDataRequestBody {
        this['agency'] = agency;
        return this;
    }
    public withChannelName(channelName: string): TriggerEventDataRequestBody {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withSourceName(sourceName: string): TriggerEventDataRequestBody {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withCreatedTime(createdTime: Date): TriggerEventDataRequestBody {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withStatus(status: string): TriggerEventDataRequestBody {
        this['status'] = status;
        return this;
    }
    public withTriggerName(triggerName: string): TriggerEventDataRequestBody {
        this['trigger_name'] = triggerName;
        return this;
    }
    public set triggerName(triggerName: string  | undefined) {
        this['trigger_name'] = triggerName;
    }
    public get triggerName(): string | undefined {
        return this['trigger_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyScheduleTypeEnum {
    RATE = 'Rate',
    CRON = 'Cron'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyAuthEnum {
    IAM = 'IAM',
    APP = 'APP',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyBackendTypeEnum {
    FUNCTION = 'FUNCTION'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodySharditeratorTypeEnum {
    TRIM_HORIZON = 'TRIM_HORIZON',
    LATEST = 'LATEST'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyPollingUnitEnum {
    S = 's',
    MS = 'ms'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataRequestBodyIsSerialEnum {
    TRUE = 'true',
    FALSE = 'false'
}
