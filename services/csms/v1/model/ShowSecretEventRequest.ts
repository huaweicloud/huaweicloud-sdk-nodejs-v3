

export class ShowSecretEventRequest {
    private 'event_name'?: string;
    public constructor(eventName?: string) { 
        this['event_name'] = eventName;
    }
    public withEventName(eventName: string): ShowSecretEventRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
}