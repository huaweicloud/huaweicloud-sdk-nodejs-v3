

export class RoutingRuleSubject {
    public resource: string;
    public event: string;
    public constructor(resource?: any, event?: any) { 
        this['resource'] = resource;
        this['event'] = event;
    }
    public withResource(resource: string): RoutingRuleSubject {
        this['resource'] = resource;
        return this;
    }
    public withEvent(event: string): RoutingRuleSubject {
        this['event'] = event;
        return this;
    }
}