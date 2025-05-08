

export class SmartConnectTaskRespSourceConfig {
    private 'current_cluster_name'?: string;
    private 'cluster_name'?: string;
    private 'user_name'?: string;
    private 'sasl_mechanism'?: string;
    private 'instance_id'?: string;
    private 'bootstrap_servers'?: string;
    private 'security_protocol'?: string;
    public direction?: string;
    private 'sync_consumer_offsets_enabled'?: boolean;
    private 'replication_factor'?: number;
    private 'task_num'?: number;
    private 'rename_topic_enabled'?: boolean;
    private 'provenance_header_enabled'?: boolean;
    private 'consumer_strategy'?: string;
    private 'compression_type'?: string;
    private 'topics_mapping'?: string;
    public constructor() { 
    }
    public withCurrentClusterName(currentClusterName: string): SmartConnectTaskRespSourceConfig {
        this['current_cluster_name'] = currentClusterName;
        return this;
    }
    public set currentClusterName(currentClusterName: string  | undefined) {
        this['current_cluster_name'] = currentClusterName;
    }
    public get currentClusterName(): string | undefined {
        return this['current_cluster_name'];
    }
    public withClusterName(clusterName: string): SmartConnectTaskRespSourceConfig {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withUserName(userName: string): SmartConnectTaskRespSourceConfig {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSaslMechanism(saslMechanism: string): SmartConnectTaskRespSourceConfig {
        this['sasl_mechanism'] = saslMechanism;
        return this;
    }
    public set saslMechanism(saslMechanism: string  | undefined) {
        this['sasl_mechanism'] = saslMechanism;
    }
    public get saslMechanism(): string | undefined {
        return this['sasl_mechanism'];
    }
    public withInstanceId(instanceId: string): SmartConnectTaskRespSourceConfig {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBootstrapServers(bootstrapServers: string): SmartConnectTaskRespSourceConfig {
        this['bootstrap_servers'] = bootstrapServers;
        return this;
    }
    public set bootstrapServers(bootstrapServers: string  | undefined) {
        this['bootstrap_servers'] = bootstrapServers;
    }
    public get bootstrapServers(): string | undefined {
        return this['bootstrap_servers'];
    }
    public withSecurityProtocol(securityProtocol: string): SmartConnectTaskRespSourceConfig {
        this['security_protocol'] = securityProtocol;
        return this;
    }
    public set securityProtocol(securityProtocol: string  | undefined) {
        this['security_protocol'] = securityProtocol;
    }
    public get securityProtocol(): string | undefined {
        return this['security_protocol'];
    }
    public withDirection(direction: string): SmartConnectTaskRespSourceConfig {
        this['direction'] = direction;
        return this;
    }
    public withSyncConsumerOffsetsEnabled(syncConsumerOffsetsEnabled: boolean): SmartConnectTaskRespSourceConfig {
        this['sync_consumer_offsets_enabled'] = syncConsumerOffsetsEnabled;
        return this;
    }
    public set syncConsumerOffsetsEnabled(syncConsumerOffsetsEnabled: boolean  | undefined) {
        this['sync_consumer_offsets_enabled'] = syncConsumerOffsetsEnabled;
    }
    public get syncConsumerOffsetsEnabled(): boolean | undefined {
        return this['sync_consumer_offsets_enabled'];
    }
    public withReplicationFactor(replicationFactor: number): SmartConnectTaskRespSourceConfig {
        this['replication_factor'] = replicationFactor;
        return this;
    }
    public set replicationFactor(replicationFactor: number  | undefined) {
        this['replication_factor'] = replicationFactor;
    }
    public get replicationFactor(): number | undefined {
        return this['replication_factor'];
    }
    public withTaskNum(taskNum: number): SmartConnectTaskRespSourceConfig {
        this['task_num'] = taskNum;
        return this;
    }
    public set taskNum(taskNum: number  | undefined) {
        this['task_num'] = taskNum;
    }
    public get taskNum(): number | undefined {
        return this['task_num'];
    }
    public withRenameTopicEnabled(renameTopicEnabled: boolean): SmartConnectTaskRespSourceConfig {
        this['rename_topic_enabled'] = renameTopicEnabled;
        return this;
    }
    public set renameTopicEnabled(renameTopicEnabled: boolean  | undefined) {
        this['rename_topic_enabled'] = renameTopicEnabled;
    }
    public get renameTopicEnabled(): boolean | undefined {
        return this['rename_topic_enabled'];
    }
    public withProvenanceHeaderEnabled(provenanceHeaderEnabled: boolean): SmartConnectTaskRespSourceConfig {
        this['provenance_header_enabled'] = provenanceHeaderEnabled;
        return this;
    }
    public set provenanceHeaderEnabled(provenanceHeaderEnabled: boolean  | undefined) {
        this['provenance_header_enabled'] = provenanceHeaderEnabled;
    }
    public get provenanceHeaderEnabled(): boolean | undefined {
        return this['provenance_header_enabled'];
    }
    public withConsumerStrategy(consumerStrategy: string): SmartConnectTaskRespSourceConfig {
        this['consumer_strategy'] = consumerStrategy;
        return this;
    }
    public set consumerStrategy(consumerStrategy: string  | undefined) {
        this['consumer_strategy'] = consumerStrategy;
    }
    public get consumerStrategy(): string | undefined {
        return this['consumer_strategy'];
    }
    public withCompressionType(compressionType: string): SmartConnectTaskRespSourceConfig {
        this['compression_type'] = compressionType;
        return this;
    }
    public set compressionType(compressionType: string  | undefined) {
        this['compression_type'] = compressionType;
    }
    public get compressionType(): string | undefined {
        return this['compression_type'];
    }
    public withTopicsMapping(topicsMapping: string): SmartConnectTaskRespSourceConfig {
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