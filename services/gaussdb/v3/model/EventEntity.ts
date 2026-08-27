

export class EventEntity {
    private 'event_entity_id'?: string;
    private 'event_entity_status'?: string;
    public constructor() { 
    }
    public withEventEntityId(eventEntityId: string): EventEntity {
        this['event_entity_id'] = eventEntityId;
        return this;
    }
    public set eventEntityId(eventEntityId: string  | undefined) {
        this['event_entity_id'] = eventEntityId;
    }
    public get eventEntityId(): string | undefined {
        return this['event_entity_id'];
    }
    public withEventEntityStatus(eventEntityStatus: string): EventEntity {
        this['event_entity_status'] = eventEntityStatus;
        return this;
    }
    public set eventEntityStatus(eventEntityStatus: string  | undefined) {
        this['event_entity_status'] = eventEntityStatus;
    }
    public get eventEntityStatus(): string | undefined {
        return this['event_entity_status'];
    }
}