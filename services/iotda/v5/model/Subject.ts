

export class Subject {
    public resource: string;
    public event: string;
    public constructor(resource?: any, event?: any) { 
        this['resource'] = resource;
        this['event'] = event;
    }
    public withResource(resource: string): Subject {
        this['resource'] = resource;
        return this;
    }
    public withEvent(event: string): Subject {
        this['event'] = event;
        return this;
    }
}