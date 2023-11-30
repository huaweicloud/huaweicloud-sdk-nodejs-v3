

export class RocketMQExtendProductPropertiesEntity {
    private 'max_broker'?: string;
    private 'max_topic_per_broker'?: string;
    private 'max_consumer_per_broker'?: string;
    private 'max_storage_per_node'?: string;
    private 'min_broker'?: string;
    private 'engine_versions'?: string;
    private 'min_storage_per_node'?: string;
    private 'product_alias'?: string;
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
}