

export class ListEnginePropertiesEntity {
    private 'max_partition_per_broker'?: string | undefined;
    private 'max_broker'?: string | undefined;
    private 'max_storage_per_node'?: string | undefined;
    private 'max_consumer_per_broker'?: string | undefined;
    private 'min_broker'?: string | undefined;
    private 'max_bandwidth_per_broker'?: string | undefined;
    private 'min_storage_per_node'?: string | undefined;
    private 'max_tps_per_broker'?: string | undefined;
    private 'product_alias'?: string | undefined;
    public constructor() { 
    }
    public withMaxPartitionPerBroker(maxPartitionPerBroker: string): ListEnginePropertiesEntity {
        this['max_partition_per_broker'] = maxPartitionPerBroker;
        return this;
    }
    public set maxPartitionPerBroker(maxPartitionPerBroker: string | undefined) {
        this['max_partition_per_broker'] = maxPartitionPerBroker;
    }
    public get maxPartitionPerBroker() {
        return this['max_partition_per_broker'];
    }
    public withMaxBroker(maxBroker: string): ListEnginePropertiesEntity {
        this['max_broker'] = maxBroker;
        return this;
    }
    public set maxBroker(maxBroker: string | undefined) {
        this['max_broker'] = maxBroker;
    }
    public get maxBroker() {
        return this['max_broker'];
    }
    public withMaxStoragePerNode(maxStoragePerNode: string): ListEnginePropertiesEntity {
        this['max_storage_per_node'] = maxStoragePerNode;
        return this;
    }
    public set maxStoragePerNode(maxStoragePerNode: string | undefined) {
        this['max_storage_per_node'] = maxStoragePerNode;
    }
    public get maxStoragePerNode() {
        return this['max_storage_per_node'];
    }
    public withMaxConsumerPerBroker(maxConsumerPerBroker: string): ListEnginePropertiesEntity {
        this['max_consumer_per_broker'] = maxConsumerPerBroker;
        return this;
    }
    public set maxConsumerPerBroker(maxConsumerPerBroker: string | undefined) {
        this['max_consumer_per_broker'] = maxConsumerPerBroker;
    }
    public get maxConsumerPerBroker() {
        return this['max_consumer_per_broker'];
    }
    public withMinBroker(minBroker: string): ListEnginePropertiesEntity {
        this['min_broker'] = minBroker;
        return this;
    }
    public set minBroker(minBroker: string | undefined) {
        this['min_broker'] = minBroker;
    }
    public get minBroker() {
        return this['min_broker'];
    }
    public withMaxBandwidthPerBroker(maxBandwidthPerBroker: string): ListEnginePropertiesEntity {
        this['max_bandwidth_per_broker'] = maxBandwidthPerBroker;
        return this;
    }
    public set maxBandwidthPerBroker(maxBandwidthPerBroker: string | undefined) {
        this['max_bandwidth_per_broker'] = maxBandwidthPerBroker;
    }
    public get maxBandwidthPerBroker() {
        return this['max_bandwidth_per_broker'];
    }
    public withMinStoragePerNode(minStoragePerNode: string): ListEnginePropertiesEntity {
        this['min_storage_per_node'] = minStoragePerNode;
        return this;
    }
    public set minStoragePerNode(minStoragePerNode: string | undefined) {
        this['min_storage_per_node'] = minStoragePerNode;
    }
    public get minStoragePerNode() {
        return this['min_storage_per_node'];
    }
    public withMaxTpsPerBroker(maxTpsPerBroker: string): ListEnginePropertiesEntity {
        this['max_tps_per_broker'] = maxTpsPerBroker;
        return this;
    }
    public set maxTpsPerBroker(maxTpsPerBroker: string | undefined) {
        this['max_tps_per_broker'] = maxTpsPerBroker;
    }
    public get maxTpsPerBroker() {
        return this['max_tps_per_broker'];
    }
    public withProductAlias(productAlias: string): ListEnginePropertiesEntity {
        this['product_alias'] = productAlias;
        return this;
    }
    public set productAlias(productAlias: string | undefined) {
        this['product_alias'] = productAlias;
    }
    public get productAlias() {
        return this['product_alias'];
    }
}