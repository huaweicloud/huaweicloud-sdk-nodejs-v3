

export class ExtendProductPropertiesEntity {
    private 'max_partition_per_broker'?: string;
    private 'max_broker'?: string;
    private 'max_storage_per_node'?: string;
    private 'max_consumer_per_broker'?: string;
    private 'min_broker'?: string;
    private 'max_bandwidth_per_broker'?: string;
    private 'min_storage_per_node'?: string;
    private 'max_tps_per_broker'?: string;
    private 'product_alias'?: string;
    public constructor() { 
    }
    public withMaxPartitionPerBroker(maxPartitionPerBroker: string): ExtendProductPropertiesEntity {
        this['max_partition_per_broker'] = maxPartitionPerBroker;
        return this;
    }
    public set maxPartitionPerBroker(maxPartitionPerBroker: string  | undefined) {
        this['max_partition_per_broker'] = maxPartitionPerBroker;
    }
    public get maxPartitionPerBroker(): string | undefined {
        return this['max_partition_per_broker'];
    }
    public withMaxBroker(maxBroker: string): ExtendProductPropertiesEntity {
        this['max_broker'] = maxBroker;
        return this;
    }
    public set maxBroker(maxBroker: string  | undefined) {
        this['max_broker'] = maxBroker;
    }
    public get maxBroker(): string | undefined {
        return this['max_broker'];
    }
    public withMaxStoragePerNode(maxStoragePerNode: string): ExtendProductPropertiesEntity {
        this['max_storage_per_node'] = maxStoragePerNode;
        return this;
    }
    public set maxStoragePerNode(maxStoragePerNode: string  | undefined) {
        this['max_storage_per_node'] = maxStoragePerNode;
    }
    public get maxStoragePerNode(): string | undefined {
        return this['max_storage_per_node'];
    }
    public withMaxConsumerPerBroker(maxConsumerPerBroker: string): ExtendProductPropertiesEntity {
        this['max_consumer_per_broker'] = maxConsumerPerBroker;
        return this;
    }
    public set maxConsumerPerBroker(maxConsumerPerBroker: string  | undefined) {
        this['max_consumer_per_broker'] = maxConsumerPerBroker;
    }
    public get maxConsumerPerBroker(): string | undefined {
        return this['max_consumer_per_broker'];
    }
    public withMinBroker(minBroker: string): ExtendProductPropertiesEntity {
        this['min_broker'] = minBroker;
        return this;
    }
    public set minBroker(minBroker: string  | undefined) {
        this['min_broker'] = minBroker;
    }
    public get minBroker(): string | undefined {
        return this['min_broker'];
    }
    public withMaxBandwidthPerBroker(maxBandwidthPerBroker: string): ExtendProductPropertiesEntity {
        this['max_bandwidth_per_broker'] = maxBandwidthPerBroker;
        return this;
    }
    public set maxBandwidthPerBroker(maxBandwidthPerBroker: string  | undefined) {
        this['max_bandwidth_per_broker'] = maxBandwidthPerBroker;
    }
    public get maxBandwidthPerBroker(): string | undefined {
        return this['max_bandwidth_per_broker'];
    }
    public withMinStoragePerNode(minStoragePerNode: string): ExtendProductPropertiesEntity {
        this['min_storage_per_node'] = minStoragePerNode;
        return this;
    }
    public set minStoragePerNode(minStoragePerNode: string  | undefined) {
        this['min_storage_per_node'] = minStoragePerNode;
    }
    public get minStoragePerNode(): string | undefined {
        return this['min_storage_per_node'];
    }
    public withMaxTpsPerBroker(maxTpsPerBroker: string): ExtendProductPropertiesEntity {
        this['max_tps_per_broker'] = maxTpsPerBroker;
        return this;
    }
    public set maxTpsPerBroker(maxTpsPerBroker: string  | undefined) {
        this['max_tps_per_broker'] = maxTpsPerBroker;
    }
    public get maxTpsPerBroker(): string | undefined {
        return this['max_tps_per_broker'];
    }
    public withProductAlias(productAlias: string): ExtendProductPropertiesEntity {
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