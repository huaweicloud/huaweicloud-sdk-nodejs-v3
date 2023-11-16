

export class TriggerMetadataList {
    private 'trigger_name'?: string;
    private 'trigger_type'?: string;
    private 'event_type'?: string;
    private 'event_data'?: string;
    public constructor() { 
    }
    public withTriggerName(triggerName: string): TriggerMetadataList {
        this['trigger_name'] = triggerName;
        return this;
    }
    public set triggerName(triggerName: string  | undefined) {
        this['trigger_name'] = triggerName;
    }
    public get triggerName(): string | undefined {
        return this['trigger_name'];
    }
    public withTriggerType(triggerType: string): TriggerMetadataList {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withEventType(eventType: string): TriggerMetadataList {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventData(eventData: string): TriggerMetadataList {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: string  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): string | undefined {
        return this['event_data'];
    }
}