

export class RabbitMQExtendProductPropertiesEntity {
    private 'max_broker'?: string | undefined;
    private 'max_storage_per_node'?: string | undefined;
    private 'min_broker'?: string | undefined;
    private 'min_storage_per_node'?: string | undefined;
    private 'max_connection_per_broker'?: string | undefined;
    private 'step_length'?: string | undefined;
    private 'product_alias'?: string | undefined;
    private 'max_queue_per_broker'?: string | undefined;
    public constructor() { 
    }
    public withMaxBroker(maxBroker: string): RabbitMQExtendProductPropertiesEntity {
        this['max_broker'] = maxBroker;
        return this;
    }
    public set maxBroker(maxBroker: string | undefined) {
        this['max_broker'] = maxBroker;
    }
    public get maxBroker() {
        return this['max_broker'];
    }
    public withMaxStoragePerNode(maxStoragePerNode: string): RabbitMQExtendProductPropertiesEntity {
        this['max_storage_per_node'] = maxStoragePerNode;
        return this;
    }
    public set maxStoragePerNode(maxStoragePerNode: string | undefined) {
        this['max_storage_per_node'] = maxStoragePerNode;
    }
    public get maxStoragePerNode() {
        return this['max_storage_per_node'];
    }
    public withMinBroker(minBroker: string): RabbitMQExtendProductPropertiesEntity {
        this['min_broker'] = minBroker;
        return this;
    }
    public set minBroker(minBroker: string | undefined) {
        this['min_broker'] = minBroker;
    }
    public get minBroker() {
        return this['min_broker'];
    }
    public withMinStoragePerNode(minStoragePerNode: string): RabbitMQExtendProductPropertiesEntity {
        this['min_storage_per_node'] = minStoragePerNode;
        return this;
    }
    public set minStoragePerNode(minStoragePerNode: string | undefined) {
        this['min_storage_per_node'] = minStoragePerNode;
    }
    public get minStoragePerNode() {
        return this['min_storage_per_node'];
    }
    public withMaxConnectionPerBroker(maxConnectionPerBroker: string): RabbitMQExtendProductPropertiesEntity {
        this['max_connection_per_broker'] = maxConnectionPerBroker;
        return this;
    }
    public set maxConnectionPerBroker(maxConnectionPerBroker: string | undefined) {
        this['max_connection_per_broker'] = maxConnectionPerBroker;
    }
    public get maxConnectionPerBroker() {
        return this['max_connection_per_broker'];
    }
    public withStepLength(stepLength: string): RabbitMQExtendProductPropertiesEntity {
        this['step_length'] = stepLength;
        return this;
    }
    public set stepLength(stepLength: string | undefined) {
        this['step_length'] = stepLength;
    }
    public get stepLength() {
        return this['step_length'];
    }
    public withProductAlias(productAlias: string): RabbitMQExtendProductPropertiesEntity {
        this['product_alias'] = productAlias;
        return this;
    }
    public set productAlias(productAlias: string | undefined) {
        this['product_alias'] = productAlias;
    }
    public get productAlias() {
        return this['product_alias'];
    }
    public withMaxQueuePerBroker(maxQueuePerBroker: string): RabbitMQExtendProductPropertiesEntity {
        this['max_queue_per_broker'] = maxQueuePerBroker;
        return this;
    }
    public set maxQueuePerBroker(maxQueuePerBroker: string | undefined) {
        this['max_queue_per_broker'] = maxQueuePerBroker;
    }
    public get maxQueuePerBroker() {
        return this['max_queue_per_broker'];
    }
}