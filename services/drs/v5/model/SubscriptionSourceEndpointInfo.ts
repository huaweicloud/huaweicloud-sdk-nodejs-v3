

export class SubscriptionSourceEndpointInfo {
    public id?: string;
    public type?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SubscriptionSourceEndpointInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): SubscriptionSourceEndpointInfo {
        this['type'] = type;
        return this;
    }
}