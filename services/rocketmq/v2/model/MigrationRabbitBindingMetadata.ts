

export class MigrationRabbitBindingMetadata {
    public vhost?: string;
    public source?: string;
    public destination?: string;
    private 'destination_type'?: string;
    private 'routing_key'?: string;
    public constructor() { 
    }
    public withVhost(vhost: string): MigrationRabbitBindingMetadata {
        this['vhost'] = vhost;
        return this;
    }
    public withSource(source: string): MigrationRabbitBindingMetadata {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: string): MigrationRabbitBindingMetadata {
        this['destination'] = destination;
        return this;
    }
    public withDestinationType(destinationType: string): MigrationRabbitBindingMetadata {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): string | undefined {
        return this['destination_type'];
    }
    public withRoutingKey(routingKey: string): MigrationRabbitBindingMetadata {
        this['routing_key'] = routingKey;
        return this;
    }
    public set routingKey(routingKey: string  | undefined) {
        this['routing_key'] = routingKey;
    }
    public get routingKey(): string | undefined {
        return this['routing_key'];
    }
}