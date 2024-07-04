

export class BindingsDetails {
    public source?: string;
    private 'destination_type'?: string;
    public destination?: string;
    private 'routing_key'?: string;
    private 'properties_key'?: string;
    public constructor() { 
    }
    public withSource(source: string): BindingsDetails {
        this['source'] = source;
        return this;
    }
    public withDestinationType(destinationType: string): BindingsDetails {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): string | undefined {
        return this['destination_type'];
    }
    public withDestination(destination: string): BindingsDetails {
        this['destination'] = destination;
        return this;
    }
    public withRoutingKey(routingKey: string): BindingsDetails {
        this['routing_key'] = routingKey;
        return this;
    }
    public set routingKey(routingKey: string  | undefined) {
        this['routing_key'] = routingKey;
    }
    public get routingKey(): string | undefined {
        return this['routing_key'];
    }
    public withPropertiesKey(propertiesKey: string): BindingsDetails {
        this['properties_key'] = propertiesKey;
        return this;
    }
    public set propertiesKey(propertiesKey: string  | undefined) {
        this['properties_key'] = propertiesKey;
    }
    public get propertiesKey(): string | undefined {
        return this['properties_key'];
    }
}