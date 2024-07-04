

export class DeleteBindingRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public exchange?: string;
    private 'destination_type'?: string;
    public destination?: string;
    private 'properties_key'?: string;
    public constructor(instanceId?: string, vhost?: string, exchange?: string, destinationType?: string, destination?: string, propertiesKey?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
        this['exchange'] = exchange;
        this['destination_type'] = destinationType;
        this['destination'] = destination;
        this['properties_key'] = propertiesKey;
    }
    public withInstanceId(instanceId: string): DeleteBindingRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): DeleteBindingRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withExchange(exchange: string): DeleteBindingRequest {
        this['exchange'] = exchange;
        return this;
    }
    public withDestinationType(destinationType: string): DeleteBindingRequest {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): string | undefined {
        return this['destination_type'];
    }
    public withDestination(destination: string): DeleteBindingRequest {
        this['destination'] = destination;
        return this;
    }
    public withPropertiesKey(propertiesKey: string): DeleteBindingRequest {
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