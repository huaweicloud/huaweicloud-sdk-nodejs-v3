

export class CreateBindingBody {
    public destination?: string;
    private 'routing_key'?: string;
    private 'destination_type'?: string;
    public constructor(destination?: string, routingKey?: string, destinationType?: string) { 
        this['destination'] = destination;
        this['routing_key'] = routingKey;
        this['destination_type'] = destinationType;
    }
    public withDestination(destination: string): CreateBindingBody {
        this['destination'] = destination;
        return this;
    }
    public withRoutingKey(routingKey: string): CreateBindingBody {
        this['routing_key'] = routingKey;
        return this;
    }
    public set routingKey(routingKey: string  | undefined) {
        this['routing_key'] = routingKey;
    }
    public get routingKey(): string | undefined {
        return this['routing_key'];
    }
    public withDestinationType(destinationType: string): CreateBindingBody {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): string | undefined {
        return this['destination_type'];
    }
}