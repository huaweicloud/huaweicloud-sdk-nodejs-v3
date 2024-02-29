

export class SmartConnectTaskReqSourceConfig {
    private 'redis_address'?: string;
    private 'redis_type'?: string;
    private 'dcs_instance_id'?: string;
    private 'redis_password'?: string;
    private 'sync_mode'?: string;
    private 'full_sync_wait_ms'?: number;
    private 'full_sync_max_retry'?: number;
    public ratelimit?: number;
    private 'current_cluster_name'?: string;
    private 'cluster_name'?: string;
    private 'user_name'?: string;
    public password?: string;
    private 'sasl_mechanism'?: string;
    private 'instance_id'?: string;
    private 'bootstrap_servers'?: string;
    private 'security_protocol'?: string;
    public direction?: string;
    private 'sync_consumer_offsets_enabled'?: boolean;
    private 'replication_factor'?: string;
    private 'task_num'?: string;
    private 'rename_topic_enable'?: boolean;
    private 'provenance_header_enabled'?: boolean;
    private 'consumer_strategy'?: string;
    private 'compression_type'?: string;
    private 'topics_mapping'?: string;
    public constructor() { 
    }
    public withRedisAddress(redisAddress: string): SmartConnectTaskReqSourceConfig {
        this['redis_address'] = redisAddress;
        return this;
    }
    public set redisAddress(redisAddress: string  | undefined) {
        this['redis_address'] = redisAddress;
    }
    public get redisAddress(): string | undefined {
        return this['redis_address'];
    }
    public withRedisType(redisType: string): SmartConnectTaskReqSourceConfig {
        this['redis_type'] = redisType;
        return this;
    }
    public set redisType(redisType: string  | undefined) {
        this['redis_type'] = redisType;
    }
    public get redisType(): string | undefined {
        return this['redis_type'];
    }
    public withDcsInstanceId(dcsInstanceId: string): SmartConnectTaskReqSourceConfig {
        this['dcs_instance_id'] = dcsInstanceId;
        return this;
    }
    public set dcsInstanceId(dcsInstanceId: string  | undefined) {
        this['dcs_instance_id'] = dcsInstanceId;
    }
    public get dcsInstanceId(): string | undefined {
        return this['dcs_instance_id'];
    }
    public withRedisPassword(redisPassword: string): SmartConnectTaskReqSourceConfig {
        this['redis_password'] = redisPassword;
        return this;
    }
    public set redisPassword(redisPassword: string  | undefined) {
        this['redis_password'] = redisPassword;
    }
    public get redisPassword(): string | undefined {
        return this['redis_password'];
    }
    public withSyncMode(syncMode: string): SmartConnectTaskReqSourceConfig {
        this['sync_mode'] = syncMode;
        return this;
    }
    public set syncMode(syncMode: string  | undefined) {
        this['sync_mode'] = syncMode;
    }
    public get syncMode(): string | undefined {
        return this['sync_mode'];
    }
    public withFullSyncWaitMs(fullSyncWaitMs: number): SmartConnectTaskReqSourceConfig {
        this['full_sync_wait_ms'] = fullSyncWaitMs;
        return this;
    }
    public set fullSyncWaitMs(fullSyncWaitMs: number  | undefined) {
        this['full_sync_wait_ms'] = fullSyncWaitMs;
    }
    public get fullSyncWaitMs(): number | undefined {
        return this['full_sync_wait_ms'];
    }
    public withFullSyncMaxRetry(fullSyncMaxRetry: number): SmartConnectTaskReqSourceConfig {
        this['full_sync_max_retry'] = fullSyncMaxRetry;
        return this;
    }
    public set fullSyncMaxRetry(fullSyncMaxRetry: number  | undefined) {
        this['full_sync_max_retry'] = fullSyncMaxRetry;
    }
    public get fullSyncMaxRetry(): number | undefined {
        return this['full_sync_max_retry'];
    }
    public withRatelimit(ratelimit: number): SmartConnectTaskReqSourceConfig {
        this['ratelimit'] = ratelimit;
        return this;
    }
    public withCurrentClusterName(currentClusterName: string): SmartConnectTaskReqSourceConfig {
        this['current_cluster_name'] = currentClusterName;
        return this;
    }
    public set currentClusterName(currentClusterName: string  | undefined) {
        this['current_cluster_name'] = currentClusterName;
    }
    public get currentClusterName(): string | undefined {
        return this['current_cluster_name'];
    }
    public withClusterName(clusterName: string): SmartConnectTaskReqSourceConfig {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withUserName(userName: string): SmartConnectTaskReqSourceConfig {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): SmartConnectTaskReqSourceConfig {
        this['password'] = password;
        return this;
    }
    public withSaslMechanism(saslMechanism: string): SmartConnectTaskReqSourceConfig {
        this['sasl_mechanism'] = saslMechanism;
        return this;
    }
    public set saslMechanism(saslMechanism: string  | undefined) {
        this['sasl_mechanism'] = saslMechanism;
    }
    public get saslMechanism(): string | undefined {
        return this['sasl_mechanism'];
    }
    public withInstanceId(instanceId: string): SmartConnectTaskReqSourceConfig {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBootstrapServers(bootstrapServers: string): SmartConnectTaskReqSourceConfig {
        this['bootstrap_servers'] = bootstrapServers;
        return this;
    }
    public set bootstrapServers(bootstrapServers: string  | undefined) {
        this['bootstrap_servers'] = bootstrapServers;
    }
    public get bootstrapServers(): string | undefined {
        return this['bootstrap_servers'];
    }
    public withSecurityProtocol(securityProtocol: string): SmartConnectTaskReqSourceConfig {
        this['security_protocol'] = securityProtocol;
        return this;
    }
    public set securityProtocol(securityProtocol: string  | undefined) {
        this['security_protocol'] = securityProtocol;
    }
    public get securityProtocol(): string | undefined {
        return this['security_protocol'];
    }
    public withDirection(direction: string): SmartConnectTaskReqSourceConfig {
        this['direction'] = direction;
        return this;
    }
    public withSyncConsumerOffsetsEnabled(syncConsumerOffsetsEnabled: boolean): SmartConnectTaskReqSourceConfig {
        this['sync_consumer_offsets_enabled'] = syncConsumerOffsetsEnabled;
        return this;
    }
    public set syncConsumerOffsetsEnabled(syncConsumerOffsetsEnabled: boolean  | undefined) {
        this['sync_consumer_offsets_enabled'] = syncConsumerOffsetsEnabled;
    }
    public get syncConsumerOffsetsEnabled(): boolean | undefined {
        return this['sync_consumer_offsets_enabled'];
    }
    public withReplicationFactor(replicationFactor: string): SmartConnectTaskReqSourceConfig {
        this['replication_factor'] = replicationFactor;
        return this;
    }
    public set replicationFactor(replicationFactor: string  | undefined) {
        this['replication_factor'] = replicationFactor;
    }
    public get replicationFactor(): string | undefined {
        return this['replication_factor'];
    }
    public withTaskNum(taskNum: string): SmartConnectTaskReqSourceConfig {
        this['task_num'] = taskNum;
        return this;
    }
    public set taskNum(taskNum: string  | undefined) {
        this['task_num'] = taskNum;
    }
    public get taskNum(): string | undefined {
        return this['task_num'];
    }
    public withRenameTopicEnable(renameTopicEnable: boolean): SmartConnectTaskReqSourceConfig {
        this['rename_topic_enable'] = renameTopicEnable;
        return this;
    }
    public set renameTopicEnable(renameTopicEnable: boolean  | undefined) {
        this['rename_topic_enable'] = renameTopicEnable;
    }
    public get renameTopicEnable(): boolean | undefined {
        return this['rename_topic_enable'];
    }
    public withProvenanceHeaderEnabled(provenanceHeaderEnabled: boolean): SmartConnectTaskReqSourceConfig {
        this['provenance_header_enabled'] = provenanceHeaderEnabled;
        return this;
    }
    public set provenanceHeaderEnabled(provenanceHeaderEnabled: boolean  | undefined) {
        this['provenance_header_enabled'] = provenanceHeaderEnabled;
    }
    public get provenanceHeaderEnabled(): boolean | undefined {
        return this['provenance_header_enabled'];
    }
    public withConsumerStrategy(consumerStrategy: string): SmartConnectTaskReqSourceConfig {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: string  | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy(): string | undefined {
        return this['consumer_strategy'];
    }
    public withCompressionType(compressionType: string): SmartConnectTaskReqSourceConfig {
        this['compression_type'] = compressionType;
        return this;
    }
    public set compressionType(compressionType: string  | undefined) {
        this['compression_type'] = compressionType;
    }
    public get compressionType(): string | undefined {
        return this['compression_type'];
    }
    public withTopicsMapping(topicsMapping: string): SmartConnectTaskReqSourceConfig {
        this['topics_mapping'] = topicsMapping;
        return this;
    }
    public set topicsMapping(topicsMapping: string  | undefined) {
        this['topics_mapping'] = topicsMapping;
    }
    public get topicsMapping(): string | undefined {
        return this['topics_mapping'];
    }
}