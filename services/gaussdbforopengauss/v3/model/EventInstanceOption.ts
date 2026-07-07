

export class EventInstanceOption {
    private 'event_id'?: string;
    private 'instance_id'?: string;
    public constructor(eventId?: string, instanceId?: string) { 
        this['event_id'] = eventId;
        this['instance_id'] = instanceId;
    }
    public withEventId(eventId: string): EventInstanceOption {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withInstanceId(instanceId: string): EventInstanceOption {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}