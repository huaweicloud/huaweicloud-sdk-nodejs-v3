import { ApigTriggerFuncInfo } from './ApigTriggerFuncInfo';


export class TriggerEventDataResponseBody {
    public name?: string;
    private 'schedule_type'?: TriggerEventDataResponseBodyScheduleTypeEnum | string;
    public schedule?: string;
    private 'user_event'?: string;
    public triggerid?: string;
    public type?: number;
    public path?: string;
    public protocol?: TriggerEventDataResponseBodyProtocolEnum | string;
    private 'req_method'?: TriggerEventDataResponseBodyReqMethodEnum | string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'match_mode'?: TriggerEventDataResponseBodyMatchModeEnum | string;
    private 'env_name'?: string;
    private 'env_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    public auth?: TriggerEventDataResponseBodyAuthEnum | string;
    private 'invoke_url'?: string;
    private 'func_info'?: ApigTriggerFuncInfo;
    private 'sl_domain'?: string;
    private 'backend_type'?: TriggerEventDataResponseBodyBackendTypeEnum | string;
    private 'instance_id'?: string;
    private 'roma_app_id'?: string;
    public operations?: Array<string>;
    private 'collection_name'?: string;
    private 'db_name'?: string;
    private 'db_password'?: string;
    private 'db_user'?: string;
    private 'instance_addrs'?: Array<string>;
    public mode?: string;
    private 'batch_size'?: number;
    private 'queue_id'?: string;
    private 'consumer_group_id'?: string;
    private 'polling_interval'?: number;
    private 'stream_name'?: string;
    private 'sharditerator_type'?: TriggerEventDataResponseBodySharditeratorTypeEnum | string;
    private 'polling_unit'?: TriggerEventDataResponseBodyPollingUnitEnum | string;
    private 'max_fetch_bytes'?: number;
    private 'is_serial'?: TriggerEventDataResponseBodyIsSerialEnum | string;
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
    public constructor() { 
    }
    public withName(name: string): TriggerEventDataResponseBody {
        this['name'] = name;
        return this;
    }
    public withScheduleType(scheduleType: TriggerEventDataResponseBodyScheduleTypeEnum | string): TriggerEventDataResponseBody {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: TriggerEventDataResponseBodyScheduleTypeEnum | string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): TriggerEventDataResponseBodyScheduleTypeEnum | string | undefined {
        return this['schedule_type'];
    }
    public withSchedule(schedule: string): TriggerEventDataResponseBody {
        this['schedule'] = schedule;
        return this;
    }
    public withUserEvent(userEvent: string): TriggerEventDataResponseBody {
        this['user_event'] = userEvent;
        return this;
    }
    public set userEvent(userEvent: string  | undefined) {
        this['user_event'] = userEvent;
    }
    public get userEvent(): string | undefined {
        return this['user_event'];
    }
    public withTriggerid(triggerid: string): TriggerEventDataResponseBody {
        this['triggerid'] = triggerid;
        return this;
    }
    public withType(type: number): TriggerEventDataResponseBody {
        this['type'] = type;
        return this;
    }
    public withPath(path: string): TriggerEventDataResponseBody {
        this['path'] = path;
        return this;
    }
    public withProtocol(protocol: TriggerEventDataResponseBodyProtocolEnum | string): TriggerEventDataResponseBody {
        this['protocol'] = protocol;
        return this;
    }
    public withReqMethod(reqMethod: TriggerEventDataResponseBodyReqMethodEnum | string): TriggerEventDataResponseBody {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: TriggerEventDataResponseBodyReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): TriggerEventDataResponseBodyReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withGroupId(groupId: string): TriggerEventDataResponseBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): TriggerEventDataResponseBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withMatchMode(matchMode: TriggerEventDataResponseBodyMatchModeEnum | string): TriggerEventDataResponseBody {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: TriggerEventDataResponseBodyMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): TriggerEventDataResponseBodyMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withEnvName(envName: string): TriggerEventDataResponseBody {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withEnvId(envId: string): TriggerEventDataResponseBody {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withApiId(apiId: string): TriggerEventDataResponseBody {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): TriggerEventDataResponseBody {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withAuth(auth: TriggerEventDataResponseBodyAuthEnum | string): TriggerEventDataResponseBody {
        this['auth'] = auth;
        return this;
    }
    public withInvokeUrl(invokeUrl: string): TriggerEventDataResponseBody {
        this['invoke_url'] = invokeUrl;
        return this;
    }
    public set invokeUrl(invokeUrl: string  | undefined) {
        this['invoke_url'] = invokeUrl;
    }
    public get invokeUrl(): string | undefined {
        return this['invoke_url'];
    }
    public withFuncInfo(funcInfo: ApigTriggerFuncInfo): TriggerEventDataResponseBody {
        this['func_info'] = funcInfo;
        return this;
    }
    public set funcInfo(funcInfo: ApigTriggerFuncInfo  | undefined) {
        this['func_info'] = funcInfo;
    }
    public get funcInfo(): ApigTriggerFuncInfo | undefined {
        return this['func_info'];
    }
    public withSlDomain(slDomain: string): TriggerEventDataResponseBody {
        this['sl_domain'] = slDomain;
        return this;
    }
    public set slDomain(slDomain: string  | undefined) {
        this['sl_domain'] = slDomain;
    }
    public get slDomain(): string | undefined {
        return this['sl_domain'];
    }
    public withBackendType(backendType: TriggerEventDataResponseBodyBackendTypeEnum | string): TriggerEventDataResponseBody {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: TriggerEventDataResponseBodyBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): TriggerEventDataResponseBodyBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withInstanceId(instanceId: string): TriggerEventDataResponseBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRomaAppId(romaAppId: string): TriggerEventDataResponseBody {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withOperations(operations: Array<string>): TriggerEventDataResponseBody {
        this['operations'] = operations;
        return this;
    }
    public withCollectionName(collectionName: string): TriggerEventDataResponseBody {
        this['collection_name'] = collectionName;
        return this;
    }
    public set collectionName(collectionName: string  | undefined) {
        this['collection_name'] = collectionName;
    }
    public get collectionName(): string | undefined {
        return this['collection_name'];
    }
    public withDbName(dbName: string): TriggerEventDataResponseBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDbPassword(dbPassword: string): TriggerEventDataResponseBody {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string  | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword(): string | undefined {
        return this['db_password'];
    }
    public withDbUser(dbUser: string): TriggerEventDataResponseBody {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withInstanceAddrs(instanceAddrs: Array<string>): TriggerEventDataResponseBody {
        this['instance_addrs'] = instanceAddrs;
        return this;
    }
    public set instanceAddrs(instanceAddrs: Array<string>  | undefined) {
        this['instance_addrs'] = instanceAddrs;
    }
    public get instanceAddrs(): Array<string> | undefined {
        return this['instance_addrs'];
    }
    public withMode(mode: string): TriggerEventDataResponseBody {
        this['mode'] = mode;
        return this;
    }
    public withBatchSize(batchSize: number): TriggerEventDataResponseBody {
        this['batch_size'] = batchSize;
        return this;
    }
    public set batchSize(batchSize: number  | undefined) {
        this['batch_size'] = batchSize;
    }
    public get batchSize(): number | undefined {
        return this['batch_size'];
    }
    public withQueueId(queueId: string): TriggerEventDataResponseBody {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: string  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): string | undefined {
        return this['queue_id'];
    }
    public withConsumerGroupId(consumerGroupId: string): TriggerEventDataResponseBody {
        this['consumer_group_id'] = consumerGroupId;
        return this;
    }
    public set consumerGroupId(consumerGroupId: string  | undefined) {
        this['consumer_group_id'] = consumerGroupId;
    }
    public get consumerGroupId(): string | undefined {
        return this['consumer_group_id'];
    }
    public withPollingInterval(pollingInterval: number): TriggerEventDataResponseBody {
        this['polling_interval'] = pollingInterval;
        return this;
    }
    public set pollingInterval(pollingInterval: number  | undefined) {
        this['polling_interval'] = pollingInterval;
    }
    public get pollingInterval(): number | undefined {
        return this['polling_interval'];
    }
    public withStreamName(streamName: string): TriggerEventDataResponseBody {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withSharditeratorType(sharditeratorType: TriggerEventDataResponseBodySharditeratorTypeEnum | string): TriggerEventDataResponseBody {
        this['sharditerator_type'] = sharditeratorType;
        return this;
    }
    public set sharditeratorType(sharditeratorType: TriggerEventDataResponseBodySharditeratorTypeEnum | string  | undefined) {
        this['sharditerator_type'] = sharditeratorType;
    }
    public get sharditeratorType(): TriggerEventDataResponseBodySharditeratorTypeEnum | string | undefined {
        return this['sharditerator_type'];
    }
    public withPollingUnit(pollingUnit: TriggerEventDataResponseBodyPollingUnitEnum | string): TriggerEventDataResponseBody {
        this['polling_unit'] = pollingUnit;
        return this;
    }
    public set pollingUnit(pollingUnit: TriggerEventDataResponseBodyPollingUnitEnum | string  | undefined) {
        this['polling_unit'] = pollingUnit;
    }
    public get pollingUnit(): TriggerEventDataResponseBodyPollingUnitEnum | string | undefined {
        return this['polling_unit'];
    }
    public withMaxFetchBytes(maxFetchBytes: number): TriggerEventDataResponseBody {
        this['max_fetch_bytes'] = maxFetchBytes;
        return this;
    }
    public set maxFetchBytes(maxFetchBytes: number  | undefined) {
        this['max_fetch_bytes'] = maxFetchBytes;
    }
    public get maxFetchBytes(): number | undefined {
        return this['max_fetch_bytes'];
    }
    public withIsSerial(isSerial: TriggerEventDataResponseBodyIsSerialEnum | string): TriggerEventDataResponseBody {
        this['is_serial'] = isSerial;
        return this;
    }
    public set isSerial(isSerial: TriggerEventDataResponseBodyIsSerialEnum | string  | undefined) {
        this['is_serial'] = isSerial;
    }
    public get isSerial(): TriggerEventDataResponseBodyIsSerialEnum | string | undefined {
        return this['is_serial'];
    }
    public withLogGroupId(logGroupId: string): TriggerEventDataResponseBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: string): TriggerEventDataResponseBody {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: string  | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId(): string | undefined {
        return this['log_topic_id'];
    }
    public withBucket(bucket: string): TriggerEventDataResponseBody {
        this['bucket'] = bucket;
        return this;
    }
    public withPrefix(prefix: string): TriggerEventDataResponseBody {
        this['prefix'] = prefix;
        return this;
    }
    public withSuffix(suffix: string): TriggerEventDataResponseBody {
        this['suffix'] = suffix;
        return this;
    }
    public withEvents(events: Array<string>): TriggerEventDataResponseBody {
        this['events'] = events;
        return this;
    }
    public withTopicUrn(topicUrn: string): TriggerEventDataResponseBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withTopicIds(topicIds: Array<string>): TriggerEventDataResponseBody {
        this['topic_ids'] = topicIds;
        return this;
    }
    public set topicIds(topicIds: Array<string>  | undefined) {
        this['topic_ids'] = topicIds;
    }
    public get topicIds(): Array<string> | undefined {
        return this['topic_ids'];
    }
    public withKafkaUser(kafkaUser: string): TriggerEventDataResponseBody {
        this['kafka_user'] = kafkaUser;
        return this;
    }
    public set kafkaUser(kafkaUser: string  | undefined) {
        this['kafka_user'] = kafkaUser;
    }
    public get kafkaUser(): string | undefined {
        return this['kafka_user'];
    }
    public withKafkaPassword(kafkaPassword: string): TriggerEventDataResponseBody {
        this['kafka_password'] = kafkaPassword;
        return this;
    }
    public set kafkaPassword(kafkaPassword: string  | undefined) {
        this['kafka_password'] = kafkaPassword;
    }
    public get kafkaPassword(): string | undefined {
        return this['kafka_password'];
    }
    public withKafkaConnectAddress(kafkaConnectAddress: string): TriggerEventDataResponseBody {
        this['kafka_connect_address'] = kafkaConnectAddress;
        return this;
    }
    public set kafkaConnectAddress(kafkaConnectAddress: string  | undefined) {
        this['kafka_connect_address'] = kafkaConnectAddress;
    }
    public get kafkaConnectAddress(): string | undefined {
        return this['kafka_connect_address'];
    }
    public withKafkaSslEnable(kafkaSslEnable: boolean): TriggerEventDataResponseBody {
        this['kafka_ssl_enable'] = kafkaSslEnable;
        return this;
    }
    public set kafkaSslEnable(kafkaSslEnable: boolean  | undefined) {
        this['kafka_ssl_enable'] = kafkaSslEnable;
    }
    public get kafkaSslEnable(): boolean | undefined {
        return this['kafka_ssl_enable'];
    }
    public withAccessPassword(accessPassword: string): TriggerEventDataResponseBody {
        this['access_password'] = accessPassword;
        return this;
    }
    public set accessPassword(accessPassword: string  | undefined) {
        this['access_password'] = accessPassword;
    }
    public get accessPassword(): string | undefined {
        return this['access_password'];
    }
    public withAccessUser(accessUser: string): TriggerEventDataResponseBody {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string  | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser(): string | undefined {
        return this['access_user'];
    }
    public withConnectAddress(connectAddress: string): TriggerEventDataResponseBody {
        this['connect_address'] = connectAddress;
        return this;
    }
    public set connectAddress(connectAddress: string  | undefined) {
        this['connect_address'] = connectAddress;
    }
    public get connectAddress(): string | undefined {
        return this['connect_address'];
    }
    public withExchangeName(exchangeName: string): TriggerEventDataResponseBody {
        this['exchange_name'] = exchangeName;
        return this;
    }
    public set exchangeName(exchangeName: string  | undefined) {
        this['exchange_name'] = exchangeName;
    }
    public get exchangeName(): string | undefined {
        return this['exchange_name'];
    }
    public withVhost(vhost: string): TriggerEventDataResponseBody {
        this['vhost'] = vhost;
        return this;
    }
    public withSslEnable(sslEnable: boolean): TriggerEventDataResponseBody {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodyScheduleTypeEnum {
    RATE = 'Rate',
    CRON = 'Cron'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodyProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodyReqMethodEnum {
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
export enum TriggerEventDataResponseBodyMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodyAuthEnum {
    IAM = 'IAM',
    APP = 'APP',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodyBackendTypeEnum {
    FUNCTION = 'FUNCTION'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodySharditeratorTypeEnum {
    TRIM_HORIZON = 'TRIM_HORIZON',
    LATEST = 'LATEST'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodyPollingUnitEnum {
    S = 's',
    MS = 'ms'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataResponseBodyIsSerialEnum {
    TRUE = 'true',
    FALSE = 'false'
}
