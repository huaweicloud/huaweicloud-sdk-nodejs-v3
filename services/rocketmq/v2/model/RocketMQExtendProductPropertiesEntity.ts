

export class RocketMQExtendProductPropertiesEntity {
    private 'max_broker'?: string;
    private 'max_topic_per_broker'?: string;
    private 'max_consumer_per_broker'?: string;
    private 'min_broker'?: string;
    private 'engine_versions'?: string;
    private 'max_storage_per_node'?: string;
    private 'min_storage_per_node'?: string;
    private 'product_alias'?: string;
    public feature?: string;
    private 'max_topic'?: string;
    private 'broker_num'?: string;
    public core?: string;
    private 'max_consumer'?: string;
    public rcu?: string;
    private 'max_storage'?: string;
    private 'min_storage'?: string;
    private 'max_tps_per_rcu'?: string;
    private 'elastic_tps'?: string;
    public constructor() { 
    }
    public withMaxBroker(maxBroker: string): RocketMQExtendProductPropertiesEntity {
        this['max_broker'] = maxBroker;
        return this;
    }
    public set maxBroker(maxBroker: string  | undefined) {
        this['max_broker'] = maxBroker;
    }
    public get maxBroker(): string | undefined {
        return this['max_broker'];
    }
    public withMaxTopicPerBroker(maxTopicPerBroker: string): RocketMQExtendProductPropertiesEntity {
        this['max_topic_per_broker'] = maxTopicPerBroker;
        return this;
    }
    public set maxTopicPerBroker(maxTopicPerBroker: string  | undefined) {
        this['max_topic_per_broker'] = maxTopicPerBroker;
    }
    public get maxTopicPerBroker(): string | undefined {
        return this['max_topic_per_broker'];
    }
    public withMaxConsumerPerBroker(maxConsumerPerBroker: string): RocketMQExtendProductPropertiesEntity {
        this['max_consumer_per_broker'] = maxConsumerPerBroker;
        return this;
    }
    public set maxConsumerPerBroker(maxConsumerPerBroker: string  | undefined) {
        this['max_consumer_per_broker'] = maxConsumerPerBroker;
    }
    public get maxConsumerPerBroker(): string | undefined {
        return this['max_consumer_per_broker'];
    }
    public withMinBroker(minBroker: string): RocketMQExtendProductPropertiesEntity {
        this['min_broker'] = minBroker;
        return this;
    }
    public set minBroker(minBroker: string  | undefined) {
        this['min_broker'] = minBroker;
    }
    public get minBroker(): string | undefined {
        return this['min_broker'];
    }
    public withEngineVersions(engineVersions: string): RocketMQExtendProductPropertiesEntity {
        this['engine_versions'] = engineVersions;
        return this;
    }
    public set engineVersions(engineVersions: string  | undefined) {
        this['engine_versions'] = engineVersions;
    }
    public get engineVersions(): string | undefined {
        return this['engine_versions'];
    }
    public withMaxStoragePerNode(maxStoragePerNode: string): RocketMQExtendProductPropertiesEntity {
        this['max_storage_per_node'] = maxStoragePerNode;
        return this;
    }
    public set maxStoragePerNode(maxStoragePerNode: string  | undefined) {
        this['max_storage_per_node'] = maxStoragePerNode;
    }
    public get maxStoragePerNode(): string | undefined {
        return this['max_storage_per_node'];
    }
    public withMinStoragePerNode(minStoragePerNode: string): RocketMQExtendProductPropertiesEntity {
        this['min_storage_per_node'] = minStoragePerNode;
        return this;
    }
    public set minStoragePerNode(minStoragePerNode: string  | undefined) {
        this['min_storage_per_node'] = minStoragePerNode;
    }
    public get minStoragePerNode(): string | undefined {
        return this['min_storage_per_node'];
    }
    public withProductAlias(productAlias: string): RocketMQExtendProductPropertiesEntity {
        this['product_alias'] = productAlias;
        return this;
    }
    public set productAlias(productAlias: string  | undefined) {
        this['product_alias'] = productAlias;
    }
    public get productAlias(): string | undefined {
        return this['product_alias'];
    }
    public withFeature(feature: string): RocketMQExtendProductPropertiesEntity {
        this['feature'] = feature;
        return this;
    }
    public withMaxTopic(maxTopic: string): RocketMQExtendProductPropertiesEntity {
        this['max_topic'] = maxTopic;
        return this;
    }
    public set maxTopic(maxTopic: string  | undefined) {
        this['max_topic'] = maxTopic;
    }
    public get maxTopic(): string | undefined {
        return this['max_topic'];
    }
    public withBrokerNum(brokerNum: string): RocketMQExtendProductPropertiesEntity {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: string  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): string | undefined {
        return this['broker_num'];
    }
    public withCore(core: string): RocketMQExtendProductPropertiesEntity {
        this['core'] = core;
        return this;
    }
    public withMaxConsumer(maxConsumer: string): RocketMQExtendProductPropertiesEntity {
        this['max_consumer'] = maxConsumer;
        return this;
    }
    public set maxConsumer(maxConsumer: string  | undefined) {
        this['max_consumer'] = maxConsumer;
    }
    public get maxConsumer(): string | undefined {
        return this['max_consumer'];
    }
    public withRcu(rcu: string): RocketMQExtendProductPropertiesEntity {
        this['rcu'] = rcu;
        return this;
    }
    public withMaxStorage(maxStorage: string): RocketMQExtendProductPropertiesEntity {
        this['max_storage'] = maxStorage;
        return this;
    }
    public set maxStorage(maxStorage: string  | undefined) {
        this['max_storage'] = maxStorage;
    }
    public get maxStorage(): string | undefined {
        return this['max_storage'];
    }
    public withMinStorage(minStorage: string): RocketMQExtendProductPropertiesEntity {
        this['min_storage'] = minStorage;
        return this;
    }
    public set minStorage(minStorage: string  | undefined) {
        this['min_storage'] = minStorage;
    }
    public get minStorage(): string | undefined {
        return this['min_storage'];
    }
    public withMaxTpsPerRcu(maxTpsPerRcu: string): RocketMQExtendProductPropertiesEntity {
        this['max_tps_per_rcu'] = maxTpsPerRcu;
        return this;
    }
    public set maxTpsPerRcu(maxTpsPerRcu: string  | undefined) {
        this['max_tps_per_rcu'] = maxTpsPerRcu;
    }
    public get maxTpsPerRcu(): string | undefined {
        return this['max_tps_per_rcu'];
    }
    public withElasticTps(elasticTps: string): RocketMQExtendProductPropertiesEntity {
        this['elastic_tps'] = elasticTps;
        return this;
    }
    public set elasticTps(elasticTps: string  | undefined) {
        this['elastic_tps'] = elasticTps;
    }
    public get elasticTps(): string | undefined {
        return this['elastic_tps'];
    }
}